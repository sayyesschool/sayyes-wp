<?php

$context = Timber::context();
$page = Timber::get_post();
$page->name = 'not-found';

$context['page'] = $page;

Timber::render('pages/not-found.twig', $context);