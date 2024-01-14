export const modals = () => {
	const calcScroll = () => {
		const div = document.createElement("div");
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

	const bindModal = (triggerSelector, modalSelector) => {
		const trigger = document.querySelector(triggerSelector);
		const modal = document.querySelector(modalSelector);

		if (!(trigger || modal)) return;

		const close = modal.querySelector(".overlay__close");
		const header = document.querySelector(".header");
		const scroll = calcScroll();

		const openModal = () => {
			modal.classList.add("active");
			document.body.style.overflow = "hidden";
			header.style.paddingRight = `${scroll}px`;
			document.body.style.paddingRight = `${scroll}px`;
		};

		const closeModal = () => {
			const youtubeVideo = modal.querySelector("#youtubeVideo");

			if (youtubeVideo) {
				youtubeVideo.src = youtubeVideo.src;
			}

			modal.classList.remove("active");

			setTimeout(() => {
				document.body.style.overflow = "";
				header.style.paddingRight = "0px";
				document.body.style.paddingRight = "0px";
			}, 300);
		};

		trigger.addEventListener("click", openModal);

		close.addEventListener("click", closeModal);

		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				closeModal();
			}
		});
	};

	// header
	bindModal("#feedback", ".overlay--feedback");
	bindModal("#callback", ".overlay--callback");

	//videos
	const videosCount = 22;

	[...Array(videosCount)].forEach((item, index) => {
		const videoId = index + 1;

		bindModal(`#video-${videoId}`, `.overlay--video-${videoId}`);
	});

	// teachers
	const teachersCount = 12;

	[...Array(teachersCount)].forEach((item, index) => {
		const teacherId = index + 1;

		bindModal(`#teacher-${teacherId}`, `.overlay--teacher-${teacherId}`);
	});
};
