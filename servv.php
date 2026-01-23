<?php
/**
 * Plugin Name: Servv AI Event Booking
 * Plugin URI: https://github.com/coderisetechnologiesinc/servvai-event-booking/
 * Description: Easily manage event bookings and schedules for both online and in-person experiences, powered by smart AI features.
 * Version: 1.0.15
 * Author: Servv Inc.
 * Author URI: https://servv.ai/
 * License: GPL2
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

const SERVV_PLUGIN_SLUG = 'servvai-event-booking';
const SERVV_EVENT_POST_TYPE = 'servv_event';

require_once __DIR__ . '/vendor-prefixed/autoload.php';
require_once __DIR__ . '/inc/helpers.php';
require_once __DIR__ . '/inc/api.php';
require_once __DIR__ . '/inc/n8n.php';

add_action('servv_plugin_delayed_install', 'servv_plugin_make_delayed_install');
add_action('rest_api_init', 'servv_plugin_register_api_endpoint', 1);

//Multisite Activation 
register_activation_hook(__FILE__, 'servv_plugin_activate_multisite');

function servv_plugin_activate_multisite($network_wide) {
    if (is_multisite() && $network_wide) {
        $sites = get_sites();
        foreach ($sites as $site) {
            switch_to_blog($site->blog_id);
            servv_plugin_activate_single_site();
            restore_current_blog();
        }
    } else {
        servv_plugin_activate_single_site();
    }
}

function servv_plugin_activate_single_site() {
    if (!wp_next_scheduled('servv_plugin_delayed_install')) {
        wp_schedule_single_event(time() + 5, 'servv_plugin_delayed_install');
    }
    if (function_exists('spawn_cron')) {
        spawn_cron();
    }
}

//Multisite Deactivation 
register_deactivation_hook(__FILE__, 'servv_plugin_deactivate_multisite');

function servv_plugin_deactivate_multisite($network_wide) {
    if (is_multisite() && $network_wide) {
        $sites = get_sites();
        foreach ($sites as $site) {
            switch_to_blog($site->blog_id);
            servv_plugin_deactivate_single_site();
            restore_current_blog();
        }
    } else {
        servv_plugin_deactivate_single_site();
    }
}

function servv_plugin_deactivate_single_site() {
    wp_clear_scheduled_hook('servv_plugin_delayed_install');
    delete_option('servv_install_status');

    try {
        servvSendApiRequest('/wordpress/uninstall', [], 'POST');
    } catch (Exception $e) {
    }
}

/**
 * Handle new site creation in a multisite network.
 * Automatically runs plugin setup for the new sub-site.
 */
 
add_action('wpmu_new_blog', 'servv_plugin_new_blog', 10, 6);
function servv_plugin_new_blog($blog_id, $user_id, $domain, $path, $site_id, $meta) {
    switch_to_blog($blog_id);
    servv_plugin_activate_single_site();
    restore_current_blog();
}

function servv_plugin_register_api_endpoint() {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/check-signature', [
            'methods' => 'GET',
            'callback' => 'servv_plugin_check_signature',
            'permission_callback' => '__return_true' // Allows public access
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/variant-info/(?P<event_id>\d+)/(?P<variant_id>\d+)', [
            'methods' => 'GET',
            'callback' => 'servv_get_product_info',
            'permission_callback' => 'servv_validate_request_from_servv_api'
    ]);
}

