<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions', [
        'methods'  => 'GET',
        'callback' => 'servv_get_event_questions',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions', [
        'methods'  => 'POST',
        'callback' => 'servv_create_event_question',
        'permission_callback' => 'servv_validate_ajax_post_update_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions/answers', [
        'methods'  => 'GET',
        'callback' => 'servv_get_event_answers',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions/(?P<question_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_event_question',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions/(?P<question_id>\d+)', [
        'methods'  => 'PATCH',
        'callback' => 'servv_update_event_question',
        'permission_callback' => 'servv_validate_ajax_post_update_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions/(?P<question_id>\d+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_event_question',
        'permission_callback' => 'servv_validate_ajax_post_update_permissions',
    ]);
});