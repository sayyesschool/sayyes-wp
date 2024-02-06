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

function toggleScroll(enable) {
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

class Modal {
	constructor(modalSelector, triggerSelector) {
		this.element = document.querySelector(modalSelector);
		this.triggers = document.querySelectorAll(triggerSelector);
		this.content = this.element.querySelector('.modal__content');
		this.closeButton = this.element.querySelector('.modal__close');

		const openModal = this.open.bind(this);
		const closeModal = this.close.bind(this);

		this.triggers.forEach(trigger => {
			trigger.addEventListener('click', openModal);
		});

		this.closeButton.addEventListener('click', closeModal);

		this.element.addEventListener('click', event => {
			if (event.target === this.element) {
				closeModal();
			}
		});
	}

	open() {
		this.element.classList.add('active');
		toggleScroll(true);
	}

	close() {
		this.element.classList.remove('active');
		setTimeout(() => {
			toggleScroll(false);
		}, 300);
	}
}

class TeacherModal extends Modal {
	constructor(modalSelector, triggerSelector) {
		super(modalSelector, triggerSelector);

		this.teacherBlocks = modal.querySelectorAll('.teacher-block');
	}

	open(event) {
		super.open();

		const id = +event.target.dataset.id;

		this.teacherBlocks.forEach((block, index) => {
			block.style.display = index === id ? 'flex' : 'none';
		});
	}
}

class VideoModal extends Modal {
	constructor(modalSelector, triggersSelector) {
		super(modalSelector, triggersSelector);

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

class EmbedModal extends Modal {
	constructor(modalSelector, triggersSelector) {
		super(modalSelector, triggersSelector);

		this.iframe = this.element.querySelector('iframe');
		console.log('EmbedModal', this);
	}

	open(event) {
		const { embedUrl, vertical } = event.target.dataset;

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

new Modal('.feedback-modal', '.feedback-btn');
// new Modal('.callback-modal', '.callback-btn');
// new Modal('.success-modal', '.success-btn');
// new TeacherModal('.teacher-modal', '.teacher-btn');
new VideoModal('.video-modal', 'button[data-video-url]');
new EmbedModal('.embed-modal', 'button[data-embed-url]');