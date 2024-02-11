document.querySelector('.whatsapp-button').addEventListener('click', () => {
    ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'WA');
    gtag('event', 'click', { event_category: 'WA' });
    fbq('track', 'InitiateCheckout');

    return true;
});

document.querySelector('.ml-subscribe-form form').addEventListener('submit', () => {
    ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'subscribe');
    gtag('event', 'click', { event_category: 'subscribe' });

    return true;
});