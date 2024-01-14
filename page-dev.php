<?php
/*
 * Template Name: Страница для разработки
 */

$context = Timber::context();
$context['page'] = Timber::get_post();

Timber::render('pages/dev.twig', $context);