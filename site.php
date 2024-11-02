<?php

use Timber\Site;
use Twig\Extension\StringLoaderExtension;
use Twig\Extra\Html\HtmlExtension;

include 'post-classes.php';
include 'post-types.php';
include 'taxonomies.php';
require_once 'constants.php';
require 'utils.php';

class SayYesSite extends Site {
    public $version = '3.0.0-rc.3';

	function __construct() {
        // add_theme_support('html5');
		add_theme_support('menus');
		add_theme_support('post-formats', ['gallery', 'video']);
		add_theme_support('post-thumbnails');
        
		add_action('init', [$this, 'register_post_types']);
		add_action('init', [$this, 'register_taxonomies']);
        add_action('after_setup_theme', [$this, 'register_menus']);
        add_action("rest_api_init", [$this, 'init_rest_api']);
        add_action('widgets_init', [$this, 'init_widgets']);
        add_action('wp_enqueue_scripts', [$this, 'include_styles']);
        add_action('wp_enqueue_scripts', [$this, 'include_scripts']);

        add_filter('timber/context', [$this, 'add_to_context']);
        add_filter('timber/post/classmap', function ($classmap) {
            return array_merge($classmap, [
                'course' => Course::class,
                'format' => Format::class,
                'post' => Post::class,
                'page' => Page::class,
                'teacher' => Teacher::class,
                'report' => Report::class,
            ]);
        });
		add_filter('timber/twig', [$this, 'add_to_twig']);
        add_filter('timber/twig/functions', function ($functions) {
            $functions['format_phone_number'] = [
                'callable' => 'format_phone_number'
            ];

            $functions['is_url'] = [
                'callable' => 'is_url'
            ];

            $functions['is_link_external'] = [
                'callable' => 'is_link_external'
            ];

            $functions['remove_url_component'] = [
                'callable' => 'remove_url_component'
            ];
        
            return $functions;
        });
        
		parent::__construct();
	}

	function register_post_types() {
        global $post_types;

        foreach ($post_types as $name => $args) {
            register_post_type($name, $args);
        }
    }

	function register_taxonomies() {
        global $taxonomies;

        foreach ($taxonomies as $name => $args) {
            register_taxonomy($name, $args[0], $args[1]);
        }
    }
    
    function register_menus() {
        register_nav_menus([
            'header_nav' => 'Верхняя область навигации',
            'footer_nav' => 'Нижняя область навигации'
        ]);
    }
    
    function include_styles() {
        
    }
    
    function include_scripts() {
        //if ( !is_admin() ) { wp_deregister_script('jquery'); }
    }

    function init_rest_api() {
        register_rest_route("options", "/test", [
            "methods" => "GET",
            "callback" => function() {
              return get_fields('options')['questions'];
            },
        ]);
    }
    
    function init_widgets() {
        register_sidebar([
            'id'            => 'blog_sidebar',
            'name'          => 'Меню блога',
            'description'   => '',
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        ]);
    }

	function add_to_context($context) {
        $site_url = $this->link();
        $theme_url = $this->theme->link();

        $contacts = get_fields('options', 'contacts');
        $prices = get_fields('options', 'prices');

        $main_phone = format_phone_number($contacts['phone_numbers']['main']);
        $wa_phone = format_phone_number($contacts['phone_numbers']['whatsapp']);

        $links = [
            'agreement' => $site_url.'/agreement',
            'offer' => $site_url.'/dogovor-oferta',
            'policy' => $site_url.'/politika-konfidentsialnosti',
            'email' => 'mailto:'.$contacts['email'],
            'main_phone' => 'tel:'.$main_phone,
            'wa_phone' => 'https://api.whatsapp.com/send/?phone='.$wa_phone.'&text&type=phone_number&app_absent=0'
        ];
        
        $context['site'] = $this;
		$context['header_nav'] = Timber::get_menu('header_nav');
        $context['footer_nav'] = Timber::get_menu('footer_nav');
        $context['links'] = $links;
        $context['site_data'] = [
            'contacts' => $contacts,
            'prices' => $prices,
            'links' => $links
        ];
        
        $context['COMPANY_NAME'] = COMPANY_NAME;
        $context['COMPANY_AGE'] = COMPANY_AGE;
        $context['JIVOSITE_KEY'] = JIVOSITE_KEY;
        $context['RECAPTCHA_KEY'] = RECAPTCHA_PUBLIC_KEY;
        $context['RECAPTCHA_SCORE'] = RECAPTCHA_SCORE;
        $context['RECAPTCHA_SCORE'] = RECAPTCHA_SCORE;
        $context['RECAPTCHA_URL'] = $theme_url.'/recaptcha.php';
        $context['REQUEST_URL'] = $theme_url.'/request.php';
        $context['SITE_URL'] = $site_url;
        $context['THEME_URL'] = $theme_url;
        $context['TEST_DATA_URL'] = $theme_url.'/test/data/data.json';
        $context['TEST_URL'] = $site_url.'/online-test';
        $context['TEST_SUBMIT_URL'] = $theme_url.'/test.php';
        $context['AGREEMENT_URL'] = $links['agreement'];
        $context['OFFER_URL'] = $links['offer'];
        $context['POLICY_URL'] = $links['policy'];
        $context['YANDEX_METRIKA_COUNTER'] = YANDEX_METRIKA_COUNTER;

		return $context;
	}

	function add_to_twig($twig) {
        $twig->addExtension(new HtmlExtension());
        $twig->addExtension(new StringLoaderExtension());
        
		return $twig;
	}
}