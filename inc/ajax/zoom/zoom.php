<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
function servv_get_zoom_connect_url($request)
{
    $apiRoute = '/zoom/authenticate/url';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    $responseBody['nonce'] = wp_create_nonce('zoom_connect_nonce');
    return $responseBody;
}


function servv_get_zoom_account()
{
    $apiRoute = '/zoom/account';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_disconnect_zoom_account()
{
    $apiRoute = '/zoom/account';
    try {
        $responseBody = servvSendApiRequest($apiRoute, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}