<?php
$env = file_get_contents(__DIR__."/.env");
$lines = explode("\n",$env);

foreach($lines as $line){
    preg_match("/([^#]+)\=(.*)/",$line,$matches);
    if(isset($matches[2])){ putenv(trim($line)); }
}

return [
    'api_base_url'  => 'https://testapi.servv.io',
    'api_version'  => getenv('SERVV_API_VERSION') !== false ? getenv('SERVV_API_VERSION') : 'v1',
    'plugin_api_namespace'  => 'servv-plugin/v1',
    'plugin_ajax_namespace'  => 'servv-plugin-ajax',
    'plugin_version'  => '1.0',
    'site_url' => getenv('SERVV_PLUGIN_SITE_URL')   ?: get_site_url(),
    'shopify_app_url' => getenv('SERVV_PLUGIN_SHOPIFY_APP_URL') ?: "https://webtest.servv.io",
    'servv_plugin_mode' => getenv('SERVV_PLUGIN_MODE')?:"production"
];