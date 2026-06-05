<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function servv_get_gmail_connect_url($request)
{
    $apiRoute = '/mail/gmail/authenticate/url';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    $responseBody['nonce'] = wp_create_nonce('gmail_connect_nonce');
    return $responseBody;
}


function servv_get_gmail_account()
{
    $apiRoute = '/mail/gmail/account';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_disconnect_gmail_account()
{
    $apiRoute = '/mail/gmail/account';
    try {
        $responseBody = servvSendApiRequest($apiRoute, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}
