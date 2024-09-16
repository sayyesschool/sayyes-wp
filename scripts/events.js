import { errorModal, successModal } from './components';

document.querySelector('.whatsapp-button')?.addEventListener('click', () => {
    ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'WA');

    return true;
});

window.addEventListener('request.sent', () => {
    successModal.open();
});

window.addEventListener('request.error', event => {
    const error = event.detail;

    errorModal.setTitle('Не удалось отправить заявку');
    errorModal.setDescription(error.message);
    errorModal.open();
});

window.addEventListener('marketing.lead', () => {
    // fbq('track', 'Lead');
});