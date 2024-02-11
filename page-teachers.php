<?php
/*
 * Template Name: Преподаватели
 */

$context = Timber::context();
$context['page'] = Timber::get_post();

$teachers = Timber::get_posts([
    'post_type' => 'teacher',
    'post_status'=>'publish',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'DESC'
])->to_array();

$context['teachers'] = $teachers;

$context['offline_teachers'] = array_filter($teachers, function($teacher) {
    return !$teacher->has_term('online');
});
$context['online_teachers'] = array_filter($teachers, function($teacher) {
    return $teacher->has_term('online');
});

Timber::render('pages/teachers.twig', $context);