<?php
/*
 * Template Name: Прогресс
 */

$context = Timber::context();
$context['page'] = Timber::get_post();
$context['side_menu'] = Timber::get_menu(65);
$reports = Timber::get_posts([
    'post_type' => 'report',
    'posts_per_page' => 10,
    'orderby' => 'menu_order',
    'order' => 'ASC'
])->to_array();

$context['reports'] = array_map(function($report) {
    $report->teacher = Timber::get_post($report->teacher);

    return $report;
}, $reports);

Timber::render('pages/progress.twig', $context);