function servv_plugin_make_delayed_install() {
    $siteDomain = wp_parse_url( servv_plugin_get_config('site_url'), PHP_URL_HOST );
    $siteName = get_bloginfo('name');
    $adminEmail = get_bloginfo('admin_email');
    $wpVersion = get_bloginfo('version');
    $pluginVersion = servv_plugin_get_config('plugin_version');
    $uuid = servv_plugin_get_uuid();
    $requestBody = [
            'site_domain' => $siteDomain,
            'site_name' => $siteName,
            'admin_email' => $adminEmail,
            'wp_version' => $wpVersion,
            'plugin_version' => $pluginVersion,
            'uuid' => $uuid
    ];

    $maxAttempts = 5;
    for ($attempt = 1; $attempt <= $maxAttempts; $attempt++) {
        try {
            $response = servvSendApiRequest('/wordpress/authenticate/install', $requestBody, 'POST');
            update_option('servv_install_status', 'ok');
            return;
        } catch (\Throwable $e) {
            error_log(sprintf(
                    'Install attempt %d/%d failed: %s',
                    $attempt, $maxAttempts, $e->getMessage()
            ));
            if ($attempt < $maxAttempts) {
                sleep(5);
            }
        }
    }
    update_option('servv_install_status', 'failed');
    // deactivate_plugins( plugin_basename( __FILE__ ) );
}


function servv_plugin_activate() {
    if (!wp_next_scheduled('servv_plugin_delayed_install')) {
        wp_schedule_single_event(time() + 5, 'servv_plugin_delayed_install');
    }
    if ( function_exists('spawn_cron') ) {
        spawn_cron();
    }
}

function servv_plugin_deactivate() {
    wp_clear_scheduled_hook('servv_plugin_delayed_install');
    delete_option('servv_install_status');

    try {
        servvSendApiRequest('/wordpress/uninstall', [], 'POST');
    } catch (Exception $e) {
    }
}

function servv_plugin_get_config($key) {
    $defaults = require __DIR__ . '/config.php';
    $dbSettings = is_multisite() ? get_site_option('servv_plugin_settings', []) : get_option('servv_plugin_settings', []);

    $config = array_merge($defaults, $dbSettings);
    return $config[$key] ?? null;
}
define('SERVV_PLUGIN_VERSION', '1.0.0');

// ─────────────────────────────────────────────────────────────────────────────
// Block Editor Registration + Editor Script Localization
// ─────────────────────────────────────────────────────────────────────────────

function servv_plugin_block_init() {
    $block = register_block_type_from_metadata(__DIR__ . '/build');

    $script_handle = $block->editor_script_handles[0] ?? null;
    if ($script_handle) {
        wp_localize_script(
            $script_handle,
            'servvData',
            [
                'servv_plugin_mode' => servv_plugin_get_config('servv_plugin_mode'),
                'nonce'             => wp_create_nonce("wp_rest"),
                'ajaxUrl'           => admin_url('admin-ajax.php'),
                'restUrl'           => esc_url_raw(rest_url()),
            ]
        );
    }
}
add_action('init', 'servv_plugin_block_init');

// ─────────────────────────────────────────────────────────────────────────────
// Frontend View Script Localization
// ─────────────────────────────────────────────────────────────────────────────

add_action('wp_enqueue_scripts', 'servv_localize_view_script');
function servv_localize_view_script() {
    $json = file_get_contents(plugin_dir_path(__FILE__) . 'build/block.json');
    $block_metadata = json_decode($json, true);

    $handle = $block_metadata['viewScriptHandle'] ?? 'create-block-servv-plugin-view-script';

    if (wp_script_is($handle, 'enqueued')) {
        wp_localize_script($handle, 'servvData', [
            'ajaxUrl'            => admin_url('admin-ajax.php'),
            'security'           => wp_create_nonce('payment_nonce'),
            'servv_plugin_mode'  => servv_plugin_get_config('servv_plugin_mode'),
        ]);
    }
}

add_action('wp_enqueue_scripts', function () {

    if (!is_singular()) return;

    $event_id = get_post_meta(get_the_ID(), 'servv_event_id', true);
    if (!$event_id) return;

    $asset = require plugin_dir_path(__FILE__) . 'build/checkout.asset.php';

    wp_enqueue_style(
        'servv-checkout-styles',
        plugin_dir_url(__FILE__) . 'build-assets/index.css',
        [],
        $asset['version']
    );

    wp_enqueue_script(
        'servv-checkout',
        plugin_dir_url(__FILE__) . 'build/checkout.js',
        $asset['dependencies'], 
        $asset['version'],
        true
    );

    wp_localize_script('servv-checkout', 'servvCheckoutData', [
        'postId'  => get_the_ID(),
        'eventId' => $event_id,
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'restUrl' => rest_url(),
        'nonce'   => wp_create_nonce('payment_nonce'),
    ]);
});




