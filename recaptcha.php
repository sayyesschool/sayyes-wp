<?php
require 'utils.php';

define('RECAPTCHA_V3_SECRET_KEY', '6LenTzMiAAAAAIevbqe4Mss9KmBRFMUVnZkgmhCb');

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$phone = $data['phone'];
$action = $data['action'];
$token = $data['token'];

if (empty($name) || empty($phone) || empty($action) || empty($token)) {
    http_response_code(400);
    exit;
}

$response = http_post('https://www.google.com/recaptcha/api/siteverify', [
	'secret' => RECAPTCHA_V3_SECRET_KEY,
	'response' => $token
]);

send_json($response);