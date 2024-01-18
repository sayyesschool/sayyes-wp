const activateTabs = (tabsClass) => {
	const tabsArr = document.querySelectorAll(tabsClass);

	tabsArr.forEach((tabs) => {
		const triggerClass = `${tabsClass}__tab`;
		const itemClass = `${tabsClass}__item`;
		const navClass = `${tabsClass}__nav`;

		const triggers = tabs.querySelectorAll(`${triggerClass}`);
		const items = tabs.querySelectorAll(`${itemClass}`);
		const customSelect = tabs
			.querySelector(navClass)
			?.querySelector(`.custom-select`);
		const selectBtn = customSelect?.querySelector(
			'.custom-select__select-button'
		);
		const optionsList = customSelect?.querySelectorAll(
			'.custom-select__option'
		);

		const hideAll = () => {
			triggers.forEach((item) => item.classList.remove('active'));
			items.forEach((item) => item.classList.remove('active'));
		};

		const changeTab = (newIndex) => {
			hideAll();
			triggers[newIndex].classList.add('active');
			items[newIndex].classList.add('active');
		};

		triggers.forEach((item, newTabIndex) => {
			item.addEventListener('click', () => {
				changeTab(newTabIndex);

				if (customSelect) {
					selectBtn.textContent =
						optionsList[newTabIndex].textContent;
				}
			});
		});

		if (customSelect) {
			optionsList.forEach((option, index) =>
				option.addEventListener('click', () => {
					changeTab(index);
				})
			);
		}
	});
};

export const tabs = () => {
	activateTabs('.tabs');
	activateTabs('.subtabs');
};