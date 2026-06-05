<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once __DIR__ . '/gmail/gmail.php';
require_once __DIR__ . '/smtp/smtp.php';

function servv_get_sent_emails($request)
{
    $apiRoute = '/mail/sent';
    $params = array_filter($request->get_params(), function ($value) {
        return $value !== '' && $value !== null;
    });
    $queryString = http_build_query($params);
    if (!empty($queryString)) {
        $apiRoute .= '?' . $queryString;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_get_sent_email($request)
{
    $emailId = $request['email_id'] ?? 0;
    $apiRoute = '/mail/sent/'.$emailId;
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}
