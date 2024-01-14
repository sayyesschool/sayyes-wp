<?php

/*
 * Template Name: Главная страница
 */

$context = Timber::context();
$context['page'] = Timber::get_post();
$context['newsletter'] = Timber::get_sidebar('newsletter.php');
$context['course_links'] = [
	'adults' => Timber::get_post(107),
	'children' => Timber::get_post(109),
	'club' => Timber::get_post(111),
	'trial' => Timber::get_post(113)
];
$context['videos'] = [
	[
		'id' => 'ahmetshin',
		'name' => 'Вадима Ахметшина',
		'text' => 'SAY YES! - это уютная мансарда, веселые уроки и преподаватели, которые точно развяжут ваш язык!'
	],
	[
		'id' => 'donskih',
		'name' => 'Юлии Донских',
		'text' => 'Я влюбилась в школу SAY YES! с самого первого занятия!'
	],
	[
		'id' => 'mamtsis',
		'name' => 'Дарьи Мамцис',
		'text' => 'Больше всего меня здесь зацепила методика, которая подразумевает непрерывное общение на английском!'
	],
	[
		'id' => 'suhin',
		'name' => 'Антона Сухина',
		'text' => 'В SAY YES! царит домашняя и раскрепощенная атмосфера, здесь вы обязательно заговорите!'
	]
];
$context['partners'] = [
	[
		'name' => '1Step-Ahead',
		'image' => '1stepahead.png',
		'url' => ''
	],
	[
		'name' => 'Cambridge University Press',
		'image' => 'cambridge.png',
		'url' => ''
	],
	[
		'name' => 'Dunkin\' Donuts',
		'image' => 'dunkin.png',
		'url' => ''
	],
	[
		'name' => 'Центр Терапии Боли',
		'image' => 'farmateb.png',
		'url' => ''
	],
	[
		'name' => 'Головоломка',
		'image' => 'golovolomka.png',
		'url' => ''
	],
	[
		'name' => 'Московский Индустриальный Банк',
		'image' => 'minb.png',
		'url' => ''
	],
	[
		'name' => 'OnAirMedia',
		'image' => 'onairmedia.png',
		'url' => ''
	],
	[
		'name' => 'Subway',
		'image' => 'subway.png',
		'url' => ''
	]
];

Timber::render('pages/home.twig', $context);