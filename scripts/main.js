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
import { setupEvents } from './events';
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

const callbackModal = new Modal('#callback-modal');
const requestModal = new RequestModal('#request-modal');
const errorModal = new Modal('#error-modal');
const successModal = new Modal('#success-modal');
// const videoModal = new VideoModal('#video-modal');

window.ui = Object.assign(window.ui || {}, {
    callbackModal,
    errorModal,
    requestModal,
    successModal,
    // videoModal
});

setupEvents({ callbackModal, errorModal, requestModal, successModal });