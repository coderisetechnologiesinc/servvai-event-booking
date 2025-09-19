<?php
/**
 * Plugin Name: ServvAI Event Booking
 * Plugin URI: https://github.com/coderisetechnologiesinc/servvai-event-booking/
 * Description: Easily manage event bookings and schedules for both online and in-person experiences, powered by smart AI features.
 * Version: 1.0.2
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

register_activation_hook(__FILE__, 'servv_plugin_activate');
register_deactivation_hook(__FILE__, 'servv_plugin_deactivate');
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
    $dbSettings = get_option('servv_plugin_settings', []);
    $config = array_merge($defaults, $dbSettings);
    return $config[$key] ?? null;
}
define('SERVV_PLUGIN_VERSION', '1.0.2');

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


// ─────────────────────────────────────────────────────────────────────────────
// Stripe Script
// ─────────────────────────────────────────────────────────────────────────────

function servv_enqueue_stripe_scripts() {
    wp_register_script('servv-plugin-frontend', '', [],   SERVV_PLUGIN_VERSION, true);
    wp_enqueue_script('servv-plugin-frontend');

    wp_localize_script('servv-plugin-frontend', 'servvData', [
        'ajaxUrl'  => admin_url('admin-ajax.php'),
        'security' => wp_create_nonce('payment_nonce'),
    ]);
}
add_action('wp_enqueue_scripts', 'servv_enqueue_stripe_scripts');

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
    <div id="checkout-element"></div>
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
    add_menu_page('ServvAI', 'ServvAI Event Booking', 'manage_options', SERVV_PLUGIN_SLUG, 'servv_render_admin_page','dashicons-calendar-alt');
    
    add_submenu_page(SERVV_PLUGIN_SLUG, 'Zoom Integration', '.', 'manage_options', 'servv-plugin-zoom-confirm-page', 'servv_plugin_zoom_confirm');
    add_submenu_page(SERVV_PLUGIN_SLUG, 'Calendar Integration', '.', 'manage_options', 'servv-plugin-calendar-confirm-page', 'servv_plugin_calendar_confirm');
    add_submenu_page(SERVV_PLUGIN_SLUG, 'Gmail Integration', '.', 'manage_options', 'servv-plugin-gmail-confirm-page', 'servv_plugin_gmail_confirm');
    add_submenu_page(SERVV_PLUGIN_SLUG, 'Stripe Integration', '.', 'manage_options', 'servv-plugin-stripe-confirm-page', 'servv_plugin_stripe_confirm');
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

    wp_enqueue_script(
        SERVV_PLUGIN_SLUG,
        plugins_url('build/admin.js', __FILE__),
        $asset_file['dependencies'],
        SERVV_PLUGIN_VERSION,
        true
    );

    wp_enqueue_style(
        'servv-styles',
        plugins_url('build-assets/index.css', __FILE__),
        [],
        SERVV_PLUGIN_VERSION
    );

    wp_localize_script(SERVV_PLUGIN_SLUG, 'servvData', [
        'page'              => $page,
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

    wp_enqueue_script('servv_widget', $plugin_base_url . 'js/servv-widget.js', [], SERVV_PLUGIN_VERSION, true);
    wp_enqueue_style('servv_widget', $plugin_base_url . 'css/servv-widget.css', [], SERVV_PLUGIN_VERSION);

    wp_localize_script('servv_widget', 'servvAjax', [
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce("payment_nonce"),
        'assets_url' => $plugin_base_url
    ]);
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


    $atts = array_merge(['preset' => 'light', 'style' => 'blue'], $atts);

    $presetName = $atts['preset']; // "light" or "dark"
    $styleName  = $atts['style'];  // "blue", "green", etc.

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

    echo '<style>:root { ' . $style . ' }</style>';

    return '<div id="widget-wrapper" style="' . esc_attr($style) . '">
                <div id="servv-widget"></div>
            </div>';
    
}
// add_filter( 'use_block_editor_for_post', '__return_false' );