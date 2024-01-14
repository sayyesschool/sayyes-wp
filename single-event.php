<?php

$context = Timber::get_context();
$page = Timber::query_post();
$host = new TimberPost($page->host);

$page->page_id = 'event';
$page->host = $host;

$context['page'] = $page;
$context['event'] = $page;

Timber::render('pages/events/event.twig', $context);