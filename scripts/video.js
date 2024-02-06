class Video {
    constructor(element) {
        this.element = element;
        this.video = element.querySelector('video');
        this.playButton = element.querySelector('.play');
        this.playing = false;
        this.ended = false;

        this.video.onended = () => {
            this.stop();
        };

        this.playButton?.addEventListener('click', () => {
            this.toggle();
        });
    }

    play() {
        this.playing = true;
        this.video.play();
        this.video.classList.toggle('video--playing');
    }

    pause() {
        this.playing = false;
        this.video.pause();
        this.video.classList.toggle('video--playing');
    }

    stop() {
        this.playing = false;
        this.video.pause();
        this.video.currentTime = 0;
        this.video.classList.toggle('video--playing');
    }

    toggle() {
        if (this.playing) {
            this.pause();
        } else {
            this.play();
        }
    }
}

class AutoVideo extends Video {
    constructor(element) {
        super(element);

        this.video.autoplay = true;
        this.video.muted = true;
        this.video.onended = () => {
            this.play();
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
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

class HoverVideo extends Video {
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

document.querySelectorAll('.video--autoplay').forEach(element => {
    new AutoVideo(element);
});

document.querySelectorAll('.video--hover').forEach(element => {
    new HoverVideo(element);
});