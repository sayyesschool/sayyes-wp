export const accordion = () => {
	const lists = document.querySelectorAll('.accordion');

	lists.forEach((list) => {
		const open = (item, desc) => {
			desc.style.height = `${desc.scrollHeight}px`;
			item.classList.add('accordion__item--active');
		};

		const close = (item, desc) => {
			item.classList.remove('accordion__item--active');
			desc.style.height = 0;
		};

		list.addEventListener('click', (event) => {
			const target = event.target;
			const isItem = target.classList.contains('accordion__item');
			const isTitle = target.classList.contains('accordion__title');

			if (isItem || isTitle) {
				const parent = target.closest('.accordion__item');
				const desc = parent.querySelector('.accordion__content');

				parent.classList.contains('accordion__item--active')
					? close(parent, desc)
					: open(parent, desc);
			}
		});
	});
};