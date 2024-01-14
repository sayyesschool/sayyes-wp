<?php
/*
 * Template Name: Английский для компаний
 */

 $context = Timber::context();
 $context['page'] = Timber::get_post();
 $context['teachers'] = Timber::get_posts([
     'post_type' => 'teacher',
     'post_status'=>'publish',
     'posts_per_page' => 9,
     'orderby' => 'menu_order',
     'order' => 'DESC'
]);

Timber::render('pages/corporate.twig', $context);