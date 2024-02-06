const SELECTOR = 'select';

const classes = {
	root: `${SELECTOR}`,
	input: `${SELECTOR}__input`,
	button: `${SELECTOR}__button`,
	option: `${SELECTOR}__option`,
	active: `${SELECTOR}--active`
};

document.querySelectorAll(`.${classes.root}`).forEach(select => {
	const input = select.querySelector(`.${classes.input}`);
	const button = select.querySelector(`.${classes.button}`);
	const options = select.querySelectorAll(`.${classes.option}`);

	button.addEventListener('click', handleButtonClick);

	options.forEach(option => {
		option.addEventListener('click', handleOptionClick);
	});

	function handleButtonClick(event) {
		event.preventDefault();

		select.classList.toggle(classes.active);
	}

	function handleOptionClick(event) {
		event.preventDefault();

		input.value = event.target.textContent;
		button.textContent = event.target.textContent;

		select.classList.remove(classes.active);
	}
});