<?php

return [
    'api_base_url'  => getenv('SERVV_PLUGIN_API_DOMAIN')  ?: 'https://api.servv.io',
    'api_version'  => getenv('SERVV_API_VERSION') !== false ? getenv('SERVV_API_VERSION') : 'v1',
    'plugin_api_namespace'  => 'servv-plugin/v1',
    'plugin_ajax_namespace'  => 'servv-plugin-ajax',
    'plugin_version'  => '1.0',
    'site_url' => getenv('SERVV_PLUGIN_SITE_URL')   ?: get_site_url(),
    'shopify_app_url' => getenv('SERVV_PLUGIN_SHOPIFY_APP_URL') ?: "https://web.servv.io",
    'servv_plugin_mode' => getenv('SERVV_PLUGIN_MODE')?:"production"
];