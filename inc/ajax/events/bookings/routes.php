<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/bookings', [
        'methods'  => 'GET',
        'callback' => 'servv_get_bookings',
        'permission_callback' => 'servv_validate_ajax_permissions',
        'args' => [
            'page' => [
                'required' => false,
            ],
            'page_size' => [
                'required' => false,
            ],
            'from_datetime' => [
                'required' => false,
            ],
            'to_datetime' => [
                'required' => false,
            ],
            'search' => [
                'required' => false,
            ],
            'event_provider' => [
                'required' => false,
                'validate_callback' => function ($param, $request, $key) {
                    return in_array($param, ['offline', 'zoom']);
                },
            ],
            'from_price' => [
                'required' => false,
            ],
            'to_price' => [
                'required' => false,
            ],

        ],
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/bookings/(?P<booking_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_booking',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/bookings/(?P<booking_id>\d+)/refund', [
        'methods'  => 'POST',
        'callback' => 'servv_refund_booking',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/bookings/(?P<booking_id>\d+)/cancel', [
        'methods'  => 'POST',
        'callback' => 'servv_cancel_booking',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

});