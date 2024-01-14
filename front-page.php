<?php

$context = Timber::context();
$context['page'] = Timber::get_post();

$courses = Timber::get_posts([
    'post_type' => 'course',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'ASC'
])->to_array();

$context['courses_adults'] = array_filter($courses, function($course) {
    return $course->has_term('adults');
});
$context['courses_children'] = array_filter($courses, function($course) {
    return $course->has_term('children');
});

Timber::render('pages/main.twig', $context);