<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function servv_get_locations($request)
{
    $apiRoute = '/types/locations';
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

function servv_get_location($request)
{
    $locationId = $request['location_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/locations/'.$locationId);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_create_location($request)
{
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/types/locations', $requestBody, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_delete_location($request)
{
    $locationId = $request['location_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/locations/'.$locationId, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_update_location($request)
{
    $locationId = $request['location_id'] ?? 0;
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/types/locations/'.$locationId, $requestBody, 'PATCH');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


