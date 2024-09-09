<?php
require_once 'constants.php';
require 'helpers.php';

$data = json_decode(file_get_contents('php://input'), true);

$action = $data['action'];
$token = $data['token'];

if (empty($action) || empty($token)) {
    http_response_code(400);
    exit;
}

$response = http_post('https://www.google.com/recaptcha/api/siteverify', [
	'secret' => RECAPTCHA_SECRET_KEY,
	'response' => $token
]);

send_json($response);