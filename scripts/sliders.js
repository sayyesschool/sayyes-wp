import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

new Swiper('.student-progress-slider', {
	modules: [Navigation, Pagination, Scrollbar],
	spaceBetween: 150,
	navigation: {
		nextEl: '.slider__right-arrow',
		prevEl: '.slider__left-arrow',
	},
	pagination: {
		el: '.slider__pagination',
	}
});

new Swiper('.organizations-slider', {
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

new Swiper('.reviews-slider', {
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

new Swiper('.meetings-slider', {
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

new Swiper('.feedback-slider', {
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

new Swiper('.course-testimonials-slider', {
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

new Swiper('.course-teachers-slider', {
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

new Swiper('.course-progress-slider', {
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