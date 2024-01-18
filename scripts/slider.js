export const slider = () => {
	const swiper = new Swiper('.swiper', {
		spaceBetween: 150,
		navigation: {
			nextEl: '.slider__right-arrow',
			prevEl: '.slider__left-arrow',
		},
		pagination: {
			el: '.slider__pagination',
		},
	});

	const swiperOrganizations = new Swiper('.swiper-organizations', {
		enabled: false,
		spaceBetween: 15,
		width: 795,
		breakpoints: {
			769: {
				enabled: true,
				spaceBetween: 150,
				width: null,
				navigation: {
					nextEl: '.slider__right-arrow',
					prevEl: '.slider__left-arrow',
				},
				pagination: {
					el: '.slider__pagination',
				},
			},
		},
	});

	const swiperReviews = new Swiper('.swiper-reviews', {
		enabled: false,
		spaceBetween: 15,
		width: 1080,
		breakpoints: {
			769: {
				enabled: true,
				spaceBetween: 150,
				width: null,
				navigation: {
					nextEl: '.slider__right-arrow',
					prevEl: '.slider__left-arrow',
				},
				pagination: {
					el: '.slider__pagination',
				},
			},
		},
	});

	const swiperMeetings = new Swiper('.swiper-meetings', {
		enabled: false,
		spaceBetween: 15,
		width: 900,
		breakpoints: {
			1025: {
				enabled: true,
				spaceBetween: 150,
				width: null,
				navigation: {
					nextEl: '.slider__right-arrow',
					prevEl: '.slider__left-arrow',
				},
				pagination: {
					el: '.slider__pagination',
				},
			},
		},
	});

	const swiperFeedback = new Swiper('.swiper-feedback', {
		enabled: false,
		spaceBetween: 15,
		width: null,
		navigation: {
			nextEl: '.slider__right-arrow',
			prevEl: '.slider__left-arrow',
		},
		pagination: {
			el: '.slider__pagination',
		},
		breakpoints: {
			769: {
				enabled: true,
				width: null,
			},
			540: {
				width: 895,
			},
			480: {
				width: 815,
			},
			360: {
				width: 595,
			},
			320: {
				width: 595,
			},
		},
	});

	const swiperCourseFeedback = new Swiper('.swiper-course-feedback', {
		enabled: false,
		spaceBetween: 15,
		width: null,
		navigation: {
			nextEl: '.slider__right-arrow',
			prevEl: '.slider__left-arrow',
		},
		pagination: {
			el: '.slider__pagination',
		},
		breakpoints: {
			801: {
				enabled: true,
				width: null,
			},
			700: {
				width: 614,
			},
			600: {
				width: 514,
			},
			540: {
				width: 450,
			},
			320: {
				width: null,
			},
		},
	});

	const swiperPersonalApproach = new Swiper('.swiper-personal-approach', {
		enabled: false,
		spaceBetween: 15,
		width: null,
		navigation: {
			nextEl: '.slider__right-arrow',
			prevEl: '.slider__left-arrow',
		},
		pagination: {
			el: '.slider__pagination',
		},
		breakpoints: {
			769: {
				enabled: true,
				width: null,
			},
			700: {
				width: 600,
			},
			600: {
				width: 500,
			},
			540: {
				width: 440,
			},
			400: {
				width: 300,
			},
			360: {
				width: 260,
			},
			320: {
				width: null,
			},
		},
	});

	const swiperResultChildren = new Swiper('.swiper-result-children', {
		breakpoints: {
			769: {
				slidesPerView: 2,
				enabled: true,
				spaceBetween: 20,
				width: null,
				navigation: {
					nextEl: '.slider__right-arrow',
					prevEl: '.slider__left-arrow',
				},
				pagination: {
					el: '.slider__pagination',
				},
			},
			400: {
				width: 327,
				enabled: false,
				slidesPerView: 1,
				spaceBetween: 15,
			},
			320: {
				width: 290,
				enabled: false,
				slidesPerView: 1,
				spaceBetween: 15,
			},
		},
	});
};