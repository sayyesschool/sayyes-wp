<?php

$context = Timber::context();
$context['categories'] = Timber::get_terms('category');
$context['tags'] = Timber::get_terms('tags');
$context['blog_sidebar'] = Timber::get_widgets('blog_sidebar');
$context['comment_form'] = TimberHelper::get_comment_form();
$page = Timber::get_post();
$page->name = 'post';

$context['page'] = $page;
$context['post'] = $page;

Timber::render('pages/blog/post.twig', $context);