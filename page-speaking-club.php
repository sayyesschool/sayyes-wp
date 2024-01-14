<?php
/*
 * Template Name: Разговорный клуб
 */

$now = date('Y-m-d H:i:s');
$context = Timber::context();
$context['page'] = Timber::get_post();
$context['side_menu'] = Timber::get_menu(68);

$events = Timber::get_posts([
    'post_type' => 'event',
    'post_status' => ['publish', 'future'],
    'posts_per_page' => -1,
    'orderby' => 'date',
    'order' => 'ASC'
])->to_array();

$context['events'] = array_map(function($event) {
    $host = Timber::get_post($event->host);
    $event->host = $host;
    return $event;
}, $events);
$context['past_events'] = array_filter($events, function($event) use ($now) {
    return $event->datetime < $now;
});
$context['future_events'] = array_filter($events, function($event) use ($now) {
    return $event->datetime > $now;
});

Timber::render('pages/speaking-club.twig', $context);