// ─────────────────────────────────────────────────────────────────────────────
// Stripe Script
// ─────────────────────────────────────────────────────────────────────────────

// function servv_enqueue_stripe_scripts() {
//     wp_register_script('servv-plugin-frontend', '', [],   SERVV_PLUGIN_VERSION, true);
//     wp_enqueue_script('servv-plugin-frontend');

//     wp_localize_script('servv-plugin-frontend', 'servvData', [
//         'ajaxUrl'  => admin_url('admin-ajax.php'),
//         'security' => wp_create_nonce('payment_nonce'),
//     ]);
// }
// add_action('wp_enqueue_scripts', 'servv_enqueue_stripe_scripts');

// ─────────────────────────────────────────────────────────────────────────────
// Frontend Shortcode Rendering
// ─────────────────────────────────────────────────────────────────────────────

add_filter('the_content', 'servv_add_event_purchase_form');
add_shortcode('servv_event_purchase_form', 'servv_render_event_purchase_form');

function servv_add_event_purchase_form($content) {
    $servvEventId = get_post_meta(get_the_ID(), 'servv_event_id', true);
    if (!empty($servvEventId)) {
        $content .= do_shortcode('[servv_event_purchase_form id="' . get_the_ID() . '"]');
    }
    return $content;
}


function servv_render_event_purchase_form($atts) {
    $atts = shortcode_atts(['id' => 0], $atts);
    ob_start();
    ?>
    <div id="servv-on-product-widget"></div>
    <input type="hidden" id="post-id" value="<?php echo esc_attr($atts['id']); ?>">
    <?php
    return ob_get_clean();
}

// ─────────────────────────────────────────────────────────────────────────────
// Admin App (React) + Localization
// ─────────────────────────────────────────────────────────────────────────────

add_action('admin_menu', 'servv_add_admin_page');
add_action('admin_enqueue_scripts', 'servv_admin_enqueue_scripts');

function servv_add_admin_page() {
    add_menu_page('ServvAI', 'ServvAI Events', 'manage_options', SERVV_PLUGIN_SLUG, 'servv_render_admin_page','dashicons-calendar-alt');
    
    add_submenu_page(
        SERVV_PLUGIN_SLUG,
        'Dashboard',
        'Dashboard',
        'manage_options',
        SERVV_PLUGIN_SLUG,
        'servv_render_admin_page'
    );

    add_submenu_page(SERVV_PLUGIN_SLUG, 'Zoom Integration', 'Zoom Integration', 'manage_options', 'servv-plugin-zoom-confirm-page', 'servv_plugin_zoom_confirm');
    // remove_submenu_page(SERVV_PLUGIN_SLUG, 'servv-plugin-zoom-confirm-page');

    add_submenu_page(SERVV_PLUGIN_SLUG, 'Calendar Integration', 'Calendar Integration', 'manage_options', 'servv-plugin-calendar-confirm-page', 'servv_plugin_calendar_confirm');
    // remove_submenu_page(SERVV_PLUGIN_SLUG, 'servv-plugin-calendar-confirm-page');

    add_submenu_page(SERVV_PLUGIN_SLUG, 'Gmail Integration', 'Gmail Integration', 'manage_options', 'servv-plugin-gmail-confirm-page', 'servv_plugin_gmail_confirm');
    // remove_submenu_page(SERVV_PLUGIN_SLUG, 'servv-plugin-gmail-confirm-page');

    add_submenu_page(SERVV_PLUGIN_SLUG, 'Stripe Integration', 'Stripe Integration', 'manage_options', 'servv-plugin-stripe-confirm-page', 'servv_plugin_stripe_confirm');
    // remove_submenu_page(SERVV_PLUGIN_SLUG, 'servv-plugin-stripe-confirm-page');
   
    wp_enqueue_style(
    'servv-admin-style',
    plugins_url('admin.css', __FILE__), // directly in same folder as this PHP file
    [],
    SERVV_PLUGIN_VERSION
);
}

