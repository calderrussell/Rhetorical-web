document.addEventListener('DOMContentLoaded', function() {
    // Define lists of quotes and image URLs
    const quotes = [
        {
            text: '"9 out of 10 people worldwide breathe polluted air"<br>-World Health Organization',
            imageUrl: './Images/NpSun.png'
        },
        {
            text: '"10 million metric tons of plastic end up in the ocean each year"<br>- UNESCO',
            imageUrl: './Images/NpLake.jpg'
        },
        {
            text: '"Nuclear energy provides well-paid, long-term jobs and supports local economies with millions of dollars in state and local tax revenues."<br>-Nucear Energy Institute',
            imageUrl: './Images/NpJobs.jpg'
        },
        {
            text: '"They also contribute billions of dollars annually to local economies through federal and state tax revenues"<br> -Office of Nuclear Energy',
            imageUrl: './Images/NpDusk.jpg'
        },
        {
            text: '"You\'re failing us, but young people are starting to understand your betrayal. The eyes of all future generations are upon you. And if you choose to fail us, I say we will never forgive you"<br>Greta Thunberg',
            imageUrl: './Images/NpMxPw92.png'
        }
    ];

    // Select the body element to append the sections
    const body = document.querySelector('body');

    // Loop through quotes list to create and append divs dynamically
    quotes.forEach((quoteData, index) => {
        // Create the background section div
        const backgroundSection = document.createElement('div');
        backgroundSection.classList.add('background-section', `section${index + 1}`);
        backgroundSection.style.backgroundImage = `url('${quoteData.imageUrl}')`;

        // Create the quote section div
        const quoteSection = document.createElement('div');
        quoteSection.classList.add('quote-section');

        // Create the paragraph element for the quote
        const quoteParagraph = document.createElement('p');
        quoteParagraph.classList.add('quote');
        quoteParagraph.innerHTML = quoteData.text;

        // Append the quote to the quote section
        quoteSection.appendChild(quoteParagraph);
        // Append the quote section to the background section
        backgroundSection.appendChild(quoteSection);
        // Append the background section to the body
        body.appendChild(backgroundSection);
    });

    window.addEventListener('load', function() {
        document.querySelector('.quote').style.opacity = 1;
    });

    // Add scroll event listener for animations
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
});
