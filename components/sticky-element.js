export default class StickyElement {
    constructor(element, className) {
        if (!element) throw new Error('Sticky needs an element');
    
        this.element = element;
        this.position = element.offsetTop;
        this.className = className || 'is-sticky';
    
        window.addEventListener('scroll', this.onScroll.bind(this));
    
        this.onScroll();
    
        return this.element;
    }

    hasScrolled() {
        return this.position < window.scrollY;
    }

    onScroll() {
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

// new Sticky(document.querySelector('#top-bar'));