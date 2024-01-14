<?php
require 'vendor/autoload.php';
require 'utils.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];

$mailerliteClient = new \MailerLiteApi\MailerLite('709f577550c6bc8347c51cf2258a1534');

$groups = $mailerliteClient->groups();

$groupId = '4585897';

$subscriber = [
    'email' => $email,
    'name' => $name
];

$addedSubscriber = $groups->addSubscriber($groupId, $subscriber);

send_json([
    'ok' => true,
    'subscriber' => $addedSubscriber
]);