<?php


add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/tickets', [
        'methods'  => 'GET',
        'callback' => 'servv_get_event_tickets',
        'permission_callback' => 'validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/tickets', [
        'methods'  => 'POST',
        'callback' => 'servv_create_event_ticket',
        'permission_callback' => 'validate_ajax_post_update_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/tickets/(?P<ticket_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_event_ticket',
        'permission_callback' => 'validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/tickets/(?P<ticket_id>\d+)', [
        'methods'  => 'PATCH',
        'callback' => 'servv_update_event_ticket',
        'permission_callback' => 'validate_ajax_post_update_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/tickets/(?P<ticket_id>\d+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_event_ticket',
        'permission_callback' => 'validate_ajax_post_update_permissions',
    ]);
});