import Accordion from '../components/accordion';
import Header from '../components/header';
import Modal, { RequestModal } from '../components/modal';
import Nav from '../components/nav';
import RequestForm from '../components/request-form';
import Select from '../components/select';
import Slider from '../components/slider';
import Tabs from '../components/tabs';
import Video from '../components/video';

Accordion.init();
Header.init();
Modal.init();
Nav.init();
RequestForm.init();
Select.init();
Tabs.init();
Video.init();

export const callbackModal = new Modal('#callback-modal');
export const requestModal = new RequestModal('#request-modal');
export const errorModal = new Modal('#error-modal');
export const successModal = new Modal('#success-modal');
// const videoModal = new VideoModal('#video-modal');

window.ui = Object.assign(window.ui || {}, {
    Modal,
    Slider,
    callbackModal,
    errorModal,
    requestModal,
    successModal,
    // videoModal
});