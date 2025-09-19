<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function servv_get_calendar_connect_url($request)
{
    $apiRoute = '/calendar/authenticate/url';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    $responseBody['nonce'] = wp_create_nonce('calendar_connect_nonce');
    return $responseBody;
}


function servv_get_calendar_account()
{
    $apiRoute = '/calendar/account';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_disconnect_calendar_account()
{
    $apiRoute = '/calendar/account';
    try {
        $responseBody = servvSendApiRequest($apiRoute, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}
