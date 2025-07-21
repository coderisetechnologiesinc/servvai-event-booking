<?php


function servv_get_languages($request)
{
    $apiRoute = '/types/languages';
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

function servv_get_language($request)
{
    $languageId = $request['language_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/languages/'.$languageId);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_create_language($request)
{
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/types/languages', $requestBody, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_delete_language($request)
{
    $languageId = $request['language_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/languages/'.$languageId, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_update_language($request)
{
    $languageId = $request['language_id'] ?? 0;
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/types/languages/'.$languageId, $requestBody, 'PATCH');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


