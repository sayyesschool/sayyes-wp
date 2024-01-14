export default class Video {
    constructor($element) {
        this.playing = false;
        this.ended = false;
        this.video = $element[0];
        this.playButton = $element.parent().find('.play-button');

        var video = this;

        this.video.onended = function() {
            video.stop();
        };

        this.playButton.on('click', function() {
            video.toggle();
        });
    }

    play() {
        this.video.play();
        this.playing = true;

        $(this.video).toggleClass('playing');
        this.playButton.toggleClass('fa-play').toggleClass('fa-pause');
    }

    pause() {
        this.video.pause();
        this.playing = false;

        $(this.video).toggleClass('playing');
        this.playButton.toggleClass('fa-play').toggleClass('fa-pause');
    }

    stop() {
        this.video.pause();
        this.playing = false;
        this.video.currentTime = 0;

        $(this.video).toggleClass('playing');
        this.playButton.toggleClass('fa-play').toggleClass('fa-pause');
    }

    toggle() {
        if (this.playing) {
            this.pause();
        } else {
            this.play();
        }
    }
}