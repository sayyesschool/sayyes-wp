document.querySelectorAll('[data-share-link]').forEach(element => {
    const { shareLink } = element.dataset;

    element.addEventListener('click', async () => {
        try {
            await navigator.share({
                title: "MDN",
                text: "Learn web development on MDN!",
                url: shareLink
            });
        } catch (error) {
        }
    });
});