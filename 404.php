<?php

$context = Timber::context();
$page = Timber::get_post();

$page->page_id = 'not-found';

$context['page'] = $page;

Timber::render('pages/404.twig', $context);