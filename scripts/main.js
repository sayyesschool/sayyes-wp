import {
    Accordion,
    Header,
    Modal,
    RequestModal,
    Nav,
    CallbackForm,
    RequestForm,
    Select,
    Tabs,
    Video
} from './components';
import './events';
import './scroll';
import './share';
import './tel-input';

Accordion.init();
Header.init();
Modal.init();
Nav.init();
CallbackForm.init();
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
    callbackModal,
    errorModal,
    requestModal,
    successModal,
    // videoModal
});