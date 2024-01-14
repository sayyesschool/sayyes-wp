<?php
/*
 * Template Name: Отзывы
 */

$context = Timber::context();
$context['page'] = Timber::get_post();
$context['side_menu'] = Timber::get_menu(65);
$context['text_testimonials'] = Timber::get_term('text', 'testimonial_type')->posts([
    'posts_per_page' => -1,
    'orderby' => 'menu_order'
]);
$context['video_testimonials'] = Timber::get_term('video', 'testimonial_type')->posts(20);

Timber::render('pages/testimonials.twig', $context);