<?php

define('COMPANY_NAME', 'SAY&nbsp;YES!');
define('COMPANY_YEAR', 2013);
define('COMPANY_AGE', date('Y') - COMPANY_YEAR);

define('JIVOSITE_KEY', 'N60okSsqRQ');

define('SITE_DOMAIN', $_ENV['SERVER_NAME']);
define('SITE_EMAIL', 'site@'.$_ENV['SERVER_NAME']);

define('RECAPTCHA_URL', 'https://api.'.$_ENV['SERVER_NAME'].'/recaptcha');
define('RECAPTCHA_KEY', '6LenTzMiAAAAABvM_nwArCX5rtvJQ3TUQS8EsN1q');
define('RECAPTCHA_SCORE', 0.5);

define('REQUEST_EMAIL', 'request@'.$_ENV['SERVER_NAME']);
define('REQUEST_URL', 'https://api.'.$_ENV['SERVER_NAME'].'/request');

define('TEST_URL', 'https://api.'.$_ENV['SERVER_NAME'].'/test');

define('YANDEX_METRIKA_COUNTER', 99371064);