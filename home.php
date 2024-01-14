<?php

$context = Timber::context();
$context['page'] = Timber::get_post();
$context['posts'] = Timber::get_posts();
$context['categories'] = Timber::get_terms('category');
$context['tags'] = Timber::get_terms('tags');
$context['pagination'] = Timber::get_pagination();
$context['blog_sidebar'] = Timber::get_widgets('blog_sidebar');

$club_signup_form_context = [];
$club_signup_form_context['events'] = Timber::get_posts([
    'post_type' => 'event',
    'post_status' => ['publish', 'future'],
    'order' => 'ASC',
    'orderby' => 'date',
    'posts_per_page' => '3',
    'date_query' => [
        [
            'year' => date('Y'),
            'month' => date('n')
        ]
    ]
]);
$club_signup_form = Timber::get_sidebar('components/club-signup-form.twig', $club_signup_form_context);

$context['club_signup_form'] = $club_signup_form;

Timber::render('pages/blog/index.twig', $context);