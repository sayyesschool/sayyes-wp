<?php

use Timber\URLHelper;

function format_phone_number($string) {
    return str_replace(['+', '-', ' '], [''], $string);
}

function is_url($string) {
    return URLHelper::is_url($string);
}

function is_link_external($link) {
    return URLHelper::is_external($link);
}

function remove_url_component($haystack, $needle) {
    return URLHelper::remove_url_component($haystack, $needle);
}