$('.whatsapp-button').click(function() {
    ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'WA');
    gtag('event', 'click', { event_category: 'WA' });
    fbq('track', 'InitiateCheckout');

    return true;
});

$('.ml-subscribe-form form').submit(function() {
    ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'subscribe');
    gtag('event', 'click', { event_category: 'subscribe' });

    return true;
});