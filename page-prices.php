<?php
/*
 * Template Name: Цены
 */

$context = Timber::context();
$context['page'] = Timber::get_post();

$context['courses'] = Timber::get_posts([
    'post_type' => 'course',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'ASC'
])->to_array();

Timber::render('pages/prices.twig', $context);