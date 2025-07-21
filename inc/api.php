<?php

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

require_once __DIR__ . '/ajax.php';
require_once __DIR__ . '/orders.php';

add_action('rest_api_init', 'servv_plugin_register_api_endpoint', 1);
add_action('save_post', 'servv_process_custom_block_on_save', 10, 3);
add_action('before_delete_post', 'servv_handle_before_delete_post');

function servv_plugin_register_api_endpoint() {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/check-signature', [
        'methods' => 'GET',
        'callback' => 'servv_plugin_check_signature',
        'permission_callback' => '__return_true' // Allows public access (customize for more security)
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/variant-info/(?P<event_id>\d+)/(?P<variant_id>\d+)', [
        'methods' => 'GET',
        'callback' => 'servv_get_product_info',
        'permission_callback' => 'validate_request_from_servv_api'
    ]);
}

function servvGetApiBaseUrl() {
    $apiUrl = servv_plugin_get_config('api_base_url');
    $apiVersion = servv_plugin_get_config('api_version');
    $apiUrl .= '/api';
    if(!empty($apiVersion)) {
        $apiUrl .= '/'.$apiVersion;
    }
    return $apiUrl;
}
function servvSendApiRequest($route, $data = [], $method = 'GET')
{
    $apiUrl = servvGetApiBaseUrl().$route;
    $jwt = servv_plugin_generate_jwt();
    $requestData = [
        'method' => $method,
        'timeout'   => 60,
        'blocking' => true,
        'sslverify' => false,
        'headers' => [
            'Authorization' => 'Bearer ' . $jwt,
            'SERVV-SHOP-AUTH-TYPE' => 'wordpress',
            'Content-Type' => 'application/json',
        ],
    ];
    if(!empty($data)){
        $dataString = json_encode($data);
        $requestData['body'] = $dataString;
        $requestData['headers']['Content-Length'] = strlen($dataString);
    }
    $response = wp_remote_request($apiUrl, $requestData);
    $responseCode = wp_remote_retrieve_response_code($response);
    if ($responseCode !== 200) {
        throw new Exception('Error: Bad api response code '.esc_html($responseCode), (int)$responseCode);
    }
    $responseBody = json_decode(wp_remote_retrieve_body($response), true);
    if (!empty($responseBody['error'])) {
        throw new Exception('Error: Bad api response body '.esc_html($responseBody['error']), 500);
    }
    return $responseBody;
}



function servv_plugin_activate() {
    if (!wp_next_scheduled('servv_plugin_delayed_install')) {
        wp_schedule_single_event(time() + 5, 'servv_plugin_delayed_install');
    }
}

function servv_plugin_deactivate() {
    wp_clear_scheduled_hook('servv_plugin_delayed_install');
    try {
        servvSendApiRequest('/wordpress/uninstall', [], 'POST');
    } catch (Exception $e) {
    }
}

function servv_plugin_make_delayed_install() {
    $siteDomain = wp_parse_url( servv_plugin_get_config('site_url'), PHP_URL_HOST );
    $siteName = get_bloginfo('name');
    $adminEmail = get_bloginfo('admin_email');
    $wpVersion = get_bloginfo('version');
    $pluginVersion = servv_plugin_get_config('plugin_version');
    $uuid = servv_plugin_get_uuid();
    $requestBody = [
        'site_domain' => $siteDomain,
        'site_name' => $siteName,
        'admin_email' => $adminEmail,
        'wp_version' => $wpVersion,
        'plugin_version' => $pluginVersion,
        'uuid' => $uuid
    ];
    try {
        $response = servvSendApiRequest('/wordpress/authenticate/install', $requestBody, 'POST');
    } catch (Exception $e) {
        deactivate_plugins(plugin_basename(__FILE__));  // Deactivate the plugin
        return;
    }
}



function servv_plugin_generate_secret_key() {
    $secret_key = bin2hex(random_bytes(32));
    update_option('servv_plugin_secret_key', $secret_key, false);
    return $secret_key;
}
function servv_plugin_get_secret_key() {
    $secret_key = get_option('servv_plugin_secret_key');
    if (!$secret_key) {
        $secret_key = servv_plugin_generate_secret_key();
    }

    return $secret_key;
}
function servv_plugin_generate_uuid() {
    $uuid = wp_generate_uuid4();
    update_option('servv_plugin_uuid', $uuid);
    return $uuid;
}

