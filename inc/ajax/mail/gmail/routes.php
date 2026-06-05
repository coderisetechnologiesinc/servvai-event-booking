<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('rest_api_init', function () {
    $namespace = servv_plugin_get_config('plugin_api_namespace');
    $routes = [
        '/mail/gmail',
        '/gmail',
    ];

    foreach ($routes as $routePrefix) {
        register_rest_route($namespace, $routePrefix . '/url', [
            'methods'  => 'GET',
            'callback' => 'servv_get_gmail_connect_url',
            'permission_callback' => 'servv_validate_ajax_permissions',
        ]);
        register_rest_route($namespace, $routePrefix . '/account', [
            'methods'  => 'GET',
            'callback' => 'servv_get_gmail_account',
            'permission_callback' => 'servv_validate_ajax_permissions',
        ]);
        register_rest_route($namespace, $routePrefix . '/account', [
            'methods'  => 'DELETE',
            'callback' => 'servv_disconnect_gmail_account',
            'permission_callback' => 'servv_validate_ajax_permissions',
        ]);
    }
});
