<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function servv_get_members($request)
{
    $apiRoute = '/types/members';
    $params = array_filter($request->get_params(), function ($value) {
        return !empty($value);
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

function servv_get_member($request)
{
    $memberId = $request['member_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/members/'.$memberId);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_create_member($request)
{
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/types/members', $requestBody, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_delete_member($request)
{
    $memberId = $request['member_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/members/'.$memberId, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_update_member($request)
{
    $memberId = $request['member_id'] ?? 0;
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/types/members/'.$memberId, $requestBody, 'PATCH');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


