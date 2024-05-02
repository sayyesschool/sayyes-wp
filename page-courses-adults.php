<?php
/*
 * Template Name: Курсы для взрослых
 */

$context = Timber::context();
$context['page'] = Timber::get_post();
$context['courses'] = Timber::get_posts([
    'post_type' => 'course',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'ASC',
    'tax_query' => [
        [
            'taxonomy' => 'course_type',
            'field' => 'slug',
            'terms' => 'adults'
        ]
    ]
])->to_array();

Timber::render('pages/courses-adults.twig', $context);