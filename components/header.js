import Component from './component';

export default class Header extends Component {
    static name = 'header';

    static classes = {
        root: this.name,
        menuButton: `${this.name}__burger`,
        navList: `${this.name}__nav-list`,
        navItem: `${this.name}__nav-item`
    };

    lastScrollY = window.scrollY;

    constructor(element) {
        super(element);

        this.menuButton = this.getElement(`.${Header.classes.menuButton}`);
        this.navList = this.getElement(`.${Header.classes.navList}`);
        this.navItems = this.getElements(`${Header.classes.navItem}:has(.subnav__content)`);

        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.menuButton.addEventListener('click', this.handleMenuButtonClick.bind(this));
        this.navList.addEventListener('click', this.handleNavListClick.bind(this));
    }

    handleScroll() {
        const currentScrollY = window.scrollY;
        const isScrollingUp = currentScrollY < this.lastScrollY;
        const isSmallScreen = window.innerWidth < 769;

        this.element.classList.toggle('expanded', currentScrollY !== 0);

        if (isSmallScreen) {
            this.element.classList.remove('opened');
            this.closeAllSubnav();
        } else {
            this.element.classList.toggle('opened', isScrollingUp);
        }

        this.lastScrollY = currentScrollY;
    }

    handleMenuButtonClick() {
        this.element.classList.toggle('opened');
        this.closeAllSubnav();
    }

    handleNavListClick(event) {
        const target = event.target;
        const isItem = target.classList.contains(Header.classes.navItem);
        const subnav = target.querySelector('.subnav');


        if (subnav && isItem) {
            if (subnav.clientHeight) {
                target.classList.remove('active');
                subnav.style.height = 0;
            } else {
                this.closeAllSubnav();
                target.classList.add('active');
                subnav.style.height = `${subnav.scrollHeight}px`;
            }
        }
    }

    closeAllSubnav() {
        this.navItems.forEach(item => {
            const subnav = item.querySelector('.subnav');

            item.classList.remove('active');
            subnav.style.height = 0;
        });
    }
}