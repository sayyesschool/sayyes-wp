import { errorModal, successModal } from './modals';

window.addEventListener('request.sent', () => {
    successModal.open();
});

window.addEventListener('request.error', event => {
    const error = event.detail;

    errorModal.setTitle('Не удалось отправить заявку');
    errorModal.setDescription(error.message);
    errorModal.open();
});