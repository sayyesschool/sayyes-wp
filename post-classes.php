<?php

class Post extends Timber\Post {
    public function name() {
        return $this->meta('name');
    }

    public function description() {
        return $this->excerpt(['read_more' => '']);
    }

    public function testimonials_by_group() {
        $testimonials = $this->meta('testimonials');

        if (!$testimonials) return [];

        $testimonial_groups = array_reduce($testimonials ? $testimonials : [], function($result, $testimonial_id) {
            $testimonial = Timber::get_post($testimonial_id);
            $terms = $testimonial->terms('testimonial_group');

            foreach ($terms as $term) {
                array_push($result[$term->name]['testimonials'], $testimonial);
            }

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

        return array_filter($testimonial_groups, function($group) {
            return count($group['testimonials']) > 0;
        });
    }
}

class Course extends Post {
    public function type() {
        return $this->has_term('children') ? 'children' : 'adults';
    }
}

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