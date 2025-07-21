<?php


add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/teams', [
        'methods'  => 'GET',
        'callback' => 'servv_get_teams',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/teams', [
        'methods'  => 'POST',
        'callback' => 'servv_create_team',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/teams/(?P<team_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_team',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/teams/(?P<team_id>\d+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_team',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/teams/(?P<team_id>\d+)', [
        'methods'  => 'PATCH',
        'callback' => 'servv_update_team',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/teams/(?P<team_id>\d+)/members', [
        'methods'  => 'GET',
        'callback' => 'servv_team_get_members',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/teams/(?P<team_id>\d+)/members/(?P<member_id>\d+)', [
        'methods'  => 'POST',
        'callback' => 'servv_team_add_member',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/filters/teams/(?P<team_id>\d+)/members/(?P<member_id>\d+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_team_delete_member',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
});