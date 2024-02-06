<?php

$context = Timber::context();
$page = Timber::get_post();
$page->name = $page->course_id;
$template = 'pages/course-';

$context['page'] = $page;
$context['course'] = $page;

if ($page->has_term('children')) {
    $context['parent_page'] = Timber::get_post(109);
    $template .= 'children.twig';
} else {
    $context['parent_page'] = Timber::get_post(107);
    $template .= 'adults.twig';
}

Timber::render($template, $context);