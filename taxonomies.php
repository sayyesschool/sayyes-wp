<?php

/**
 * Примеры имен файлов архивов.
 * taxonomy-[name]-[slug].php *
 * taxonomy-[name].php
 * taxonomy.php
 * archive.php
 * index.php
 */

$taxonomies = [
    'course_type' => [
        ['course'],
        [
            'label' => esc_html__( 'Тип курса', 'custom-post-type-ui' ),
            'labels' => [
                'name' => esc_html__( 'Тип курса', 'custom-post-type-ui' ),
                'singular_name' => esc_html__( 'Тип курса', 'custom-post-type-ui' ),
            ],
            'public' => true,
            'publicly_queryable' => true,
            'hierarchical' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'query_var' => true,
            'rewrite' => [ 'slug' => 'course_type', 'with_front' => true, ],
            'show_admin_column' => true,
            'show_in_rest' => false,
            'show_tagcloud' => true,
            'rest_base' => 'course_type',
            'rest_controller_class' => 'WP_REST_Terms_Controller',
            'rest_namespace' => 'wp/v2',
            'show_in_quick_edit' => false,
            'sort' => false,
            'show_in_graphql' => false,
        ]
    ],

    'teacher_type' => [
        ['teacher'],
        [
            'label' => esc_html__( 'Тип преподавателя', 'custom-post-type-ui' ),
            'labels' => [
                'name' => esc_html__( 'Тип преподавателя', 'custom-post-type-ui' ),
                'singular_name' => esc_html__( 'Тип преподавателя', 'custom-post-type-ui' ),
            ],
            'public' => true,
            'publicly_queryable' => true,
            'hierarchical' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'query_var' => true,
            'rewrite' => [ 'slug' => 'teacher_type', 'with_front' => true, ],
            'show_admin_column' => true,
            'show_in_rest' => false,
            'show_tagcloud' => true,
            'rest_base' => 'teacher_type',
            'rest_controller_class' => 'WP_REST_Terms_Controller',
            'rest_namespace' => 'wp/v2',
            'show_in_quick_edit' => true,
            'sort' => false,
            'show_in_graphql' => false,
        ]
    ],

    'testimonial_type' => [
        ['testimonial'],
        [
            'label' => esc_html__( 'Тип отзыва', 'custom-post-type-ui' ),
            'labels' => [
                'name' => esc_html__( 'Тип отзыва', 'custom-post-type-ui' ),
                'singular_name' => esc_html__( 'Тип отзыва', 'custom-post-type-ui' ),
            ],
            'public' => true,
            'publicly_queryable' => true,
            'hierarchical' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'query_var' => true,
            'rewrite' => [ 'slug' => 'testimonial_type', 'with_front' => true, ],
            'show_admin_column' => true,
            'show_in_rest' => false,
            'show_tagcloud' => true,
            'rest_base' => 'testimonial_type',
            'rest_controller_class' => 'WP_REST_Terms_Controller',
            'rest_namespace' => 'wp/v2',
            'show_in_quick_edit' => false,
            'sort' => false,
            'show_in_graphql' => false,
        ]
    ]
];