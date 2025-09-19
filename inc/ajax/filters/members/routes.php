<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/members', [
        'methods'  => 'GET',
        'callback' => 'servv_get_members',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/members', [
        'methods'  => 'POST',
        'callback' => 'servv_create_member',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/members/(?P<member_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_member',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/members/(?P<member_id>\d+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_member',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/members/(?P<member_id>\d+)', [
        'methods'  => 'PATCH',
        'callback' => 'servv_update_member',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

});