function servv_plugin_get_uuid() {
    $uuid = get_option('servv_plugin_uuid');
    if (!$uuid) {
        $uuid = servv_plugin_generate_uuid();
    }
    return $uuid;
}

function validate_request_from_servv_api($request) {

    $auth_header = $request->get_header('Authorization');
    $apiUrl = servvGetApiBaseUrl().'/authenticate';
    $requestData = [
        'method' => 'GET',
        'timeout'   => 60,
        'blocking' => true,
        'sslverify' => false,
        'headers' => [
            'Authorization' => 'Bearer ' . $auth_header,
            'Content-Type' => 'application/json',
        ],
    ];
    $response = wp_remote_request($apiUrl, $requestData);
    $responseCode = wp_remote_retrieve_response_code($response);
    if ($responseCode !== 200) {
        return new WP_Error('rest_forbidden', 'You are not allowed to access this resource.', array('status' => 403));
    }

    return true;
}


function servv_plugin_check_signature( WP_REST_Request $request ) {
    $auth_header = $request->get_header('Authorization');
    if ($auth_header && preg_match('/Bearer\s(\S+)/', $auth_header, $matches)) {
        $jwt = $matches[1];
        $secret = servv_plugin_get_secret_key();

        try {
            $decoded = JWT::decode($jwt, new Key($secret, 'HS256'));
            return new WP_REST_Response([
                'valid' => true,
                'message' => 'JWT is valid'
            ], 200);

        } catch (Exception $e) {
            return new WP_REST_Response([
                'valid' => false,
                'message' => 'Invalid JWT: ' . $e->getMessage()
            ], 403); // Unauthorized
        }
    }

    return new WP_REST_Response([
        'valid' => false,
        'message' => 'Authorization header missing or invalid'
    ], 403);
}


function servv_plugin_generate_jwt() {
    $secretKey = servv_plugin_get_secret_key();
    $siteDomain = wp_parse_url( servv_plugin_get_config('site_url'), PHP_URL_HOST );
    $uuid = servv_plugin_get_uuid();
    $payload = [
        'site_domain'    => $siteDomain,
        'uuid'  => $uuid,
        'iss' => servv_plugin_get_config('site_url'),
        'iat' => time(),
        'exp' => time() + 60
    ];

    // Generate the JWT token using the secret key
    $jwt = JWT::encode($payload, $secretKey, 'HS256');

    return $jwt;
}


