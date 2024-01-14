<?php


use Timber\Site;
use Twig\Extension\StringLoaderExtension;
use Twig\Extra\Html\HtmlExtension;

include 'post-types.php';
include 'taxonomies.php';

class SayYesSite extends Site {
    public $version = '2.3.0';
    public $yandex_metrika_counter = 29661505;
    public $google_analytics_id = 'UA-47133492-2';
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
		add_filter('timber/twig', [$this, 'add_to_twig']);
        
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
            'main_nav' => 'Главная область навигации',
            'side_nav' => 'Боковая область навигации',
            'footer_nav' => 'Нижняя область навигации',
            'mobile_nav' => 'Мобильная область навигации'
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
        $json = file_get_contents(__DIR__ . '/data.json');
        $data = json_decode($json, true);

        $context['site'] = $this;
        $context['data'] = $data;
        $context['YANDEX_METRIKA_COUNTER'] = $this->yandex_metrika_counter;
        $context['GA_MEASUREMENT_ID'] = $this->google_analytics_id;
        $context['FACEBOOK_PIXEL_IDS'] = $this->facebook_pixel_ids;
        $context['top_menu'] = Timber::get_menu('top_nav');
		$context['main_menu'] = Timber::get_menu('main_nav');
        $context['side_menu'] = Timber::get_menu('side_nav');
		$context['mobile_menu'] = Timber::get_menu('mobile_nav');
        $context['footer_menu'] = Timber::get_menu('footer_nav');
        $context['sidebar_reports'] = Timber::get_sidebar('sidebar-reports.php');
        
		return $context;
	}

	function add_to_twig($twig) {
        $twig->addExtension(new HtmlExtension());
        $twig->addExtension(new StringLoaderExtension());
        
		return $twig;
	}
}