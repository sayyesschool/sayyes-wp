<?php
/*
 * Template Name: Курсы для взрослых
 */

$context = Timber::context();
$context['page'] = Timber::get_post();

$courses = Timber::get_posts([
    'post_type' => 'course',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'ASC'
])->to_array();

$context['courses'] = array_filter($courses, function($course) {
    return $course->has_term('adults');
});

Timber::render('pages/courses-adults.twig', $context);