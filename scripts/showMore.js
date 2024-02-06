const activateBtnBlocks = (btnSelector, containerSelector) => {
	const showMoreBtn = document.querySelector(btnSelector);
	const reviewsContainer = document.querySelector(containerSelector);

	if (!showMoreBtn || !reviewsContainer) return;

	const reviewItems = Array.from(reviewsContainer.children);
	const itemsToHideCount = Math.floor(reviewItems.length / 2);
	const itemsToHide = reviewItems.slice(-itemsToHideCount);

	itemsToHide.forEach((item) => {
		item.style.display = 'none';
	});

	showMoreBtn.addEventListener('click', showAllItems);

	function showAllItems() {
		reviewItems.forEach(item => {
			item.style.display = 'flex';
		});
		showMoreBtn.style.display = 'none';
		showMoreBtn.removeEventListener('click', showAllItems);
	}
};

const activateBtnText = (elementSelector) => {
	const cards = document.querySelectorAll(elementSelector);

	if (!cards.length) return;

	cards.forEach(card => {
		const button = card.querySelector('.show-more-text-btn');
		const text = card.querySelector('.show-more-text-description');
		let isExpanded = false;

		button.addEventListener('click', () => {
			isExpanded = !isExpanded;

			if (isExpanded) {
				button.textContent = 'Свернуть';
				text.style.overflow = 'visible';
			} else {
				button.textContent = 'Развернуть';
				text.style.overflow = 'hidden';
			}
		});
	});
};

activateBtnBlocks('#show-more-review', '.student-reviews__reviews');
activateBtnBlocks('#show-more-teachers', '.cards-show-more');
activateBtnText('.video-block-2');