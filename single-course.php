<?php

$context = Timber::context();
$page = Timber::get_post();
$page->name = $page->course_id;
$template = 'pages/courses/course-';

$context['page'] = $page;
$context['course'] = $page;

if ($page->has_term('children')) {
    $template .= 'children.twig';
} else {
    $template .= 'adults.twig';
}

Timber::render($template, $context);