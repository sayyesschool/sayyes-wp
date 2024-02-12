<?php

$context = Timber::context();
$page = Timber::get_post();

$context['page'] = $page;
$context['format'] = $page;

Timber::render('pages/formats/'.$page->name.'.twig', $context);