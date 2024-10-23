<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once '../../../vendor/autoload.php';
require_once 'constants.php';

function send_email($from, $to, $subject, $message) {
    $mailer = new PHPMailer(true);

    try {
        // $mailer->SMTPDebug = SMTP::DEBUG_SERVER;
        $mailer->isSMTP();
        $mailer->Host = SMTP_HOST;
        $mailer->Port = SMTP_PORT;
        $mailer->Username = SMTP_USER;
        $mailer->Password = SMTP_PASS;
        $mailer->SMTPAuth = true;
        $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    
        $mailer->setFrom($from, 'Сайт Say Yes');
        $mailer->addAddress($to, 'Заявки');
        $mailer->addReplyTo('info@sayyes.school', 'Information');
    
        $mailer->isHTML(true);
        $mailer->CharSet = PHPMailer::CHARSET_UTF8;
        $mailer->Subject = $subject;
        $mailer->Body = $message;
    
        return $mailer->send();
    } catch (Exception $e) {
        throw new Exception("Message could not be sent. Mailer Error: {$mailer->ErrorInfo}");
    }
}

function send_email_builtin($from, $to, $subject, $message) {
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";
    $headers .= "Organization: Школа SAY YES\r\n";
	$headers .= "From: Сайт SAY YES ".$from."\r\n";
	$headers .= "Reply-To: Школа SAY YES <info@sayes.ru>\r\n";
    $headers .= "X-Mailer: E-mail from Say Yes website \r\n";
    
    return mail($to, $subject, $message, $headers);
}