function servv_process_custom_block_on_save($post_id, $post, $update) {
    // Avoid processing during autosaves
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if ($post->post_type === 'revision') {
        return;
    }
    if ($post->post_status === 'trash') {
        return;
    }
    // Check user permissions
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Extract blocks from post content
    if (has_blocks($post->post_content)) {
        $blocks = parse_blocks($post->post_content);
        foreach ($blocks as $block) {
            if ($block['blockName'] === 'create-block/servv-plugin') {

                $event = $block['attrs']['meeting'] ?? [];
                $product = $block['attrs']['product'] ?? [];
                $types = $block['attrs']['types'] ?? [];
                $customFields = $block['attrs']['custom_fields'] ?? [];
                $notifications = $block['attrs']['notifications'] ?? [];
                $eventLocationType = $event['location'] ?? ' ';
                if(empty($event['startTime'] ?? '') || empty($event['duration'] ?? '')) {
                    continue;
                }
                $requestBody = [
                    'meeting'   => [
                        'topic'   =>   $post->post_title,
                        'start_time'  => $event['startTime'] ?? '',
                        'duration'  => $event['duration'] ?? '',
                        'agenda'  => $event['agenda'] ?? '',
                        'timezone'  => $event['timezone'] ?? '',
                        'type'  => $event['eventType'] ?? '',
                    ],
                    'shop_post_object_id'   => (int)$post_id
                ];
                if(!empty($event['recurrence'] ?? [])){
                    $recurrence = [];
                    if(!empty($event['recurrence']['weekly_days'])) {
                        $recurrence['weekly_days'] =
                            implode(',', $event['recurrence']['weekly_days']);
                    }
                    if(!empty($event['recurrence']['repeat_interval'])) {
                        $recurrence['repeat_interval'] = (int)$event['recurrence']['repeat_interval'];
                    }
                    if(!empty($event['recurrence']['monthly_day'])) {
                        $recurrence['monthly_day'] = (int)$event['recurrence']['monthly_day'];
                    }
                    if(!empty($event['recurrence']['monthly_week'])) {
                        $recurrence['monthly_week'] = (int)$event['recurrence']['monthly_week'];
                    }
                    if(!empty($event['recurrence']['monthly_week_day'])) {
                        $recurrence['monthly_week_day'] = (int)$event['recurrence']['monthly_week_day'];
                    }
                    if(!empty($event['recurrence']['type'])) {
                        $recurrence['type'] = (int)$event['recurrence']['type'];
                    }
                    if(!empty($event['recurrence']['end_times'])) {
                        $recurrence['end_times'] = (int)$event['recurrence']['end_times'];
                    }
                    if(!empty($event['recurrence']['end_date_time'])) {
                        $recurrence['end_date_time'] = $event['recurrence']['end_date_time'];
                    }
                    $requestBody['meeting']['recurrence'] = $recurrence;
                }
                if(!empty($types)) {
                    $requestBody['types'] = $types;
                }
                if(!empty($customFields)) {
                    $requestBody['custom_fields'] = $customFields;
                }
                if(!empty($notifications)) {
                    $requestBody['notifications'] = $notifications;
                }
                $requestProduct = [];
                $quantity = $product['quantity'] !== null ? (int)$product['quantity'] : null;
                $requestProduct['quantity'] = $quantity;
                $requestProduct['price'] = (float)$product['price'];

                if(!empty($requestProduct)){
                    $requestBody['product'] = $requestProduct;
                }

                $method = 'POST';
                $servvEventId = get_post_meta($post_id, 'servv_event_id', true);
                if(!empty($servvEventId)) {
                    $eventLocationType = get_post_meta($post_id, 'servv_event_location_type', true);
                }
                $apiRoute = $eventLocationType == 'offline' ? '/offline/meetings' : '/zoom/meetings';
                if(!empty($servvEventId)) {
                    $apiRoute .= '/'.$servvEventId;
                    $method = 'PATCH';
                }

                try {
                    $responseBody = servvSendApiRequest($apiRoute, $requestBody, $method);
                } catch(\Exception $e) {
                    wp_die( 'Error: Invalid save response. '.esc_html($e->getMessage()));
                }

                if(empty($servvEventId)){
                    $servvEventId = $responseBody['id'] ?? 0;
                    if(empty($servvEventId)) {
                        wp_die( 'Error: Invalid save response.');
                    }
                    update_post_meta($post_id, 'servv_event_id', $servvEventId);
                    update_post_meta($post_id, 'servv_event_location_type', $eventLocationType);
                    update_post_meta($post_id, 'servv_event_type', 'meeting');

                    $tickets =  $block['attrs']['tickets'] ?? [];
                    $currency = get_option('servv_currency', 'USD');
                    $eventProvider = $eventLocationType == 'offline' ? 'offline' : 'zoom';
                    $ticketsAPIRoute = '/types/tickets/'.$servvEventId.'?event_type=meeting&event_provider='.$eventProvider;
                    foreach($tickets as $ticket) {
                        try {
                            $ticket['currency'] = $currency;
                            $ticket['price'] =  (float)($ticket['price'] ?? 0);
                            $ticket['price_units'] = servv_format_amount_for_stripe($ticket['price'], $currency);
                            $responseBody = servvSendApiRequest($ticketsAPIRoute, $ticket, 'POST');
                        } catch(\Exception $e) {
                            wp_die( 'Error: Invalid save ticket response. '.esc_html($e->getMessage()));
                        }
                    }

                }

                servvUpdateQuantityWithRequest($post_id, $servvEventId, $eventLocationType, $quantity);
            }
        }
    }
}

