export function setupEvents({ callbackModal, errorModal, requestModal, successModal }) {
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

    window.addEventListener('test.open', () => {
        window?.ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'test.open');
    });

    window.addEventListener('test.start', () => {
        window?.ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'test.start');
    });

    window.addEventListener('test.end', () => {
        window?.ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'test.end');
    });

    window.addEventListener('test.submit', () => {
        window?.ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'test.submit');

        successModal.setTitle('Результаты были отправлены на указанный Вами почтовый адрес.');
        successModal.setDescription('Если письма нет во Входящих, проверьте Спам!');
        successModal.setContent(`
            <div class="flex-column gap-s"><p>И не забудьте подписаться на наш канал в Телеграм, чтобы прокачивать английский регулярно</p>
            <a href="https://t.me/sayyes2english" target="_blank" class="btn btn--black btn--full">Подписаться</a></div>
        `);

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
};