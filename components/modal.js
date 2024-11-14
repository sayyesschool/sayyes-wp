import Component from './component';

const MODAL_TIMEOUT = 300;

export default class Modal extends Component {
    static name = 'modal';

    static classes = {
        root: this.name,
        surface: `${this.name}__surface`,
        body: `${this.name}__body`,
        header: `${this.name}__header`,
        content: `${this.name}__content`,
        title: `${this.name}__title`,
        description: `${this.name}__description`,
        close: `${this.name}__close`,
        open: `${this.name}--open`
    };

    static init() {
        document.querySelectorAll(`.${this.classes.root}`).forEach(element => {
            const id = element.id;
            const { component } = element.dataset;

            let modal;

            if (component === 'ImageModal')
                modal = new ImageModal(element);
            else if (component === 'VideoModal')
                modal = new VideoModal(element);
            else if (component === 'RequestModal')
                modal = new RequestModal(element);
            else
                modal = new Modal(element);

            if (id) {
                document.querySelectorAll(`[data-modal-trigger="${id}"]`).forEach(trigger => {
                    const options = trigger.dataset.modalOptions &&
                        trigger.dataset.modalOptions.split(',')
                            .map(item => item.trim().split(':'))
                            .reduce((acc, [key, value]) => {
                                acc[key] = value;
                                return acc;
                            }, {});

                    trigger.addEventListener('click', (event) => {
                        modal.open(event, options);
                    });
                });
            }
        });
    }

    constructor(element) {
        super(element);

        this.body = this.getElement(`.${Modal.classes.body}`);
        this.header = this.getElement(`.${Modal.classes.header}`);
        this.content = this.getElement(`.${Modal.classes.content}`);
        this.title = this.getElement(`.${Modal.classes.title}`);
        this.description = this.getElement(`.${Modal.classes.description}`);
        this.closeButton = this.getElement(`.${Modal.classes.close}`);

        this.element.addEventListener('click', this.handleRootClick.bind(this));
        this.closeButton.addEventListener('click', this.close.bind(this));
    }

    handleRootClick(event) {
        if (event.target === this.element) {
            this.close(event);
        }
    }

    setTitle(content) {
        this.title.textContent = content;
    }

    setDescription(content) {
        this.description.textContent = content;
    }

    setContent(content) {
        this.content.innerHTML = content;
    }

    open() {
        this.element.classList.add(Modal.classes.open);
        this.emit('open');
        toggleBodyScroll(true);
        setTimeout(() => {
            this.emit('opened');
        }, MODAL_TIMEOUT);
    }

    close() {
        this.element.classList.remove(Modal.classes.open);
        this.emit('close');
        setTimeout(() => {
            toggleBodyScroll(false);
            this.emit('closed');
        }, MODAL_TIMEOUT);
    }
}

export class ImageModal extends Modal {
    open(event) {
        if (event.target.src) {
            const image = document.createElement('img');
            image.src = event.target.src;
            image.className = 'image';
            this.image = image;
            this.body.appendChild(image);
        }

        super.open(event);
    }

    close(event) {
        super.close(event);
        this.once('closed', () => {
            this.body.removeChild(this.image);
        });
    }
}


export class RequestModal extends Modal {
    open(event, options) {
        super.open(event, options);

        if (options?.tab) {
            const tab = this.getElement(`button[value="${options.tab}"]`);
            tab?.click();
        }
    }
}

export class VideoModal extends Modal {
    constructor(props) {
        super(props);

        this.video = document.createElement('video');
        this.video.className = 'video';

        this.iframe = document.createElement('iframe');
        this.iframe.className = 'video';
        this.iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        this.iframe.allowFullscreen = true;
    }

    open(event, options) {
        const { embedUrl, videoUrl, vertical } = event.target.dataset;

        super.open(event, options);

        if (videoUrl) {
            const video = this.video;

            video.src = videoUrl;
            video.addEventListener('loadeddata', () => {
                if (video.readyState >= 2)
                    video.play();
            });

            this.media = video;
        } else if (embedUrl) {
            this.iframe.src = embedUrl;
            this.media = this.iframe;
        }

        if (vertical)
            this.media.classList.add('video--vertical');

        this.body.appendChild(this.media);
    }

    close(event) {
        super.close(event);

        if (this.media instanceof HTMLVideoElement)
            this.media.pause();
        this.media.src = '';
        this.media.classList.remove('video--vertical');
        this.body.removeChild(this.media);
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