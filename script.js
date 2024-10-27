document.addEventListener('scroll', function() {
    const quotes = document.querySelectorAll('.quote');
    const scrollPosition = window.scrollY;

    quotes.forEach((quote, index) => {
        if (scrollPosition > index * 400) {
            quote.style.opacity = 1;
            quote.style.transform = 'translateY(0)';
        }
    });
});
