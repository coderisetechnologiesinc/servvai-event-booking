<?php


function servv_get_categories($request)
{
    $apiRoute = '/types/categories';
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

function servv_get_category($request)
{
    $categoryId = $request['category_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/categories/'.$categoryId);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_create_category($request)
{
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/types/categories', $requestBody, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_delete_category($request)
{
    $categoryId = $request['category_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/categories/'.$categoryId, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_update_category($request)
{
    $categoryId = $request['category_id'] ?? 0;
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/types/categories/'.$categoryId, $requestBody, 'PATCH');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


