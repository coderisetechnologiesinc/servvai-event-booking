<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/zoom/url', [
        'methods'  => 'GET',
        'callback' => 'servv_get_zoom_connect_url',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/zoom/account', [
        'methods'  => 'GET',
        'callback' => 'servv_get_zoom_account',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/zoom/account', [
        'methods'  => 'DELETE',
        'callback' => 'servv_disconnect_zoom_account',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
});