function servvUpdateQuantityWithRequest($post_id, $servvEventId, $eventLocationType, $quantity)
{
    $quantities = get_post_meta($post_id, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    $apiRoute = $eventLocationType == 'offline' ? '/offline/meetings/'.$servvEventId :
        '/zoom/meetings/'.$servvEventId;
    try {
        $getEventResponse = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        wp_die( 'Error: Invalid get event response. '.esc_html($e->getMessage()));
    }
    $eventData = $getEventResponse['meeting'] ?? [];
    $occurrences = $eventData['occurrences'] ?? [];
    if(empty($occurrences)) {
        $quantities[0] = $quantity;
    } else {
        foreach ($occurrences as $occurrence) {
            $quantities[$occurrence['id']] = $quantity;
        }
    }
    update_post_meta($post_id, 'servv_event_quantities', json_encode($quantities));
}

function servv_handle_before_delete_post($post_id) {
    // Check user permissions
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    $post = get_post($post_id);
    if (!$post || $post->post_type !== 'post') {
        return;
    }
    $servvEventId = get_post_meta($post_id, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return;
    }
    $eventLocationType = get_post_meta($post_id, 'servv_event_location_type', true);
    $apiRoute = $eventLocationType == 'offline' ? '/offline/meetings/'.$servvEventId : '/zoom/meetings/'.$servvEventId;
    try {
        $responseBody = servvSendApiRequest($apiRoute, [], 'DELETE');
    } catch(\Exception $e) {
        wp_die( 'Error: Invalid delete response. '.esc_html($e->getMessage()));
    }
}


// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- unique one-time zoom code is checked through api
function servv_plugin_zoom_confirm() {
    $code = isset($_GET['code']) ? sanitize_text_field(wp_unslash($_GET['code'])) : '';
    $redirectUrl = admin_url('admin.php?page='.SERVV_PLUGIN_SLUG);
    if(empty($code)) {
        echo "<script>location.href = '" . esc_js( esc_url_raw( $redirectUrl ) ) . "'</script>";
        exit();
    }
    $apiRoute = '/zoom/authenticate/confirm?code='.$code;
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        echo "<script>location.href = '" . esc_js( esc_url_raw( $redirectUrl ) ) . "'</script>";
        exit();
    }

    echo "<script>location.href = '" . esc_js( esc_url_raw( $redirectUrl ) ) . "'</script>";
    exit();
}

// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- unique one-time google calendar code is checked through api

function servv_plugin_calendar_confirm() {
    $code = isset($_GET['code']) ? sanitize_text_field(wp_unslash($_GET['code'])) : '';
    $redirectUrl = admin_url('admin.php?page='.SERVV_PLUGIN_SLUG);
    if(empty($code)) {
        echo "<script>location.href = '" . esc_js( esc_url_raw( $redirectUrl ) ) . "'</script>";
        exit();
    }
    $apiRoute = '/calendar/authenticate/confirm?code='.$code;
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        echo "<script>location.href = '" . esc_js( esc_url_raw( $redirectUrl ) ) . "'</script>";
        exit();
    }

    echo "<script>location.href = '" . esc_js( esc_url_raw( $redirectUrl ) ) . "'</script>";
    exit();
}

// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- unique one-time gmail code is checked through api
function servv_plugin_gmail_confirm() {
    $code = isset($_GET['code']) ? sanitize_text_field(wp_unslash($_GET['code'])) : '';
    $redirectUrl = admin_url('admin.php?page='.SERVV_PLUGIN_SLUG);
    if(empty($code)) {
        echo "<script>location.href = '" . esc_js( esc_url_raw( $redirectUrl ) ) . "'</script>";
        exit();
    }
    $apiRoute = '/mail/gmail/authenticate/confirm?code='.$code;
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        echo "<script>location.href = '" . esc_js( esc_url_raw( $redirectUrl ) ) . "'</script>";
        exit();
    }

    echo "<script>location.href = '" . esc_js( esc_url_raw( $redirectUrl ) ) . "'</script>";
    exit();
}


function servv_get_product_info($request )
{
    $eventId = $request['event_id'];
    $variantId = $request['variant_id'];

    $post = servv_get_post_by_meta_value('servv_event_id', $eventId);
    if(empty($post)) {
        wp_send_json_error(['message' => 'Unknown post']);
        exit();
    }
    $postId = $post->ID;
    $occurrenceId = str_replace($postId.'0', '', $variantId);

    $quantities = get_post_meta($postId, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    $quantity = !empty($occurrenceId) ? $quantities[$occurrenceId] ?? null : $quantities[0] ?? null;

    wp_send_json([
        'quantity' => $quantity,
        'handle'    => get_permalink($postId)
    ]);
    exit();
}