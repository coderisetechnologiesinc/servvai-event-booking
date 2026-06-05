<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once __DIR__ . '/gmail/routes.php';
require_once __DIR__ . '/smtp/routes.php';

add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/mail/sent', [
        'methods'  => 'GET',
        'callback' => 'servv_get_sent_emails',
        'permission_callback' => 'servv_validate_ajax_permissions',
        'args' => [
            'email' => [
                'required' => false,
            ],
            'event_id' => [
                'required' => false,
            ],
            'occurrence_id' => [
                'required' => false,
            ],
            'occurrence' => [
                'required' => false,
            ],
            'event_name' => [
                'required' => false,
            ],
            'event' => [
                'required' => false,
            ],
            'status' => [
                'required' => false,
            ],
            'date_from' => [
                'required' => false,
            ],
            'date_to' => [
                'required' => false,
            ],
            'q' => [
                'required' => false,
            ],
            'search' => [
                'required' => false,
            ],
            'page' => [
                'required' => false,
            ],
            'page_size' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/mail/sent/(?P<email_id>[^/]+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_sent_email',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
});
