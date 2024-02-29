<?php

$context = Timber::context();
$page = Timber::get_post();
$course = $page;
$course_type = $page->has_term('children') ? 'children' : 'adults';

$context['page'] = $page;
$context['course'] = $page;
$context['layout_class'] = 'course-'.$course_type;

$testimonials = $course->meta('testimonials');
$testimonial_groups = array_reduce($testimonials ? $testimonials : [], function($result, $testimonial_id) {
    $testimonial = Timber::get_post($testimonial_id);

    if ($testimonial->has_term('Zoon', 'testimonial_group'))
        array_push($result['Zoon']['testimonials'], $testimonial);
    else if ($testimonial->has_term('Yandex', 'testimonial_group'))
        array_push($result['Yandex']['testimonials'], $testimonial);
    else if ($testimonial->has_term('Schoolrate', 'testimonial_group'))
        array_push($result['Schoolrate']['testimonials'], $testimonial);

    return $result;
}, [
    'Zoon' => [
        'name' => 'Zoon',
        'score' => 5.0,
        'link' => '',
        'testimonials' => []
    ],
    'Yandex' => [
        'name' => 'Yandex',
        'score' => 5.0,
        'link' => '',
        'testimonials' => []
    ],
    'Schoolrate' => [
        'name' => 'Schoolrate',
        'score' => 5.0,
        'link' => '',
        'testimonials' => []
    ]
]);

$context['testimonial_groups'] = array_filter($testimonial_groups, function($group) {
    return count($group['testimonials']) > 0;
});

Timber::render('pages/courses/course-'.$course_type.'.twig', $context);