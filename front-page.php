<?php

$context = Timber::context();
$context['page'] = Timber::get_post();

$courses = Timber::get_posts([
    'post_type' => 'course',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'ASC'
])->to_array();

$reports = Timber::get_posts([
    'post_type' => 'report',
    'posts_per_page' => 3,
    'orderby' => 'menu_order',
    'order' => 'ASC'
])->to_array();

$context['courses_adults'] = array_filter($courses, function($course) {
    return $course->has_term('adults');
});
$context['courses_children'] = array_filter($courses, function($course) {
    return $course->has_term('children');
});

$context['reports'] = array_map(function($report) {
    $report->course = Timber::get_post($report->course);
    $report->teacher = Timber::get_post($report->teacher);

    return $report;
}, $reports);

Timber::render('pages/main.twig', $context);