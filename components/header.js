import Component from './component';

export default class Header extends Component {
    static name = 'header';

    static classes = {
        root: this.name,
        main: `${this.main}__main`,
        nav: `${this.name}__nav`,
        menuButton: `${this.name}__menu-button`,
        expanded: `${this.name}--expanded`,
        open: `${this.name}--open`,
    };

    lastScrollY = window.scrollY;

    constructor(element) {
        super(element);

        this.menuButton = this.getElement(`.${Header.classes.menuButton}`);
        this.nav = this.getElement(`.${Header.classes.nav} > .nav`);

        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.menuButton.addEventListener('click', this.handleMenuButtonClick.bind(this));

        this.handleScroll();
    }

    handleScroll() {
        const currentScrollY = window.scrollY;
        const isScrollingUp = currentScrollY < this.lastScrollY;
        const isSmallScreen = window.innerWidth < 1024;

        this.element.classList.toggle(Header.classes.expanded, currentScrollY !== 0);

        if (isSmallScreen) {
            this.element.classList.remove(Header.classes.open);
            this.menuButton.removeAttribute('data-active');
            this.nav.component?.closeSubnavs();
        } else if (currentScrollY === 0) {
            this.element.classList.add(Header.classes.open);
        } else {
            this.element.classList.toggle(Header.classes.open, isScrollingUp);
        }

        this.lastScrollY = currentScrollY;
    }

    handleMenuButtonClick() {
        this.element.classList.toggle(Header.classes.open);
        this.menuButton.toggleAttribute('data-active');
        this.nav.component?.closeSubnavs();
    }
}