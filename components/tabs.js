import Component from './component';

export default class Tabs extends Component {
	static name = 'tabs';

	static classes = {
		root: this.name,
		nav: `${this.name}__nav`,
		tab: 'tab',
		activeTab: 'tab--active'
	};

	constructor(element) {
		super(element);

		this.buttons = this.getElements(`.${Tabs.classes.tab}`);

		this.targets = new Map(this.buttons.map(button => [
			button.value,
			this.getElement(`[data-tab-panel="${button.value}"]`)
		]));

		this.buttons.forEach(button => {
			button.addEventListener('click', this.handleButtonClick.bind(this));
		});
	}

	handleButtonClick(event) {
		const button = event.currentTarget;
		const target = this.targets.get(button.value);

		this.buttons.forEach(b => {
			b.classList.toggle(Tabs.classes.activeTab, b === button);

			if (button.value) {
				this.element.dataset.value = button.value;
			}
		});

		this.targets.forEach(t => {
			t.classList.toggle('hidden', t !== target);
		});
	}
}