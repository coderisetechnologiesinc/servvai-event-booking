<?php


add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/languages', [
        'methods'  => 'GET',
        'callback' => 'servv_get_languages',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/languages', [
        'methods'  => 'POST',
        'callback' => 'servv_create_language',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/languages/(?P<language_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_language',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/languages/(?P<language_id>\d+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_language',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/languages/(?P<language_id>\d+)', [
        'methods'  => 'PATCH',
        'callback' => 'servv_update_language',
        'permission_callback' => 'validate_ajax_permissions',
    ]);

});