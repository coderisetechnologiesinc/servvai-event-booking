<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function servv_n8n_event_created_trigger($data = [])
{
    $event_created_active = get_option('servv_n8n_event_created_active', false);
    $event_created_url = get_option('servv_n8n_event_created_url', '');
    $event_created_method = get_option('servv_n8n_event_created_method', 'POST');
    $event_created_secret = get_option('servv_n8n_event_created_secret', '');
    if(!$event_created_active || empty($event_created_url)) {
        return;
    }
    try {
        servvSendN8NRequest($event_created_url, $event_created_secret, $data, $event_created_method);
    } catch (Exception $e) {
        error_log('Error sending n8n event created trigger: '.$e->getMessage());
    }
}

function servv_n8n_new_booking_trigger($data = [])
{
    $new_booking_active = get_option('servv_n8n_new_booking_active', false);
    $new_booking_url = get_option('servv_n8n_new_booking_url', '');
    $new_booking_method = get_option('servv_n8n_new_booking_method', 'POST');
    $new_booking_secret = get_option('servv_n8n_new_booking_secret', '');
    if(!$new_booking_active || empty($new_bookingd_url)) {
        return;
    }
    try {
        servvSendN8NRequest($new_booking_url, $new_booking_secret, $data, $new_booking_method);
    } catch (Exception $e) {
        error_log('Error sending n8n new booking trigger: '.$e->getMessage());
    }
}

function servv_n8n_cancelled_booking_trigger($data = [])
{
    $cancelled_booking_active = get_option('servv_n8n_cancelled_booking_active', false);
    $cancelled_booking_url = get_option('servv_n8n_cancelled_booking_url', '');
    $cancelled_booking_method = get_option('servv_n8n_cancelled_booking_method', 'POST');
    $cancelled_booking_secret = get_option('servv_n8n_cancelled_booking_secret', '');
    if(!$cancelled_booking_active || empty($cancelled_bookingd_url)) {
        return;
    }
    try {
        servvSendN8NRequest($cancelled_booking_url, $cancelled_booking_secret, $data, $cancelled_booking_method);
    } catch (Exception $e) {
        error_log('Error sending n8n cancelled booking trigger: '.$e->getMessage());
    }
}

function servvSendN8NRequest($url, $secret, $data = [], $method = 'GET')
{
    $requestData = [
        'method' => $method,
        'timeout'   => 60,
        'blocking' => true,
        'sslverify' => false,
        'headers' => [
            'Authorization' => 'Bearer ' . servv_n8n_make_jwt($secret),
            'Content-Type' => 'application/json',
        ],
    ];
    if(!empty($data)){
        $dataString = json_encode($data);
        $requestData['body'] = $dataString;
        $requestData['headers']['Content-Length'] = strlen($dataString);
    }
    $response = wp_remote_request($url, $requestData);
    $responseCode = wp_remote_retrieve_response_code($response);
    if ($responseCode !== 200) {
        throw new Exception('Error: Bad n8n response code '.esc_html($responseCode), (int)$responseCode);
    }
    $responseBody = json_decode(wp_remote_retrieve_body($response), true);
    if (!empty($responseBody['error'])) {
        throw new Exception('Error: Bad n8n response body '.esc_html($responseBody['error']), 500);
    }
    return $responseBody;
}


function servv_n8n_make_jwt(string $secret, array $claims = [], int $ttl = 300, array $std = []): string
{
    $now = time();
    $payload = array_merge([
        'iss' => $std['iss'] ?? 'servv',
        'aud' => $std['aud'] ?? 'n8n',
        'sub' => $std['sub'] ?? 'workflow-call',
        'iat' => $now,
        'nbf' => $now - 5,
        'exp' => $now + $ttl,
        'jti' => $std['jti'] ?? bin2hex(random_bytes(8)),
    ], $claims);

    $header = ['alg' => 'HS256', 'typ' => 'JWT'];

    $segments = [];
    $segments[] = servv_base64url_encode(json_encode($header,  JSON_UNESCAPED_SLASHES));
    $segments[] = servv_base64url_encode(json_encode($payload, JSON_UNESCAPED_SLASHES));

    $signing_input = implode('.', $segments);
    $signature     = hash_hmac('sha256', $signing_input, $secret, true);

    $segments[] = servv_base64url_encode($signature);
    return implode('.', $segments);
}

function servv_base64url_encode(string $bin): string
{
    return rtrim(strtr(base64_encode($bin), '+/', '-_'), '=');
}