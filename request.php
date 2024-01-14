<?php
require 'utils.php';

$data = json_decode(file_get_contents('php://input'), true);

$title = $data['title'];
$name = $data['name'];
$phone = $data['phone'];
$email = $data['email'];
$recaptcha = $data['recaptcha'];

if (empty($phone) && empty($email)) {
    http_response_code(400);
    exit;
}

$message = '<html><body style="font-family: sans-serif">';
$message .= '<div><b>Имя:</b> '.$name.'</div>';
$message .= '<div><b>Телефон:</b> '.$phone.'</div>';
$message .= '<div><b>Электронная почта:</b> '.$email.'</div>';
$message .= '<div><b>reCAPTCHA: </b>'.($recaptcha['success'] ? ('Пройдена ('.$recaptcha['score'].')') : 'Не пройдена').'</div>';
$message .= '</body></html>';

send_email('info@sayes.ru', $title ? $title : 'Заявка на пробный урок и консультацию', $message);

send_json(['ok' => true]);