<?php

$context = Timber::context();
$context['posts'] = Timber::get_posts();
$template = is_home() ? 'home.twig' : 'index.twig';

Timber::render($template, $context);