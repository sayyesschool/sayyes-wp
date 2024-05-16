<?php

$context = Timber::context();
$page = Timber::get_post();

$context['page'] = $page;
$context['format'] = $page;

Timber::render('pages/formats/'.$context['format']->name.'.twig', $context);