import Component from './component';

export default class Select extends Component {
	static name = 'select';

	static classes = {
		root: this.name,
		input: `${this.name}__input`,
		button: `${this.name}__button`,
		value: `${this.name}__value`,
		option: `${this.name}__option`,
		active: `${this.name}--active`
	};

	constructor(element) {
		super(element);

		this.input = this.getElement(`.${Select.classes.input}`);
		this.button = this.getElement(`.${Select.classes.button}`);
		this.value = this.getElement(`.${Select.classes.value}`);
		this.options = this.getElements(`.${Select.classes.option}`);

		this.button.addEventListener('click', this.handleButtonClick.bind(this));
		this.options.forEach(option => {
			option.addEventListener('click', this.handleOptionClick.bind(this));
		});
	}

	handleButtonClick(event) {
		event.preventDefault();

		this.element.classList.toggle(Select.classes.active);
	}

	handleOptionClick(event) {
		event.preventDefault();

		const { textContent } = event.target;

		this.input.value = textContent;
		this.value.textContent = textContent;
		this.element.classList.remove(Select.classes.active);
	}
}