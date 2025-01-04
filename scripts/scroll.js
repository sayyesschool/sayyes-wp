document.querySelectorAll('[data-scroll-to]').forEach(element => {
    const { scrollTo, scrollBehavior = 'smooth', scrollBlock = 'center' } = element.dataset;
    const scrollToElement = document.querySelector(scrollTo);

    if (!scrollToElement) return;

    element.addEventListener('click', () => {
        scrollToElement.scrollIntoView({
            behavior: scrollBehavior,
            block: scrollBlock
        });
    });
});