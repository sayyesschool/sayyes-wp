<?php

require_once 'constants.php';
require 'email.php';

function http_post($url, $data) {
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	curl_close($ch);
	return json_decode($response, true);
}

function http_post_json($url, $data) {
	$ch = curl_init($url);
	$payload = json_encode($data);
    $referer = $_SERVER['HTTP_REFERER'] ? $_SERVER['HTTP_REFERER'] : SITE_DOMAIN;
	curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
	curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_REFERER, $referer);
	$response = curl_exec($ch);
	curl_close($ch);
	return json_decode($response, true);
}

function send_json($data) {
    header('Content-Type: application/json', true);

    echo json_encode($data);
}

function send_request_email($data) {
    $name = isset($data['name']) ? $data['name'] : '';
    $phone = isset($data['phone']) ? $data['phone'] : '';
    $email = isset($data['email']) ? $data['email'] : '';
    $format = isset($data['format']) ? $data['format'] : '';
    $communication = isset($data['communication']) ? $data['communication'] : '';
    $origin = isset($data['origin']) ? $data['origin'] : '';
    $recaptcha = isset($data['recaptcha']) ? $data['recaptcha'] : null;

    if (empty($phone))
        throw new Exception('Не указан телефон', 400);

    $subject = isset($data['format']) ? 'Заявка на обучение ('.$data['format'].')' : 'Заявка на обратный звонок';

    $message = '<html><body style="font-family: sans-serif">';

    $message .= '<div><b>Имя:</b> '.$name.'</div>';
    $message .= '<div><b>Телефон:</b> '.$phone.'</div>';

    if ($email)
        $message .= '<div><b>Электронная почта:</b> '.$email.'</div>';

    if ($format)
        $message .= '<div><b>Формат обучения:</b> '.$format.'</div>';

    if ($communication)
        $message .= '<div><b>Способ связи:</b> '.$communication.'</div>';

    if ($origin)
        $message .= '<div><b>Сайт:</b> '.$origin.'</div>';

    if (isset($data['utm_source']))
        $message .= '<div><b>UTM Source:</b> ' . $data['utm_source'] . '</div>';
    if (isset($data['utm_medium']))
        $message .= '<div><b>UTM Medium:</b> ' . $data['utm_medium'] . '</div>';
    if (isset($data['utm_campaign']))
        $message .= '<div><b>UTM Campaign:</b> ' . $data['utm_campaign'] . '</div>';
    if (isset($data['utm_content']))
        $message .= '<div><b>UTM Content:</b> ' . $data['utm_content'] . '</div>';

    if ($recaptcha)
        $message .= '<div><b>reCAPTCHA: </b>'.($recaptcha['success'] ? ('Пройдена ('.$recaptcha['score'].')') : 'Не пройдена').'</div>';

    $message .= '</body></html>';

    send_email_builtin(SITE_EMAIL, REQUEST_EMAIL, $subject, $message);
}

function send_crm_request($data) {
    $type = isset($data['format']) ? 'Заявка на обучение ('.$data['format'].')' : 'Заявка на обратный звонок';

    return http_post_json(CRM_REQUEST_URL, [
        'type' => $type,
        'fullName' => isset($data['name']) ? $data['name'] : '',
        'phone' => isset($data['phone']) ? $data['phone'] : '',
        'eMail' => isset($data['email']) ? $data['email'] : '',
        'description' => isset($data['description']) ? $data['description'] : ''
    ]);
}

function disqus_embed($disqus_shortname, $post) {
    wp_enqueue_script('disqus_embed','https://'.$disqus_shortname.'.disqus.com/embed.js');
    echo '<div id="disqus_thread"></div>
    <script type="text/javascript">
        var hey = "hey";
        var disqus_shortname = "'.$disqus_shortname.'";
        var disqus_title = "'.htmlentities($post->post_title).'";
        var disqus_url = "'.get_permalink($post->ID).'";
        var disqus_identifier = "'.$disqus_shortname.'-'.$post->ID.'";
    </script>';
}

function redirect($location) {
    header('Location: '.$location);
    exit;
}