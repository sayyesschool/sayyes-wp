<?php
/*
 * Template Name: Курсы
 */

$context = Timber::context();
$context['page'] = Timber::get_post();
$context['side_menu'] = Timber::get_menu('side_course_menu');
$context['courses'] = [
    'group' => Timber::get_term('group'),
    'theme' => Timber::get_term('theme'),
    'tutor' => Timber::get_term('tutor'),
    'children' => Timber::get_term('children')
];
$context['course_links'] = [
    'adults' => Timber::get_post(107),
    'children' => Timber::get_post(109),
    'club' => Timber::get_post(111),
    'trial' => Timber::get_post(113)
];

Timber::render('pages/courses/courses.twig', $context);