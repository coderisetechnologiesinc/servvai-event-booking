<?php

function servv_get_bookings($request)
{
    $apiRoute = '/wordpress/bookings';
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

function servv_get_booking($request)
{
    $bookingId = $request['booking_id'];
    $apiRoute = '/wordpress/bookings/'.$bookingId;
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_refund_booking($request)
{
    $bookingId = $request['booking_id'];
    $apiRoute = '/wordpress/bookings/'.$bookingId.'/refund';
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_cancel_booking($request)
{
    $bookingId = $request['booking_id'];
    $apiRoute = '/wordpress/bookings/'.$bookingId;
    try {
        $bookingResponseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }

    $servvEventId = $bookingResponseBody['event_id'] ?? null;
    if(empty($servvEventId)){
        return new WP_Error(400, 'Invalid booking info');
    }
    $post = servv_get_post_by_meta_value('servv_event_id', $servvEventId);
    if(empty($post)) {
        return new WP_Error(400, 'Unknown post', ['id' => $servvEventId]);
    }
    $postId = $post->ID;
    $occurrenceId = $bookingResponseBody['occurrence_id'] ?? null;
    $activeRegistrants = $bookingResponseBody['active_registrants'] ?? null;

    $apiRoute = '/wordpress/bookings/'.$bookingId.'/cancel';
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }

    $quantities = get_post_meta($postId, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    $currentQuantity = !empty($occurrenceId) ? $quantities[$occurrenceId] ?? null : $quantities[0] ?? null;
    if(!is_null($currentQuantity)) {
        $newQuantity = $currentQuantity + $activeRegistrants;
        !empty($occurrenceId) ? $quantities[$occurrenceId] = $newQuantity : $quantities[0] = $newQuantity;
        update_post_meta($postId, 'servv_event_quantities', json_encode($quantities));
    }

    return $responseBody;
}