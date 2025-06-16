<?php

$context = Timber::get_context();
$page = Timber::query_post();
$host = new TimberPost($page->host);
$page->name = 'event';
$page->host = $host;

$context['page'] = $page;
$context['event'] = $page;
$context['layout_class'] = 'page';

Timber::render('pages/events/event.twig', $context);