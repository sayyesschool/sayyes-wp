import Component from './component';

export default class Tabs extends Component {
	static name = 'tabs';

	static classes = {
		root: this.name,
		nav: `${this.name}__nav`,
		tab: `${this.name}__tab`,
		activeTab: `${this.name}__tab--active`
	};

	constructor(element) {
		super(element);

		this.buttons = this.getElements(`.${Tabs.classes.tab}`);

		this.targets = new Map(this.buttons.map(button => {
			return [
				button.dataset.tabTarget,
				this.getElement(button.dataset.tabTarget)
			];
		}));

		this.buttons.forEach(button => {
			button.addEventListener('click', this.handleButtonClick.bind(this));
		});
	}

	handleButtonClick(event) {
		const button = event.currentTarget;
		const target = this.targets.get(button.dataset.tabTarget);

		console.log('button', button);
		console.log('target', target);

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