import Modal, { RequestModal, VideoModal } from '../components/modal';

Modal.init();

const requestModal = new RequestModal('#request-modal');
const callbackModal = new Modal('#callback-modal');
// const successModal = new Modal('.success-modal', '.success-btn');
const videoModal = new VideoModal('#video-modal');

window.ui = Object.assign(window.ui || {}, {
    Modal,
    requestModal,
    callbackModal,
    videoModal
});