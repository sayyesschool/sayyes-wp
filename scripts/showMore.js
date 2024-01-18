export const showMore = () => {
	const activateBtnBlocks = (btnSelector, containerSelector) => {
		const showMoreBtn = document.querySelector(btnSelector);
		const reviewsContainer = document.querySelector(containerSelector);

		if (!showMoreBtn || !reviewsContainer) return;

		const reviewItems = Array.from(reviewsContainer.children);
		const itemsToHideCount = Math.floor(reviewItems.length / 2);
		const itemsToHide = reviewItems.slice(-itemsToHideCount);

		const hideItems = (items) => {
			items.forEach((item) => {
				item.style.display = 'none';
			});
		};

		const showAllItems = () => {
			reviewItems.forEach((item) => {
				item.style.display = 'flex';
			});
			showMoreBtn.style.display = 'none';

			showMoreBtn.removeEventListener('click', showAllItems);
		};

		hideItems(itemsToHide);

		showMoreBtn.addEventListener('click', showAllItems);
	};

	const activateBtnText = (elementSelector) => {
		const cards = document.querySelectorAll(elementSelector);

		if (!cards.length) return;

		cards.forEach((card) => {
			const btn = card.querySelector('.show-more-text-btn');
			const text = card.querySelector('.show-more-text-description');
			let isExpanded = false;

			btn.addEventListener('click', () => {
				isExpanded = !isExpanded;

				if (isExpanded) {
					text.style.overflow = 'visible';
					btn.textContent = 'Свернуть';
				} else {
					text.style.overflow = 'hidden';
					btn.textContent = 'Развернуть';
				}
			});
		});
	};

	activateBtnBlocks('#show-more-review', '.student-reviews__reviews');
	activateBtnBlocks('#show-more-teachers', '.cards-show-more');
	activateBtnText('.video-block-2');
};