<?php


add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/analytics/happened', [
        'methods'  => 'GET',
        'callback' => 'servv_get_analytics_happened',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/analytics/active', [
        'methods'  => 'GET',
        'callback' => 'servv_get_analytics_active',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/analytics/cancelled', [
        'methods'  => 'GET',
        'callback' => 'servv_get_analytics_cancelled',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/analytics/registrants', [
        'methods'  => 'GET',
        'callback' => 'servv_get_analytics_registrants',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/analytics/registrants/dynamic', [
        'methods'  => 'GET',
        'callback' => 'servv_get_analytics_registrants_dynamic',
        'permission_callback' => 'validate_ajax_permissions',
        'args' => [
            'date_year' => [
                'required' => false,
            ],
            'date_month' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/analytics/registrants/(?P<post_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_analytics_registrants_by_post',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/analytics/types', [
        'methods'  => 'GET',
        'callback' => 'servv_get_analytics_types',
        'permission_callback' => 'validate_ajax_permissions',
        'args' => [
            'date_year' => [
                'required' => false,
            ],
            'date_month' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/analytics/top', [
        'methods'  => 'GET',
        'callback' => 'servv_get_analytics_top',
        'permission_callback' => 'validate_ajax_permissions',
        'args' => [
            'from' => [
                'required' => false,
            ],
            'to' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/analytics/worst', [
        'methods'  => 'GET',
        'callback' => 'servv_get_analytics_worst',
        'permission_callback' => 'validate_ajax_permissions',
        'args' => [
            'from' => [
                'required' => false,
            ],
            'to' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/analytics/revenue', [
        'methods'  => 'GET',
        'callback' => 'servv_get_analytics_revenue',
        'permission_callback' => 'validate_ajax_permissions',
        'args' => [
            'from' => [
                'required' => false,
            ],
            'to' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/analytics/revenue/(?P<post_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_analytics_revenue_by_post',
        'permission_callback' => 'validate_ajax_permissions',
    ]);
});