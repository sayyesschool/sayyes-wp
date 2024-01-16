<?php

require_once ABSPATH . 'vendor/autoload.php';
require_once __DIR__ . '/site.php';
require 'utils.php';

Timber\Timber::init();

Timber::$dirname = ['templates', 'views'];

new SayYesSite();