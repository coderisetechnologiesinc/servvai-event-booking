<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/mail/smtp/account', [
        'methods'  => 'GET',
        'callback' => 'servv_get_smtp_account',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/mail/smtp/account', [
        'methods'  => 'POST',
        'callback' => 'servv_save_smtp_account',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/mail/smtp/account', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_smtp_account',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
});
