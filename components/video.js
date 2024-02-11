import Component from './component';

export default class Video extends Component {
    static name = 'video';

    static classes = {
        root: this.name,
        playButton: `${this.name}__btn`,
        playing: `${this.name}--playing`
    };

    static init() {
        document.querySelectorAll(`.${this.classes.root}`).forEach(element => {
            if (element.classList.contains('autoplay'))
                new AutoVideo(element);
            else if (element.classList.contains('hover'))
                new HoverVideo(element);
        });
    }

    playing = false;
    ended = false;

    constructor(element) {
        super(element);

        this.video = this.getElement('video');
        this.playButton = this.getElement(`.${Video.classes.playButton}`);

        this.video?.addEventListener('ended', this.stop.bind(this));
        this.playButton?.addEventListener('click', this.toggle.bind(this));
    }

    play() {
        this.playing = true;
        this.video.play();
        this.video.classList.toggle(Video.classes.playing);
    }

    pause() {
        this.playing = false;
        this.video.pause();
        this.video.classList.toggle(Video.classes.playing);
    }

    stop() {
        this.playing = false;
        this.video.pause();
        this.video.currentTime = 0;
        this.video.classList.toggle(Video.classes.playing);
    }

    toggle() {
        if (this.playing) {
            this.pause();
        } else {
            this.play();
        }
    }
}

export class AutoplayVideo extends Video {
    constructor(element) {
        super(element);

        this.video.autoplay = true;
        this.video.muted = true;

        this.video.addEventListener('ended', this.play.bind(this));

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting)
                    this.play();
                else
                    this.pause();
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        });

        observer.observe(element);
    }
}

export class HoverVideo extends Video {
    constructor(element) {
        super(element);

        this.element.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
        this.element.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    }

    handleMouseEnter() {
        this.play();
    }

    handleMouseLeave() {
        this.pause();
    }
}