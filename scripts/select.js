export const select = () => {
	const customSelects = document.querySelectorAll('.custom-select');

	customSelects.forEach((customSelect) => {
		const selectBtn = customSelect.querySelector(
			'.custom-select__select-button'
		);
		const optionsList = customSelect.querySelectorAll(
			'.custom-select__option'
		);

		const changeOption = (e) => {
			e.preventDefault();

			selectBtn.textContent = e.target.textContent;
			customSelect.classList.remove('active');
		};

		selectBtn.addEventListener('click', (e) => {
			e.preventDefault();

			customSelect.classList.toggle('active');
		});
		optionsList.forEach((option) =>
			option.addEventListener('click', changeOption)
		);
	});
};