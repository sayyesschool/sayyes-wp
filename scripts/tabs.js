const tabs = document.querySelectorAll('.tabs');

tabs.forEach(tabs => {
	const buttons = new Map(tabs.querySelectorAll('.tabs__tab').entries());
	const targets = new Map(Array.from(buttons.values()).map(button => {
		return [button.dataset.tabTarget, tabs.querySelector(button.dataset.tabTarget)];
	}));

	buttons.forEach(button => {
		const target = targets.get(button.dataset.tabTarget);

		button.addEventListener('click', () => {
			buttons.forEach(b => {
				b.classList.toggle('active', b === button);
			});

			targets.forEach(t => {
				t.classList.toggle('hidden', t !== target);
			});
		});
	});

	// triggers.forEach((item, newTabIndex) => {
	// 	item.addEventListener('click', () => {
	// 		changeTab(newTabIndex);

	// 		if (customSelect) {
	// 			selectBtn.textContent =
	// 				optionsList[newTabIndex].textContent;
	// 		}
	// 	});
	// });

	// if (customSelect) {
	// 	optionsList.forEach((option, index) =>
	// 		option.addEventListener('click', () => {
	// 			changeTab(index);
	// 		})
	// 	);
	// }
});