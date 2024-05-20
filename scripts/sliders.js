import Swiper from 'swiper';
import { Grid, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/scss/grid';

const defaultOptions = {
	modules: [Navigation, Pagination, Scrollbar],
	spaceBetween: 15,
	navigation: {
		nextEl: '.slider__right-arrow',
		prevEl: '.slider__left-arrow',
	},
	pagination: {
		el: '.slider__pagination',
	}
};

new Swiper('.student-progress-slider', {
	...defaultOptions,
	spaceBetween: 150
});

new Swiper('.corporate-clients-slider', {
	...defaultOptions,
	modules: [...defaultOptions.modules, Grid],
	slidesPerView: 5,
	grid: {
		rows: 3,
		fill: 'row'
	},
	// breakpoints: {
	// 	769: {
	// 		enabled: true,
	// 		// slidesPerView: 4,
	// 		spaceBetween: 15,
	// 		width: null,
	// 		gird: {
	// 			rows: 3,
	// 			fill: 'row'
	// 		},
	// 		navigation: {
	// 			nextEl: '.slider__right-arrow',
	// 			prevEl: '.slider__left-arrow',
	// 		},
	// 		pagination: {
	// 			el: '.slider__pagination',
	// 		},
	// 	},
	// },
});

new Swiper('.corporate-reviews-slider', {
	...defaultOptions,
	breakpoints: {
		769: {
			slidesPerView: 4
		}
	}
});

new Swiper('.course-teachers-slider', {
	...defaultOptions
	// width: null,
	// breakpoints: {
	// 	769: {
	// 		enabled: true,
	// 		width: null,
	// 	},
	// 	700: {
	// 		width: 600,
	// 	},
	// 	600: {
	// 		width: 500,
	// 	},
	// 	540: {
	// 		width: 440,
	// 	},
	// 	400: {
	// 		width: 300,
	// 	},
	// 	360: {
	// 		width: 260,
	// 	},
	// 	320: {
	// 		width: null,
	// 	},
	// },
});

new Swiper('.course-testimonials-slider', {
	...defaultOptions,
	enabled: true,
	width: null,
	// breakpoints: {
	// 	801: {
	// 		enabled: true,
	// 		width: null,
	// 	},
	// 	700: {
	// 		width: 614,
	// 	},
	// 	600: {
	// 		width: 514,
	// 	},
	// 	540: {
	// 		width: 450,
	// 	},
	// 	320: {
	// 		width: null,
	// 	},
	// },
});

new Swiper('.course-results-slider', {
	...defaultOptions,
	breakpoints: {
		769: {
			enabled: true,
			slidesPerView: 2,
			spaceBetween: 20,
			width: null
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

new Swiper('.meetings-slider', {
	enabled: false,
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
	width: null,
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