function servv_render_admin_page() {
    echo '<div id="servv-wrap"></div>';
}

// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- no nonce check in servv_admin_enqueue_scripts
function servv_admin_enqueue_scripts() {
    if (!isset($_GET['page'])) return;

    $page = sanitize_text_field(wp_unslash($_GET['page']));
    if ($page !== SERVV_PLUGIN_SLUG && $page !== 'events') return;

    $asset_file = include plugin_dir_path(__FILE__) . 'build/admin.asset.php';


    wp_enqueue_style(
    'servv-inter-font',
    'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900&display=swap',
    [],
    null
    );

     wp_enqueue_style(
        'servv-styles',
        plugins_url('build-assets/index.css', __FILE__),
        ['servv-inter-font'],
        SERVV_PLUGIN_VERSION
    );
    wp_enqueue_script(
        SERVV_PLUGIN_SLUG,
        plugins_url('build/admin.js', __FILE__),
        $asset_file['dependencies'],
        SERVV_PLUGIN_VERSION,
        true
    );
    wp_localize_script(SERVV_PLUGIN_SLUG, 'servvData', [
        'page'              => $page,
        'pluginUrl'         => plugin_dir_url(__FILE__),
        'nonce'             => wp_create_nonce("wp_rest"),
        'stripePublicKey'   => get_option('servv_stripe_public_key'),
        'stripeAccountId'   => get_option('servv_stripe_account_id'),
        'shopify_app'       => servv_plugin_get_config('shopify_app_url'),
        'servv_plugin_mode' => servv_plugin_get_config('servv_plugin_mode'),
        'postUrl'           => admin_url('post.php'),
        'adminUrl'          => admin_url('admin.php'),
        'install_status'    => get_option('servv_install_status', ''),
        'gutenberg_active'  => (int)function_exists( 'register_block_type' )
    ]);
}

// ─────────────────────────────────────────────────────────────────────────────
// Widget Vue.js Integration + Shortcode
// ─────────────────────────────────────────────────────────────────────────────

add_action('wp_enqueue_scripts', 'servv_load_vue_scripts');
add_shortcode('servvai', 'servv_widget_shortcode');

