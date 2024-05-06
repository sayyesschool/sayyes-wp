<?php

use Timber\Site;
use Twig\Extension\StringLoaderExtension;
use Twig\Extra\Html\HtmlExtension;

include 'post-types.php';
include 'taxonomies.php';
require 'utils.php';

class Post extends Timber\Post {
    public function name() {
        return $this->meta('name');
    }

    public function description() {
        return $this->excerpt(['read_more' => '']);
    }
}

class Course extends Post {}
class Format extends Post {}
class Page extends Post {}
class Report extends Post {}
class Teacher extends Post {
    public function name() {
        $name = $this->title;
        return $name;
    }

    public function url() {
        return remove_url_component($this->link, '/'.$this->slug.'/') . '#'.$this->slug;
    }
}

class SayYesSite extends Site {
    public $version = '2.3.0';
    public $yandex_metrika_counter = 29661505;
    public $google_analytics_id = 'UA-47133492-2';
    public $recaptcha_key = '6LenTzMiAAAAABvM_nwArCX5rtvJQ3TUQS8EsN1q';
    public $facebook_pixel_ids = ['758563291240040', '354901769006910', '1060189581084918'];

	function __construct() {
        // add_theme_support('html5');
		add_theme_support('menus');
		add_theme_support('post-formats', ['gallery', 'video']);
		add_theme_support('post-thumbnails');
        
		add_action('init', [$this, 'register_post_types']);
		add_action('init', [$this, 'register_taxonomies']);
        add_action('after_setup_theme', [$this, 'register_menus']);
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
        $contacts = get_fields('options', 'contacts');
        $prices = get_fields('options', 'prices');

        $main_phone = format_phone_number($contacts['phone_numbers']['main']);
        $wa_phone = format_phone_number($contacts['phone_numbers']['whatsapp']);

        $context['site'] = $this;
        $context['site_data'] = [
            'contacts' => $contacts,
            'prices' => $prices
        ];
        $context['COMPANY_AGE'] = date('Y') - 2013;
        $context['FACEBOOK_PIXEL_IDS'] = $this->facebook_pixel_ids;
        $context['GA_MEASUREMENT_ID'] = $this->google_analytics_id;
        $context['YANDEX_METRIKA_COUNTER'] = $this->yandex_metrika_counter;
        $context['RECAPTCHA_KEY'] = $this->recaptcha_key;
		$context['header_nav'] = Timber::get_menu('header_nav');
        $context['footer_nav'] = Timber::get_menu('footer_nav');
        $context['links'] = [
            'policy' => $this->link().'/politika-konfidentsialnosti',
            'offer' => $this->link().'/dogovor-oferta',
            'email' => 'mailto:'.$contacts['email'],
            'main_phone' => 'tel:'.$main_phone,
            'wa_phone' => 'https://api.whatsapp.com/send/?phone='.$wa_phone.'&text&type=phone_number&app_absent=0'
        ];

		return $context;
	}

	function add_to_twig($twig) {
        $twig->addExtension(new HtmlExtension());
        $twig->addExtension(new StringLoaderExtension());
        
		return $twig;
	}
}