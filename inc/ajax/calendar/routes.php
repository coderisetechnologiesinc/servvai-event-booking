<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/calendar/url', [
        'methods'  => 'GET',
        'callback' => 'servv_get_calendar_connect_url',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/calendar/account', [
        'methods'  => 'GET',
        'callback' => 'servv_get_calendar_account',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/calendar/account', [
        'methods'  => 'DELETE',
        'callback' => 'servv_disconnect_calendar_account',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
});