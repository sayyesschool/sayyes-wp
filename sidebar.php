<?php

global $site;

$context = [];
$context['root'] = $site->theme->uri.'/';
$context['testimonials'] = Timber::get_posts([
    'post_type' => 'testimonial',
    'showposts' => 2,
	'orderby' => 'rand'
]);

Timber::render('components/sidebar.twig', $context);