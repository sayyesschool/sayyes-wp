<?php

require 'helpers.php';

try {
    // TODO: Add $_REQUEST handling

    $data = json_decode(file_get_contents('php://input'), true);

    $crm_response = send_crm_request($data);
    send_request_email($data);
    send_json([
        'ok' => true,
        'data' => $crm_response,
        'message' => 'Заявка принята'
    ]);
} catch (Exception $e) {
    http_response_code($e->getCode());

    send_json([
        'ok' => false,
        'error' => true,
        'message' => $e->getMessage()
    ]);
}