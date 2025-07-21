<?php


add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/gmail/url', [
        'methods'  => 'GET',
        'callback' => 'servv_get_gmail_connect_url',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/gmail/account', [
        'methods'  => 'GET',
        'callback' => 'servv_get_gmail_account',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/gmail/account', [
        'methods'  => 'DELETE',
        'callback' => 'servv_disconnect_gmail_account',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
});