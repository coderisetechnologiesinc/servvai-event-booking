<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/shop/info', [
        'methods'  => 'GET',
        'callback' => 'servv_get_shop_info',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/shop/settings', [
        'methods'  => 'PUT',
        'callback' => 'servv_update_shop_settings',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/shop/paymentplans', [
        'methods'  => 'GET',
        'callback' => 'servv_get_payment_plans',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/shop/paymentplans/(?P<plan_id>\d+)', [
        'methods'  => 'POST',
        'callback' => 'servv_create_payment_plan_subscription',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/shop/billing/portal/session', [
        'methods'  => 'POST',
        'callback' => 'servv_create_billing_portal_session',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/wordpress/settings', [
        'methods'  => 'GET',
        'callback' => 'servv_get_wordpress_settings',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/wordpress/templates', [
        'methods'  => 'GET',
        'callback' => 'servv_get_wordpress_templates',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/wordpress/templates/(?P<template_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_wordpress_template',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/wordpress/templates/(?P<template_id>\d+)', [
        'methods'  => 'PATCH',
        'callback' => 'servv_update_wordpress_template',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/shop/onboarding/(?P<item_id>\d+)', [
        'methods'  => 'POST',
        'callback' => 'servv_complete_onboarding_item',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/shop/notifications/(?P<item_id>\d+)', [
        'methods'  => 'POST',
        'callback' => 'servv_seen_notification_item',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/n8n/settings', [
        'methods'  => 'GET',
        'callback' => 'servv_get_n8n_settings',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/n8n/settings', [
        'methods'  => 'PUT',
        'callback' => 'servv_update_n8n_settings',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
});