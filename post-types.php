<?php

/**
 * Примеры имен файлов архивов.
 * archive-[name].php
 * archive.php
 * index.php

 * Примеры имен файлов с одиночными сообщениями.
 * single-[name]-[slug].php *
 * single-[name].php
 * single.php
 * singular.php
 * index.php
 */

$post_types = [
    'course' => [
		'label' => esc_html__( 'Курсы', 'custom-post-type-ui' ),
		'labels' => [
            'name' => esc_html__( 'Курсы', 'custom-post-type-ui' ),
            'singular_name' => esc_html__( 'Курс', 'custom-post-type-ui' ),
            'menu_name' => esc_html__( 'Курсы', 'custom-post-type-ui' ),
            'all_items' => esc_html__( 'Все курсы', 'custom-post-type-ui' ),
            'add_new' => esc_html__( 'Добавить новый', 'custom-post-type-ui' ),
            'add_new_item' => esc_html__( 'Добавить новый курс', 'custom-post-type-ui' ),
            'edit_item' => esc_html__( 'Редактировать курс', 'custom-post-type-ui' ),
            'new_item' => esc_html__( 'Новый курс', 'custom-post-type-ui' ),
            'view_item' => esc_html__( 'Посмотреть курс', 'custom-post-type-ui' ),
            'search_items' => esc_html__( 'Найти курс', 'custom-post-type-ui' ),
            'not_found' => esc_html__( 'Курсы не найдены', 'custom-post-type-ui' ),
            'not_found_in_trash' => esc_html__( 'В корзине курсы не найдены', 'custom-post-type-ui' ),
        ],
		'description' => '',
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_rest' => false,
		'rest_base' => '',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
		'rest_namespace' => 'wp/v2',
		'has_archive' => false,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'delete_with_user' => false,
		'exclude_from_search' => false,
		'capability_type' => 'post',
		'map_meta_cap' => true,
		'hierarchical' => false,
		'can_export' => false,
		'rewrite' => [ 'slug' => 'kursi', 'with_front' => false ],
		'query_var' => true,
		'menu_icon' => 'dashicons-welcome-learn-more',
		'supports' => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'page-attributes' ],
		'taxonomies' => [ 'course_type', 'course_format' ],
		'show_in_graphql' => false,
	],

    'format' => [
		'label' => esc_html__( 'Форматы', 'custom-post-type-ui' ),
		'labels' => [
            'name' => esc_html__( 'Форматы', 'custom-post-type-ui' ),
            'singular_name' => esc_html__( 'Формат', 'custom-post-type-ui' ),
            'menu_name' => esc_html__( 'Форматы', 'custom-post-type-ui' ),
            'all_items' => esc_html__( 'Все форматы', 'custom-post-type-ui' ),
            'add_new' => esc_html__( 'Добавить новый', 'custom-post-type-ui' ),
            'add_new_item' => esc_html__( 'Добавить новый формат', 'custom-post-type-ui' ),
            'edit_item' => esc_html__( 'Редактировать формат', 'custom-post-type-ui' ),
            'new_item' => esc_html__( 'Новый формат', 'custom-post-type-ui' ),
            'view_item' => esc_html__( 'Посмотреть формат', 'custom-post-type-ui' ),
            'search_items' => esc_html__( 'Найти формат', 'custom-post-type-ui' ),
            'not_found' => esc_html__( 'Форматы не найдены', 'custom-post-type-ui' ),
            'not_found_in_trash' => esc_html__( 'В корзине форматы не найдены', 'custom-post-type-ui' ),
        ],
		'description' => '',
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_rest' => false,
		'rest_base' => '',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
		'rest_namespace' => 'wp/v2',
		'has_archive' => false,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'delete_with_user' => false,
		'exclude_from_search' => false,
		'capability_type' => 'post',
		'map_meta_cap' => true,
		'hierarchical' => false,
		'can_export' => false,
		'rewrite' => [ 'slug' => 'formati', 'with_front' => false ],
		'query_var' => true,
		'menu_icon' => 'dashicons-list-view',
		'supports' => [ 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'page-attributes' ],
		'show_in_graphql' => false,
	],

    'manager' => [
		'label' => esc_html__( 'Менеджеры', 'custom-post-type-ui' ),
		'labels' => [
            'name' => esc_html__( 'Менеджеры', 'custom-post-type-ui' ),
            'singular_name' => esc_html__( 'Менеджер', 'custom-post-type-ui' ),
            'menu_name' => esc_html__( 'Менеджеры', 'custom-post-type-ui' ),
            'all_items' => esc_html__( 'Все менеджеры', 'custom-post-type-ui' ),
            'add_new' => esc_html__( 'Добавить', 'custom-post-type-ui' ),
            'add_new_item' => esc_html__( 'Добавить менеджера', 'custom-post-type-ui' ),
            'edit_item' => esc_html__( 'Редактировать менеджера', 'custom-post-type-ui' ),
            'new_item' => esc_html__( 'Новый менеджер', 'custom-post-type-ui' ),
            'view_item' => esc_html__( 'Посмотреть менеджера', 'custom-post-type-ui' ),
            'view_items' => esc_html__( 'Посмотреть менеджеров', 'custom-post-type-ui' ),
            'search_items' => esc_html__( 'Найти менеджера', 'custom-post-type-ui' ),
            'not_found' => esc_html__( 'Не найдено', 'custom-post-type-ui' ),
            'not_found_in_trash' => esc_html__( 'Не найдено в корзине', 'custom-post-type-ui' ),
            'featured_image' => esc_html__( 'Изображение менеджера', 'custom-post-type-ui' ),
            'set_featured_image' => esc_html__( 'Добавить изображение менеджера', 'custom-post-type-ui' ),
            'remove_featured_image' => esc_html__( 'Удалить изображение менеджера', 'custom-post-type-ui' ),
            'use_featured_image' => esc_html__( 'Использовать изображение менеджера', 'custom-post-type-ui' ),
        ],
		'description' => '',
		'public' => true,
		'publicly_queryable' => false,
		'show_ui' => true,
		'show_in_rest' => false,
		'rest_base' => '',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
		'rest_namespace' => 'wp/v2',
		'has_archive' => false,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'delete_with_user' => false,
		'exclude_from_search' => true,
		'capability_type' => 'post',
		'map_meta_cap' => true,
		'hierarchical' => false,
		'can_export' => true,
		'rewrite' => [ 'slug' => 'menegeri', 'with_front' => false ],
		'query_var' => true,
		'menu_icon' => 'dashicons-businessman',
		'supports' => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
		'show_in_graphql' => false,
	],

    'teacher' => [
        'label' => esc_html__( 'Преподаватели', 'custom-post-type-ui' ),
        'labels' => [
            'name' => esc_html__( 'Преподаватели', 'custom-post-type-ui' ),
            'singular_name' => esc_html__( 'Преподаватель', 'custom-post-type-ui' ),
            'menu_name' => esc_html__( 'Преподаватели', 'custom-post-type-ui' ),
            'all_items' => esc_html__( 'Все преподаватели', 'custom-post-type-ui' ),
            'add_new' => esc_html__( 'Добавить нового', 'custom-post-type-ui' ),
            'add_new_item' => esc_html__( 'Добавить нового преподавателя', 'custom-post-type-ui' ),
            'edit_item' => esc_html__( 'Редактировать преподавателя', 'custom-post-type-ui' ),
            'new_item' => esc_html__( 'Новый преподаватель', 'custom-post-type-ui' ),
            'view_item' => esc_html__( 'Посмотреть преподавателя', 'custom-post-type-ui' ),
            'search_items' => esc_html__( 'Найти преподавателя', 'custom-post-type-ui' ),
            'not_found' => esc_html__( 'Преподаватель не найден', 'custom-post-type-ui' ),
            'not_found_in_trash' => esc_html__( 'В корзине преподаватель не найден', 'custom-post-type-ui' ),
        ],
        'description' => '',
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_rest' => false,
        'rest_base' => '',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'rest_namespace' => 'wp/v2',
        'has_archive' => false,
        'show_in_menu' => true,
        'show_in_nav_menus' => true,
        'delete_with_user' => false,
        'exclude_from_search' => false,
        'capability_type' => 'post',
        'map_meta_cap' => true,
        'hierarchical' => false,
        'can_export' => true,
        'rewrite' => [ 'slug' => 'prepodavateli', 'with_front' => false ],
        'query_var' => true,
        'menu_icon' => 'dashicons-admin-users',
        'supports' => [ 'title', 'editor', 'thumbnail', 'excerpt', 'page-attributes' ],
        'show_in_graphql' => false,
    ],

    'promo' => [
		'label' => esc_html__( 'Акции', 'custom-post-type-ui' ),
		'labels' => [
            'name' => esc_html__( 'Акции', 'custom-post-type-ui' ),
            'singular_name' => esc_html__( 'Акция', 'custom-post-type-ui' ),
            'menu_name' => esc_html__( 'Акции и скидки', 'custom-post-type-ui' ),
            'all_items' => esc_html__( 'Все акции и скидки', 'custom-post-type-ui' ),
            'add_new' => esc_html__( 'Добавить новую', 'custom-post-type-ui' ),
            'add_new_item' => esc_html__( 'Добавить новую', 'custom-post-type-ui' ),
            'edit_item' => esc_html__( 'Редактировать', 'custom-post-type-ui' ),
            'new_item' => esc_html__( 'Новая', 'custom-post-type-ui' ),
            'view_item' => esc_html__( 'Посмотреть', 'custom-post-type-ui' ),
            'search_items' => esc_html__( 'Поиск', 'custom-post-type-ui' ),
            'not_found' => esc_html__( 'Не найдено', 'custom-post-type-ui' ),
            'not_found_in_trash' => esc_html__( 'Не найдено', 'custom-post-type-ui' ),
        ],
		'description' => '',
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_rest' => false,
		'rest_base' => '',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
		'rest_namespace' => 'wp/v2',
		'has_archive' => false,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'delete_with_user' => false,
		'exclude_from_search' => false,
		'capability_type' => 'post',
		'map_meta_cap' => true,
		'hierarchical' => false,
		'can_export' => true,
		'rewrite' => [ 'slug' => 'promo', 'with_front' => false ],
		'query_var' => true,
		'menu_icon' => 'dashicons-megaphone',
		'supports' => [ 'title', 'editor', 'thumbnail', 'page-attributes', 'post-formats' ],
		'show_in_graphql' => false,
	],

    'report' => [
		'label' => esc_html__( 'Отчеты', 'custom-post-type-ui' ),
		'labels' => [
            'name' => esc_html__( 'Отчеты', 'custom-post-type-ui' ),
            'singular_name' => esc_html__( 'Отчет', 'custom-post-type-ui' ),
        ],
		'description' => '',
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_rest' => false,
		'rest_base' => '',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
		'rest_namespace' => 'wp/v2',
		'has_archive' => false,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'delete_with_user' => false,
		'exclude_from_search' => false,
		'capability_type' => 'post',
		'map_meta_cap' => true,
		'hierarchical' => false,
		'can_export' => true,
		'rewrite' => [ 'slug' => 'progress-studentov', 'with_front' => false ],
		'query_var' => true,
		'menu_icon' => 'dashicons-id-alt',
		'supports' => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
		'show_in_graphql' => false,
	],

    'testimonial' => [
		'label' => esc_html__( 'Отзывы', 'custom-post-type-ui' ),
		'labels' => [
            'name' => esc_html__( 'Отзывы', 'custom-post-type-ui' ),
            'singular_name' => esc_html__( 'Отзыв', 'custom-post-type-ui' ),
            'menu_name' => esc_html__( 'Отзывы', 'custom-post-type-ui' ),
            'all_items' => esc_html__( 'Все отзывы', 'custom-post-type-ui' ),
            'add_new' => esc_html__( 'Добавить новый', 'custom-post-type-ui' ),
            'add_new_item' => esc_html__( 'Добавить новый отзыв', 'custom-post-type-ui' ),
            'edit_item' => esc_html__( 'Редактировать отзыв', 'custom-post-type-ui' ),
            'new_item' => esc_html__( 'Новый отзыв', 'custom-post-type-ui' ),
            'view_item' => esc_html__( 'Посмотреть отзыв', 'custom-post-type-ui' ),
            'search_items' => esc_html__( 'Найти отзыв', 'custom-post-type-ui' ),
            'not_found' => esc_html__( 'Не надено', 'custom-post-type-ui' ),
            'not_found_in_trash' => esc_html__( 'В корзине отзывов не найдено', 'custom-post-type-ui' ),
        ],
		'description' => '',
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_rest' => false,
		'rest_base' => '',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
		'rest_namespace' => 'wp/v2',
		'has_archive' => false,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'delete_with_user' => false,
		'exclude_from_search' => false,
		'capability_type' => 'post',
		'map_meta_cap' => true,
		'hierarchical' => false,
		'can_export' => true,
		'rewrite' => [ 'slug' => 'otzivi', 'with_front' => false ],
		'query_var' => true,
		'menu_icon' => 'dashicons-format-quote',
		'supports' => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
		'show_in_graphql' => false,
	]
];