function servv_load_vue_scripts() {
    $plugin_base_url = plugin_dir_url(__FILE__) . 'widget/dist/';
    $plugin_dir = plugin_dir_path(__FILE__) . 'widget/dist/';

    // Define load order: vendors -> common -> chunks -> main widget
    $load_order = ['vendors.js', 'common.js'];
    $all_handles = [];

    // --- Load JS files in specific order ---
    $js_dir = $plugin_dir . 'js/';
    
    // 1. Load vendors and common first
    foreach ($load_order as $filename) {
        $filepath = $js_dir . $filename;
        if (file_exists($filepath)) {
            $handle = 'servv_' . str_replace(['.js', '-', '.'], ['', '_', '_'], $filename);
            $deps = !empty($all_handles) ? [$all_handles[count($all_handles) - 1]] : [];
            
            wp_enqueue_script(
                $handle,
                $plugin_base_url . 'js/' . $filename,
                $deps,
                defined('SERVV_PLUGIN_VERSION') ? SERVV_PLUGIN_VERSION : false,
                true
            );
            $all_handles[] = $handle;
        }
    }

    // 2. Load chunk files (excluding vendors, common, and servv-widget)
    $js_files = glob($js_dir . '*.js');
    if ($js_files) {
        foreach ($js_files as $js_file) {
            $filename = basename($js_file);
            
            // Skip already loaded files and main widget
            if (in_array($filename, ['vendors.js', 'common.js', 'servv-widget.js']) || 
                strpos($filename, '.map') !== false) {
                continue;
            }

            $handle = 'servv_' . str_replace(['.js', '-', '.'], ['', '_', '_'], $filename);
            $deps = !empty($all_handles) ? $all_handles : [];

            wp_enqueue_script(
                $handle,
                $plugin_base_url . 'js/' . $filename,
                $deps,
                defined('SERVV_PLUGIN_VERSION') ? SERVV_PLUGIN_VERSION : false,
                true
            );
            $all_handles[] = $handle;
        }
    }

    // 3. Load main widget JS last
    $widget_js = $js_dir . 'servv-widget.js';
    if (file_exists($widget_js)) {
        wp_enqueue_script(
            'servv_widget',
            $plugin_base_url . 'js/servv-widget.js',
            $all_handles, // Depends on all previous scripts
            defined('SERVV_PLUGIN_VERSION') ? SERVV_PLUGIN_VERSION : false,
            true
        );
        $all_handles[] = 'servv_widget';
    }

    // --- Load CSS files ---
    $css_files = glob($plugin_dir . 'css/*.css');
    if ($css_files) {
        foreach ($css_files as $css_file) {
            $filename = basename($css_file);
            $handle = 'servv_' . str_replace(['.css', '-', '.'], ['', '_', '_'], $filename);

            wp_enqueue_style(
                $handle,
                $plugin_base_url . 'css/' . $filename,
                [],
                defined('SERVV_PLUGIN_VERSION') ? SERVV_PLUGIN_VERSION : false
            );
        }
    }

    // --- Localize data for frontend ---
    if (!empty($all_handles)) {
        // Attach to the main widget script, or the last loaded script
        $target_handle = in_array('servv_widget', $all_handles) ? 'servv_widget' : end($all_handles);
        
        wp_localize_script($target_handle, 'servvAjax', [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('payment_nonce'),
            'assets_url' => $plugin_base_url,
        ]);
    }
}


