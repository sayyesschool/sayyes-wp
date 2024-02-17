<?php
/*
 * Template Name: Формы обучения
 */

$context = Timber::context();
$context['page'] = Timber::get_post();
$context['formats'] = Timber::get_posts([
    'post_type' => 'format',
    'post_status'=>'publish',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'ASC'
]);

Timber::render('pages/formats.twig', $context);