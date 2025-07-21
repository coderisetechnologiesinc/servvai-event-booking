<?php


add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/locations', [
        'methods'  => 'GET',
        'callback' => 'servv_get_locations',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/locations', [
        'methods'  => 'POST',
        'callback' => 'servv_create_location',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/locations/(?P<location_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_location',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/locations/(?P<location_id>\d+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_location',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/locations/(?P<location_id>\d+)', [
        'methods'  => 'PATCH',
        'callback' => 'servv_update_location',
        'permission_callback' => 'validate_ajax_permissions',
    ]);

});