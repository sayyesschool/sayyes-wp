import Component from './component';

export default class Modal extends Component {
    static name = 'modal';

    static classes = {
        root: this.name,
        surface: `${this.name}__surface`,
        body: `${this.name}__body`,
        close: `${this.name}__close`
    };

    static init() {
        const modals = super.init();

        modals.forEach(modal => {
            const id = modal.element.id;

            if (id) {
                document.querySelectorAll(`[data-modal-trigger="${id}"`).forEach(trigger => {
                    trigger.addEventListener('click', modal.open.bind(modal));
                });
            }
        });
    }

    constructor(element) {
        super(element);

        this.closeButton = this.getElement('.modal__close');

        this.element.addEventListener('click', this.handleRootClick.bind(this));
        this.closeButton.addEventListener('click', this.close.bind(this));
    }

    handleRootClick(event) {
        if (event.target === this.element) {
            this.close();
        }
    }

    open() {
        this.element.classList.add('active');
        this.emit('open');
        toggleBodyScroll(true);
    }

    close() {
        this.element.classList.remove('active');
        this.emit('close');
        setTimeout(() => {
            toggleBodyScroll(false);
        }, 300);
    }
}

export class EmbedModal extends Modal {
    constructor(element) {
        super(element);

        this.iframe = this.element.querySelector('iframe');
    }

    open(event) {
        const { embedUrl, vertical } = event.target.dataset;

        console.log(event.target.dataset);

        if (!embedUrl) return;

        super.open();

        this.iframe.src = embedUrl;

        if (vertical)
            this.iframe.classList.add('video-embed--vertical');
    }

    close() {
        super.close();
        this.iframe.src = '';
        this.iframe.classList.remove('video-embed--vertical');
    }
}

export class VideoModal extends Modal {
    constructor(props) {
        super(props);

        this.video = this.element.querySelector('video');
    }

    open(event) {
        const { videoUrl, vertical } = event.target.dataset;
        const video = this.video;

        if (!videoUrl) return;

        super.open();

        video.src = videoUrl;

        video.addEventListener('loadeddata', () => {
            if (video.readyState >= 2)
                video.play();
        });

        if (vertical)
            this.video.classList.add('video--vertical');
    }

    close() {
        super.close();
        this.video.pause();
        this.video.src = '';
    }
}

function calcScrollWidth() {
    const div = document.createElement('div');
    div.style.cssText = `
		width: 50px;
		height: 50px;
		overflow-y: scroll;
		visibility: hidden;
	`.trim();

    document.body.appendChild(div);

    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

function toggleBodyScroll(enable) {
    const header = document.querySelector('.header');
    const activeModals = document.querySelectorAll('.modal.active');
    const scrollWidth = calcScrollWidth();

    if (enable || activeModals.length) {
        document.body.style.overflow = 'hidden';
        header.style.paddingRight = `${scrollWidth}px`;
        document.body.style.paddingRight = `${scrollWidth}px`;
    } else {
        document.body.style.overflow = '';
        header.style.paddingRight = '0px';
        document.body.style.paddingRight = '0px';
    }
}