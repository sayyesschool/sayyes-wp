<?php

$context = Timber::context();
$page = Timber::get_post();
$page_name = $page->name;

$template = $page_name ?
    ['pages/'.$page_name.'.twig', 'pages/default.twig'] :
    'pages/default.twig';

$context['page'] = $page;

Timber::render($template, $context);