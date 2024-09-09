import Modal, { RequestModal } from '../components/modal';

Modal.init();

export const callbackModal = new Modal('#callback-modal');
export const requestModal = new RequestModal('#request-modal');
export const errorModal = new Modal('#error-modal');
export const successModal = new Modal('#success-modal');
// const videoModal = new VideoModal('#video-modal');

window.ui = Object.assign(window.ui || {}, {
    Modal,
    callbackModal,
    errorModal,
    requestModal,
    successModal,
    // videoModal
});