function servv_widget_shortcode($atts) {

    $themes = [
        'blue' => [
            'light' => [
                'brand-color-primary'   => '#165DFB',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#165DFB',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#2C7FFF',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#2C7FFF',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'green' => [
            'light' => [
                'brand-color-primary'   => '#62AC00',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#62AC00',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#66B101',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#66B101',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'orange' => [
            'light' => [
                'brand-color-primary'   => '#E07000',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#E07000',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#F49200',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#F49200',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'red' => [
            'light' => [
                'brand-color-primary'   => '#F9084B',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#F9084B',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#F91951',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#F91951',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'purple' => [
            'light' => [
                'brand-color-primary'   => '#9109F3',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#9109F3',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#A537FF',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#A537FF',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'light-red' => [
            'light' => [
                'brand-color-primary'   => '#EB4902',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#EB4902',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#F96600',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#F96600',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'cyan' => [
            'light' => [
                'brand-color-primary'   => '#00AB9C',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#00AB9C',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#00C4AE',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#00C4AE',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
    ];


    $atts = array_merge(['preset' => 'light', 'style' => 'blue','location' => '',
        'category' => '',
        'member'   => '',
        'language' => '',], $atts);

    $presetName = $atts['preset']; // "light" or "dark"
    $styleName  = $atts['style'];  // "blue", "green", etc.
    $defaultLocation = $atts['location'];
    $defaultCategory = $atts['category'];
    $defaultMember = $atts['member'];
    $defaultLanguage = $atts['language'];
    // fallback if style doesn't exist
    if (!isset($themes[$styleName])) {
        $styleName = 'blue';
    }

    // fallback if preset doesn't exist
    if (!isset($themes[$styleName][$presetName])) {
        $presetName = 'light';
    }

    $finalVars = $themes[$styleName][$presetName];

    // Allow overrides from shortcode attributes
    foreach ($atts as $key => $value) {
        if ($key === 'preset' || $key === 'style') continue; 
        if ($value !== '' && array_key_exists($key, $finalVars)) {
            $finalVars[$key] = $value;
        }
    }
    
    // Build CSS variables
    $style  = '--servv-primary-color:'       . esc_attr($finalVars['brand-color-primary'])   . ';';
    $style .= '--servv-secondary-color:'     . esc_attr($finalVars['brand-color-secondary']) . ';';
    $style .= '--servv-widget-background:'   . esc_attr($finalVars['widget-background'])     . ';';
    $style .= '--servv-text-main:'           . esc_attr($finalVars['text-main'])             . ';';
    $style .= '--servv-text-secondary:'      . esc_attr($finalVars['text-secondary'])        . ';';
    $style .= '--servv-text-tertiary:'       . esc_attr($finalVars['text-tertiary'])         . ';';
    $style .= '--servv-card-background:'     . esc_attr($finalVars['card-background'])       . ';';
    $style .= '--servv-elements-background:' . esc_attr($finalVars['elements-background'])   . ';';
    $style .= '--servv-link-hover-color:'    . esc_attr($finalVars['link-hover'])            . ';';
    $style .= '--servv-elements-border:'     . esc_attr($finalVars['elements-border'])       . ';';

    $output  = '<style>:root { ' . $style . ' }</style>';
    $output .= '<div id="widget-wrapper" '
    . 'data-widget-location="' . esc_attr( $defaultLocation ) . '" '
    . 'data-widget-category="' . esc_attr( $defaultCategory ) . '" '
    . 'data-widget-member="' . esc_attr( $defaultMember ) . '" '
    . 'data-widget-language="' . esc_attr( $defaultLanguage ) . '">'
    . '<div id="servv-widget"></div>'
    . '</div>';


    return $output;
    
}

/**
 * --------------------------------------------------------------------------
 * Load Platform Widget Assets (Vue build)
 * --------------------------------------------------------------------------
 */
function servv_load_platformwidget_scripts() {

    $plugin_root_path = plugin_dir_path(__FILE__);
    $plugin_root_url  = plugin_dir_url(__FILE__);


    $assets_path = $plugin_root_path . 'platformWidget/dist/assets/';
    $assets_url  = $plugin_root_url  . 'platformWidget/dist/assets/';


    $js_file  = glob($assets_path . 'index-*.js');
    $css_file = glob($assets_path . 'index-*.css');


    if (empty($js_file)) {
        error_log('SERVV: JS entry file not found in ' . $assets_path);
        return;
    }

    $js_file  = basename($js_file[0]);
    $css_file = !empty($css_file) ? basename($css_file[0]) : null;


    $handle = 'servv-platform-widget';

    wp_enqueue_script(
        $handle,
        $assets_url . $js_file,
        [],
        null,
        true
    );

    if ($css_file) {
        wp_enqueue_style(
            $handle,
            $assets_url . $css_file,
            [],
            null
        );
    }

    wp_add_inline_script(
        $handle,
        'window.servvPlatformAjax = ' . wp_json_encode([
            'ajax_url'   => admin_url('admin-ajax.php'),
            'nonce'      => wp_create_nonce('servv_platform_nonce'),
            'assets_url' => $assets_url,
            'base_url'   => $plugin_root_url . 'platformWidget/dist/',
        ]) . ';',
        'before'
    );
}


/**
 * --------------------------------------------------------------------------
 * Shortcode Renderer
 * --------------------------------------------------------------------------
 */
add_shortcode('servvplatformwidget', 'servv_platformwidget_shortcode');
function servv_platformwidget_shortcode($atts) {
    servv_load_platformwidget_scripts();
    $atts = shortcode_atts([
        'preset'   => 'light',
        'style'    => 'blue',
        'location' => '',
        'category' => '',
        'member'   => '',
        'language' => '',
    ], $atts);

    ob_start();
    ?>
    <div id="platformwidget-wrapper"
         data-widget-location="<?php echo esc_attr($atts['location']); ?>"
         data-widget-category="<?php echo esc_attr($atts['category']); ?>"
         data-widget-member="<?php echo esc_attr($atts['member']); ?>"
         data-widget-language="<?php echo esc_attr($atts['language']); ?>">

        <div id="servv-platform-widget"></div>
    </div>
    <?php

    return ob_get_clean();
}
