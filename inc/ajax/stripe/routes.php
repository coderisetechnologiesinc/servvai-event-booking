<?php


add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/stripe/settings', [
        'methods'  => 'GET',
        'callback' => 'servv_get_stripe_settings',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/stripe/settings', [
        'methods'  => 'POST',
        'callback' => 'servv_update_stripe_settings',
        'permission_callback' => 'validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/stripe/account', [
        'methods'  => 'GET',
        'callback' => 'servv_get_stripe_account',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/stripe/account/disconnected', [
        'methods'  => 'GET',
        'callback' => 'servv_get_stripe_disconnected_accounts',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/stripe/account', [
        'methods'  => 'DELETE',
        'callback' => 'servv_disconnect_stripe_account',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/stripe/url', [
        'methods'  => 'GET',
        'callback' => 'servv_get_stripe_connect_url',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/stripe/confirm', [
        'methods'  => 'GET',
        'callback' => 'servv_confirm_stripe_connect',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
});