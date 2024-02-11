import Modal, { EmbedModal, VideoModal } from '../components/modal';

Modal.init();

const requestModal = new Modal('#request-modal');
const callbackModal = new Modal('#callback-modal');
// const successModal = new Modal('.success-modal', '.success-btn');
const embedModal = new EmbedModal('#embed-modal');
const videoModal = new VideoModal('#video-modal');

window.ui = window.ui || {};

window.ui.Modal = Modal;
window.ui.requestModal = requestModal;
window.ui.callbackModal = callbackModal;
window.ui.embedModal = embedModal;
window.ui.videoModal = videoModal;