document.querySelectorAll('[data-scroll-to]').forEach(element => {
    const { scrollTo } = element.dataset;
    const scrollToElement = document.querySelector(`#${scrollTo}`);

    if (scrollToElement) {
        element.addEventListener('click', () => {
            scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});