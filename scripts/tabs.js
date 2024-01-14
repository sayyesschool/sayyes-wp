const activateTabs = (tabElements, triggerClass, itemClass) => {
	tabElements.forEach((tabs) => {
		const triggers = tabs.querySelectorAll(`.${triggerClass}`);
		const items = tabs.querySelectorAll(`.${itemClass}`);

		const hideAll = () => {
			triggers.forEach((item) => item.classList.remove("active"));
			items.forEach((item) => item.classList.remove("active"));
		};

		triggers.forEach((item, index) => {
			item.addEventListener("click", () => {
				hideAll();

				triggers[index].classList.add("active");
				items[index].classList.add("active");
			});
		});
	});
};

export const tabs = () => {
	const tabsArr = document.querySelectorAll(".tabs");
	const subtabsArr = document.querySelectorAll(".subtabs");

	activateTabs(tabsArr, "tabs__tab", "tabs__item");
	activateTabs(subtabsArr, "subtabs__tab", "subtabs__item");
};
