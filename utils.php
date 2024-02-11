<?php

function format_phone_number($string) {
    return str_replace(['+', '-', ' '], [''], $string);
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
	curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	curl_close($ch);
	return json_decode($response, true);
}

function send_email($to, $subject, $message) {
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";
    $headers .= "Organization: Школа SAY YES\r\n";
	$headers .= "From: Школа SAY YES <info@sayes.ru>\r\n";
	$headers .= "Reply-To: Школа SAY YES <info@sayes.ru>\r\n";
    $headers .= "X-Mailer: E-mail from sayes website \r\n";
    
    return mail($to, $subject, $message, $headers);
}

function send_json($data) {
    header('Content-Type: application/json');

    echo json_encode($data);
}

function redirect($location) {
    header('Location: '.$location);
    
    exit;
}