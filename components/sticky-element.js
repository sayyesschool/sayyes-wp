export default class StickyElement {
    constructor(element, className = 'is-sticky') {
        if (!element) throw new Error('Sticky needs an element');

        this.element = element;
        this.position = element.offsetTop;
        this.className = className;

        window.addEventListener('scroll', this.handleScroll.bind(this));

        this.handleScroll();
    }

    hasScrolled() {
        return this.position < window.scrollY;
    }

    handleScroll() {
        if (this.hasScrolled()) {
            this.setFixed();
        } else {
            this.setStatic();
        }
    }

    setFixed() {
        if (this.className) {
            this.element.classList.add(this.className);
        } else {
            this.element.style.position = 'fixed';
            this.element.style.top = 0;
        }
    }

    setStatic() {
        if (this.className) {
            this.element.classList.remove(this.className);
        } else {
            this.element.style.position = 'static';
            this.element.style.top = 'auto';
        }
    }
}