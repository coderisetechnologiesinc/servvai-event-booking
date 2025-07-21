<?php


function servv_get_event_tickets($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/types/tickets/'.$servvEventId.'?event_provider='.$servvLocationType.'&event_type='.$servvEventType;
    $occurrenceId = $request->get_param('occurrence_id');
    if(!empty($occurrenceId)) {
        $apiRoute .= '&occurrence_id='.$occurrenceId;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_create_event_ticket($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/types/tickets/'.$servvEventId.'?event_provider='.$servvLocationType.'&event_type='.$servvEventType;
    $occurrenceId = $request->get_param('occurrence_id');
    if(!empty($occurrenceId)) {
        $apiRoute .= '&occurrence_id='.$occurrenceId;
    }
    $requestBody = $request->get_json_params();
    $currency = get_option('servv_currency', 'USD');
    $requestBody['currency'] = $currency;
    if(! $requestBody['is_donation'] ?? false) {
        $price = (float)($requestBody['price'] ?? 0);
        $requestBody['price_units'] = servv_format_amount_for_stripe($price, $currency);
        $requestBody['price'] = $price;
    } else {
        $requestBody['price_units'] = null;
        $requestBody['price'] = null;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


function servv_get_event_ticket($request)
{
    $postId = $request['post_id'];
    $ticketId = $request['ticket_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/types/tickets/'.$servvEventId.'/'.$ticketId.'?event_provider='.$servvLocationType.'&event_type='.$servvEventType;

    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_update_event_ticket($request)
{
    $postId = $request['post_id'];
    $ticketId = $request['ticket_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/types/tickets/'.$servvEventId.'/'.$ticketId.'?event_provider='.$servvLocationType.'&event_type='.$servvEventType;
    $requestBody = $request->get_json_params();
    $currency = get_option('servv_currency', 'USD');
    $requestBody['currency'] = $currency;
    if(! $requestBody['is_donation'] ?? false) {
        $price = (float)($requestBody['price'] ?? 0);
        $requestBody['price_units'] = servv_format_amount_for_stripe($price, $currency);
        $requestBody['price'] = $price;
    } else {
        $requestBody['price_units'] = null;
        $requestBody['price'] = null;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'PATCH');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_delete_event_ticket($request)
{
    $postId = $request['post_id'];
    $ticketId = $request['ticket_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/types/tickets/'.$servvEventId.'/'.$ticketId.'?event_provider='.$servvLocationType.'&event_type='.$servvEventType;
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}