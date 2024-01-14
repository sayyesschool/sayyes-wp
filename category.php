<?php

$context = Timber::context();

$context['category'] = new TimberTerm(get_query_var('cat'));
$context['categories'] = Timber::get_terms('category');
$context['posts'] = Timber::get_posts();
$context['tags'] = Timber::get_terms('tags');

$context['page'] = $context['category'];
$context['post'] = $context['category'];

$context['page']->page_id = 'category';

Timber::render('pages/blog/category.twig', $context);