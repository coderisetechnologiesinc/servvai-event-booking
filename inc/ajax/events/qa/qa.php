<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function servv_get_event_questions($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/types/questions/'.$servvEventId.'?event_provider='.$servvLocationType.'&event_type='.$servvEventType;

    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_create_event_question($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/types/questions/'.$servvEventId.'?event_provider='.$servvLocationType.'&event_type='.$servvEventType;
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_get_event_answers($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/types/questions/'.$servvEventId.'/answers?event_provider='.$servvLocationType.'&event_type='.$servvEventType;

    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


function servv_get_event_question($request)
{
    $postId = $request['post_id'];
    $questionId = $request['question_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/types/questions/'.$servvEventId.'/'.$questionId.'?event_provider='.$servvLocationType.'&event_type='.$servvEventType;

    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_update_event_question($request)
{
    $postId = $request['post_id'];
    $questionId = $request['question_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/types/questions/'.$servvEventId.'/'.$questionId.'?event_provider='.$servvLocationType.'&event_type='.$servvEventType;
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'PATCH');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_delete_event_question($request)
{
    $postId = $request['post_id'];
    $questionId = $request['question_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/types/questions/'.$servvEventId.'/'.$questionId.'?event_provider='.$servvLocationType.'&event_type='.$servvEventType;
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}