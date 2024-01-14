<?php
/*
 * Template Name: Курсы для детей
 */

$context = Timber::context();
$context['page'] = Timber::get_post();
$context['courses'] = Timber::get_term('course_type', 'children');

Timber::render('pages/courses-children.twig', $context);