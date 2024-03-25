<?php
/*
 * Template Name: Простая страница
 */

$context = Timber::context();
$context['page'] = Timber::get_post();

Timber::render('pages/default.twig', $context);