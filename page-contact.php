<?php
/*
 * Template Name: Контакты
 */

$context = Timber::context();
$context['page'] = Timber::get_post();
$context['managers'] = Timber::get_posts([
    'post_type' => 'manager',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'ASC'
]);

Timber::render('pages/contact.twig', $context);