<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/categories', [
        'methods'  => 'GET',
        'callback' => 'servv_get_categories',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/categories', [
        'methods'  => 'POST',
        'callback' => 'servv_create_category',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/categories/(?P<category_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_category',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/categories/(?P<category_id>\d+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_category',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/categories/(?P<category_id>\d+)', [
        'methods'  => 'PATCH',
        'callback' => 'servv_update_category',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

});