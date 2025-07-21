<?php
/**
 * Plugin Name: ServvAI Event Booking
 * Plugin URI: https://servv.ai/
 * Description: Easily manage event bookings and schedules for both online and in-person experiences, powered by smart AI features
 * Version: 1.0.0
 * Author: Servv Inc.
 * Author URI: https://servv.ai/
 * License: GPL2
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

require_once __DIR__ . '/vendor/autoload.php';


require_once __DIR__ . '/inc/helpers.php';
require_once __DIR__ . '/inc/api.php';


const SERVV_PLUGIN_SLUG = 'servvai-event-booking';
const SERVV_EVENT_POST_TYPE = 'servv_event';

add_action('servv_plugin_delayed_install', 'servv_plugin_make_delayed_install');
register_activation_hook(__FILE__, 'servv_plugin_activate');
register_deactivation_hook(__FILE__, 'servv_plugin_deactivate');
function servv_plugin_get_config($key)
{
    $defaults = require __DIR__ . '/config.php';
    $dbSettings = get_option('servv_plugin_settings', []);
    $config = array_merge($defaults, $dbSettings);
    return $config[$key] ?? null;
}

// Post editor extension
function create_block_servv_plugin_block_init() {
    register_block_type_from_metadata( __DIR__ . '/build' );

    $script_handle = 'servv-wpse-editor-script';

    wp_localize_script(
        $script_handle,
        'servvData',
        [
            'servv_plugin_mode' => servv_plugin_get_config('servv_plugin_mode'),
            'security' => wp_create_nonce("wp_rest")
        ]
    );
}

add_action( 'init', 'create_block_servv_plugin_block_init' );

// Admin App
// Enqueue Admin Scripts and Styles
// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- no nonce check in servv_admin_enqueue_scripts
function servv_admin_enqueue_scripts() {
    if (
        isset($_GET['page']) &&
        (
            sanitize_text_field( wp_unslash( $_GET['page'] ) ) === SERVV_PLUGIN_SLUG ||
            sanitize_text_field( wp_unslash( $_GET['page'] ) ) === 'events'
        )
    ) {
        $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/admin.asset.php' );

        wp_enqueue_script(
            SERVV_PLUGIN_SLUG,
            plugins_url( 'build/admin.js', __FILE__ ),
            $asset_file['dependencies'],
            $asset_file['version'],
            true
        );

        wp_enqueue_style(
            'servv-styles',
            plugins_url( 'build-assets/index.css', __FILE__ ),

            [],
            $asset_file['version']
        );

    wp_localize_script(
        SERVV_PLUGIN_SLUG,
            'servvData',
            [
                'page' => isset($_GET['page']) ? sanitize_text_field( wp_unslash( $_GET['page'] ) ) : '',
                'nonce'=> wp_create_nonce("wp_rest"),
                'stripePublicKey' => get_option('servv_stripe_public_key'),
                'stripeAccountId' => get_option('servv_stripe_account_id'),
                'shopify_app'=> servv_plugin_get_config('shopify_app_url'),
                'servv_plugin_mode'=> servv_plugin_get_config('servv_plugin_mode')
            ]
        );
    }
}


// Add Admin Menu Pages
function servv_add_admin_page() {
    add_menu_page(
        'ServvAI',
        'ServvAI Event Booking',
        'manage_options',
        SERVV_PLUGIN_SLUG,
        'servv_render_admin_page'
    );
}

// Callback Function for React App
function servv_render_admin_page() {
    printf('<div id="%s"></div>', esc_attr('servv-wrap'));
}

// Hook Actions
add_action( 'admin_menu', 'servv_add_admin_page' );
add_action( 'admin_enqueue_scripts', 'servv_admin_enqueue_scripts' );

// Widget
function load_vue_scripts() {
    wp_enqueue_script('servv_widget', plugin_dir_url(__FILE__) . 'widget/dist/js/servv-widget.js', [], null, true);
    wp_enqueue_style('servv_widget', plugin_dir_url(__FILE__) . 'widget/dist/css/servv-widget.css', [], null);
}
add_action('wp_enqueue_scripts', 'load_vue_scripts');

function servv_widget_shortcode($atts) {
    $atts = shortcode_atts([
        'button-background' => 'purple',
        'button-hover-background'=>'#f08e56',
        'widget-background' => '#fff',
        'event-date-color' => '#000',
        'event-title-color' => '#000',
        'text-color' => '#000',
        'border-color' => '#d0d1d6',
        'icon-color'=> 'orange'
    ], $atts);
    $nonce =  wp_create_nonce("wp_rest");
    $apiUrl = servv_plugin_get_config("site_url");
    // Set CSS variables via the style attribute
    $style = '--servv-button-background: ' . esc_attr($atts['button-background']) .';'
    . '--servv-widget-background: ' . esc_attr($atts['widget-background']) .';'
    . '--servv-event-date: ' . esc_attr($atts['event-date-color']) .';'
    . '--servv-event-title: ' . esc_attr($atts['event-title-color']) .';'
    . '--servv-text: ' . esc_attr($atts['text-color']) .';'
    . '--servv-border: ' . esc_attr($atts['border-color']) .';'
    . '--servv-icon: ' . esc_attr($atts['icon-color']) .';'
    . '--servv-button-hover: ' . esc_attr($atts['button-hover-background']) .';';

    return '<div id="widget-wrapper" style="' . $style . '" data-nonce="' . $nonce . '" data-api="' . esc_attr($apiUrl) . '"><div id="servv-widget"></div></div>';
}

add_shortcode('servvai', 'servv_widget_shortcode');

