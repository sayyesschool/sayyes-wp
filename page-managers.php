<?php
/*
 * Template Name: Менеджеры
 */

$context = Timber::context();
$context['page'] = Timber::get_post();
$context['managers'] = Timber::get_posts([
    'post_type' => 'manager',
    'post_status'=>'publish',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'ASC'
]);

Timber::render('pages/managers.twig', $context);