import Component from './component';

export default class Nav extends Component {
    static name = 'nav';

    static classes = {
        root: this.name,
        list: `${this.name}__list`,
        item: `${this.name}__item`,
        itemOpen: `${this.name}__item--open`
    };

    constructor(element) {
        super(element);

        this.list = this.getElement(`.${Nav.classes.list}`);
        this.items = this.getElements(`.${Nav.classes.list} > .${Nav.classes.item}`);

        this.list.addEventListener('click', this.handleListClick.bind(this));
    }

    handleListClick(event) {
        const target = event.target;
        const isItem = target.classList.contains(Nav.classes.item);
        const subnav = target.querySelector('.nav');

        if (isItem && subnav) {
            if (subnav.clientHeight) {
                target.classList.remove(Nav.classes.itemOpen);
                subnav.style.height = 0;
            } else {
                this.closeSubnavs();
                target.classList.add(Nav.classes.itemOpen);
                subnav.style.height = `${subnav.scrollHeight}px`;
            }
        }
    }

    closeSubnavs() {
        this.items.forEach(item => {
            const subnav = item.querySelector('.nav');

            if (!subnav) return;

            item.classList.remove(Nav.classes.itemOpen);
            subnav.style.height = 0;
        });
    }
}