import { callbackModal, errorModal, requestModal, successModal } from './components';

document.querySelector('.whatsapp-button')?.addEventListener('click', () => {
    ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'WA');

    return true;
});

window.addEventListener('callback-form.sent', () => {
    callbackModal.close();
    successModal.setDescription('Мы свяжемся с вами и ответим на вопросы в ближайшее время.');
    successModal.open();
});

window.addEventListener('callback-form.error', event => {
    const error = event.detail;

    errorModal.setTitle('Не удалось отправить заявку');
    errorModal.setDescription(error.message);
    errorModal.open();
});

window.addEventListener('request-form.sent', () => {
    requestModal.close();
    successModal.setDescription('Мы свяжемся с вами, запишем на урок, ответим на вопросы и расскажем о курсах.');
    successModal.open();
});

window.addEventListener('request-form.error', event => {
    const error = event.detail;

    errorModal.setTitle('Не удалось отправить заявку');
    errorModal.setDescription(error.message);
    errorModal.open();
});

window.addEventListener('marketing.lead', () => {
    // fbq('track', 'Lead');
});

window.addEventListener('test.submit', () => {
    successModal.setTitle('Результаты были отправлены на указанный Вами почтовый адрес.');
    successModal.setDescription('P.S. Если письма нет во Входящих, проверьте Спам!');
    successModal.open();

    successModal.on('close', () => {
        window.location.assign('/');
    });
});

window.addEventListener('test.error', event => {
    const error = event.detail;

    errorModal.setTitle('Не удалось отправить результаты теста');
    errorModal.setDescription(error.message);
    errorModal.open();
});