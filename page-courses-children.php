<?php
/*
 * Template Name: Курсы для детей
 */

$context = Timber::context();
$context['page'] = Timber::get_post();
$context['courses'] = Timber::get_posts([
    'post_type' => 'course',
    'orderby' => 'menu_order',
    'order' => 'ASC',
    'tax_query' => [
        [
            'taxonomy' => 'course_type',
            'field' => 'slug',
            'terms' => 'children'
        ]
    ]
])->to_array();

Timber::render('pages/courses-children.twig', $context);