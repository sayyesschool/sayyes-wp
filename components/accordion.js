import Component from './component';

export default class Accordion extends Component {
    static name = 'accordion';

    static classes = {
        root: this.name,
        item: `${this.name}__item`,
        title: `${this.name}__title`,
        content: `${this.name}__content`,
        activeItem: `${this.name}__item--active`
    };

    constructor(element) {
        super(element);

        this.element.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(event) {
        const target = event.target;
        const isItem = target.classList.contains(Accordion.classes.item);
        const isTitle = target.classList.contains(Accordion.classes.title);

        if (isItem || isTitle) {
            const parent = target.closest(`.${Accordion.classes.item}`);
            const content = parent.querySelector(`.${Accordion.classes.content}`);

            parent.classList.contains(Accordion.classes.activeItem)
                ? this.closeItem(parent, content)
                : this.openItem(parent, content);
        }
    }

    openItem(item, content) {
        content.style.height = `${content.scrollHeight}px`;
        item.classList.add(Accordion.classes.activeItem);
    }

    closeItem(item, content) {
        content.style.height = 0;
        item.classList.remove(Accordion.classes.activeItem);
    }
}