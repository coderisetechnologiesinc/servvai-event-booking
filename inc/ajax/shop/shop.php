<?php

function servv_get_shop_info($request)
{
    try {
        $responseBody = servvSendApiRequest('/wordpress/shop/info');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_update_shop_settings($request)
{
    $apiRoute =  '/wordpress/shop/settings';
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'PUT');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}
function servv_get_wordpress_settings($request)
{
    $name = $request->get_param('name');
    if(empty($name)) {
        return new WP_Error(400, 'Setting name is required', ['status' => 400]);
    }
    try {
        $responseBody = servvSendApiRequest('/wordpress/settings?name='.$name);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_get_wordpress_templates($request)
{
    try {
        $responseBody = servvSendApiRequest('/wordpress/templates');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_get_wordpress_template($request)
{
    $templateId = $request['template_id'];
    try {
        $responseBody = servvSendApiRequest('/wordpress/templates/'.$templateId);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_update_wordpress_template($request)
{
    $templateId = $request['template_id'];
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/wordpress/templates/'.$templateId, $requestBody, 'PATCH');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


function servv_get_payment_plans($request)
{
    try {
        $responseBody = servvSendApiRequest('/wordpress/paymentplans');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_create_payment_plan_subscription($request)
{
    $planId = $request['plan_id'] ?? 0;
    if(empty($planId)) {
        wp_send_json_error(['message' => 'Empty plan id']);
        exit();
    }
    try {
        $responseBody = servvSendApiRequest('/wordpress/paymentplans/'.$planId);
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage()]);
        exit();
    }
    $apiRoute = '/payments/stripe/subscriptions/session/create';

    $data = [
        'plan_id' => (int)$planId,
        'return_url'    => admin_url('admin.php?page='.SERVV_PLUGIN_SLUG)
    ];
    try {
        $responseBody = servvSendApiRequest($apiRoute, $data, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_complete_onboarding_item($request)
{
    $itemId = $request['item_id'];
    try {
        $responseBody = servvSendApiRequest('/wordpress/shop/onboarding/'.$itemId, [],  'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_seen_notification_item($request)
{
    $itemId = $request['item_id'];
    try {
        $responseBody = servvSendApiRequest('/wordpress/shop/notifications/'.$itemId, [],  'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}
