<?php

$context = Timber::context();
$context['tag'] = Timber::get_term(get_query_var('tag'));
$context['tags'] = Timber::get_terms('tags');
$context['categories'] = Timber::get_terms('category');
$context['posts'] = Timber::get_posts();

$context['page'] = $context['tag'];
$context['post'] = $context['tag'];
$context['page']->page_id = 'tag';

Timber::render('pages/blog/tag.twig', $context);