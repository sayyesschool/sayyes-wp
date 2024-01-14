<?php

$context = Timber::context();
$context['posts'] = Timber::get_posts([
    'post_type' => 'post',
    's' => get_search_query()
]);
$context['title'] = 'Вот что мы нашли по запросу: "'.get_search_query().'"';
$templates = ['templates/page.twig', 'pages/archive.twig', 'index.twig'];

Timber::render($templates, $context);