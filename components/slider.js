import Swiper from 'swiper';
import { Grid, Navigation, Pagination, Scrollbar } from 'swiper/modules';

export default class Slider extends Swiper {
    static Grid = Grid;
    static Navigation = Navigation;
    static Pagination = Pagination;
    static Scrollbar = Scrollbar;

    static defaultOptions = {
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

    constructor(element, { modules = [], ...options } = {}) {
        super(element, {
            ...Slider.defaultOptions,
            ...options,
            modules: [
                ...Slider.defaultOptions.modules,
                ...modules
            ]
        });
    }
}