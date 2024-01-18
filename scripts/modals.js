export const modals = () => {
	const calcScroll = () => {
		const div = document.createElement('div');
		div.style.cssText = `
      width: 50px;
      height: 50px;
      overflow-y: scroll;
      visibility: hidden;
    `;

		document.body.appendChild(div);

		const scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	};

	const toggleScroll = (enable) => {
		const header = document.querySelector('.header');
		const scroll = calcScroll();
		const activeModals = document.querySelectorAll('.overlay.active');

		if (enable || activeModals.length) {
			document.body.style.overflow = 'hidden';
			header.style.paddingRight = `${scroll}px`;
			document.body.style.paddingRight = `${scroll}px`;
		} else {
			document.body.style.overflow = '';
			header.style.paddingRight = '0px';
			document.body.style.paddingRight = '0px';
		}
	};

	const closeModal = (modal) => {
		setTimeout(() => {
			toggleScroll(false);
		}, 300);

		modal.classList.remove('active');
	};

	const openModal = (modal) => {
		toggleScroll(true);

		modal.classList.add('active');
	};

	const videoModal = (triggerSelector, modalSelector) => {
		const triggers = document.querySelectorAll(triggerSelector);
		const modal = document.querySelector(modalSelector);
		const close = modal.querySelector('.overlay__close');
		const youtubeVideo = modal.querySelector('.youtube-video');
		const iframe = youtubeVideo.querySelector('#iframe-youtube');

		if (!(triggers.length && modal)) return;

		triggers.forEach((trigger) => {
			const openVideo = () => {
				iframe.src = trigger.dataset.url;

				trigger.dataset.vertical
					? youtubeVideo.classList.add('youtube-video--vertical')
					: youtubeVideo.classList.remove('youtube-video--vertical');

				openModal(modal);
			};

			trigger.addEventListener('click', openVideo);
		});

		const closeVideo = () => {
			iframe.src = '';
			closeModal(modal);
		};

		close.addEventListener('click', closeVideo);

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeVideo();
			}
		});
	};

	const teacherModal = (triggerSelector, modalSelector) => {
		const triggers = document.querySelectorAll(triggerSelector);
		const modal = document.querySelector(modalSelector);
		const close = modal.querySelector('.overlay__close');
		const blocks = modal.querySelectorAll('.teacher-block');

		if (!(triggers.length && modal)) return;

		triggers.forEach((trigger) => {
			const openTeacher = () => {
				const id = +trigger.dataset.id;

				blocks.forEach((block, index) => {
					block.style.display = index === id ? 'flex' : 'none';
				});

				openModal(modal);
			};

			trigger.addEventListener('click', openTeacher);
		});

		const closeTeacher = () => {
			closeModal(modal);
		};

		close.addEventListener('click', closeTeacher);

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeTeacher();
			}
		});
	};

	const simpleModal = (triggerSelector, modalSelector) => {
		const triggers = document.querySelectorAll(triggerSelector);
		const modal = document.querySelector(modalSelector);
		const close = modal.querySelector('.overlay__close');

		triggers.forEach((trigger) => {
			const openModal1 = () => {
				openModal(modal);
			};

			trigger.addEventListener('click', openModal1);
		});

		const closeModal1 = () => {
			closeModal(modal);
		};

		close.addEventListener('click', closeModal1);

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal1();
			}
		});
	};

	videoModal('.video-btn', '.overlay--video');
	teacherModal('.teacher-btn', '.overlay--teacher');
	simpleModal('.feedback-btn', '.overlay--feedback');
	simpleModal('.callback-btn', '.overlay--callback');
	simpleModal('.successful-btn', '.overlay--successful');
};