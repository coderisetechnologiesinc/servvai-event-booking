<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
function servv_get_stripe_settings($request)
{
    return [
        'currency' => get_option('servv_currency', ''),
    ];
}

function servv_update_stripe_settings($request)
{
    $requestBody = $request->get_json_params();
    $currency = $requestBody['currency'];
    if(empty($currency)) {
        if (class_exists('WooCommerce')) {
            $currency = get_woocommerce_currency();
        }
    }
    if(empty($currency)) {
        return new WP_Error(500, 'Currency can\'t be empty');
    }
    update_option('servv_currency', $currency);
    return [];
}


function servv_get_stripe_account()
{
    $apiRoute = '/payments/stripe/account';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    $currentCurrency = get_option('servv_currency', '');
    if(empty($currentCurrency) && !empty($responseBody['currency'])) {
        update_option('servv_currency', $responseBody['currency']);
    }
    if(!empty($responseBody['account_id'])) {
        update_option('servv_stripe_account_id', $responseBody['account_id']);
    }
    if(!empty($responseBody['public_key'])) {
        update_option('servv_stripe_public_key', $responseBody['public_key']);
    }
    return $responseBody;
}

function servv_get_stripe_disconnected_accounts()
{
    $apiRoute = '/payments/stripe/accounts/disconnected';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_disconnect_stripe_account()
{
    $apiRoute = '/payments/stripe/account';
    try {
        $responseBody = servvSendApiRequest($apiRoute, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


function servv_get_stripe_connect_url($request)
{
    $accountId = $request->get_param('account_id');
    $apiRoute = '/payments/stripe/authenticate/url';
    if(!empty($accountId)){
        $apiRoute .= '?account_id='.$accountId;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_confirm_stripe_connect($request)
{
    $apiRoute = '/payments/stripe/authenticate/confirm';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    if(!empty($responseBody['account_id'])) {
        update_option('servv_stripe_account_id', $responseBody['account_id']);
    }
    if(!empty($responseBody['public_key'])) {
        update_option('servv_stripe_public_key', $responseBody['public_key']);
    }
    return $responseBody;
}

