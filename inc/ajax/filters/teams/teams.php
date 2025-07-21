<?php


function servv_get_teams($request)
{
    $apiRoute = '/types/teams';
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

function servv_get_team($request)
{
    $teamId = $request['team_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/teams/'.$teamId);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_create_team($request)
{
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/types/teams', $requestBody, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_delete_team($request)
{
    $teamId = $request['team_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/teams/'.$teamId, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_update_team($request)
{
    $teamId = $request['team_id'] ?? 0;
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/types/teams/'.$teamId, $requestBody, 'PATCH');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


function servv_team_get_members($request)
{
    $teamId = $request['team_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/teams/'.$teamId.'/members');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_team_delete_member($request)
{
    $teamId = $request['team_id'] ?? 0;
    $memberId = $request['member_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/teams/'.$teamId.'/members/'.$memberId, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_team_add_member($request)
{
    $teamId = $request['team_id'] ?? 0;
    $memberId = $request['member_id'] ?? 0;
    try {
        $responseBody = servvSendApiRequest('/types/teams/'.$teamId.'/members/'.$memberId, [], 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

