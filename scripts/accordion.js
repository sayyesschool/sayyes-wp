const accordions = document.querySelectorAll('.accordion');

accordions.forEach(list => {
	list.addEventListener('click', event => {
		const target = event.target;
		const isItem = target.classList.contains('accordion__item');
		const isTitle = target.classList.contains('accordion__title');

		if (isItem || isTitle) {
			const parent = target.closest('.accordion__item');
			const desc = parent.querySelector('.accordion__content');

			parent.classList.contains('accordion__item--active')
				? closeItem(parent, desc)
				: openItem(parent, desc);
		}
	});
});

function openItem(item, desc) {
	desc.style.height = `${desc.scrollHeight}px`;
	item.classList.add('accordion__item--active');
}

function closeItem(item, desc) {
	desc.style.height = 0;
	item.classList.remove('accordion__item--active');
}