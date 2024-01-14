<?php

$context = Timber::context();
$page = Timber::get_post();

$context['page'] = $page;

$template = $page->page_id ?
    ['pages/'.$page->page_id.'.twig', 'pages/default.twig'] :
    'pages/default.twig';

Timber::render($template, $context);