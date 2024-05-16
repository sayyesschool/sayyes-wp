<?php

$context = Timber::context();
$page = Timber::get_post();
$course = $page;
$course_type = $course->type();

$context['page'] = $page;
$context['course'] = $page;
$context['layout_class'] = 'course-'.$course_type;
$context['teachers'] = Timber::get_posts([
    'post_type' => 'teacher',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'ASC',
    'tax_query' => [
        [
            'taxonomy' => 'teacher_type',
            'field' => 'slug',
            'terms' => 'children'
        ]
    ]
]);

Timber::render('pages/courses/course-'.$course_type.'.twig', $context);