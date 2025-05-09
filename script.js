//--------- Navbar -----------//

// Show/hide the side nav when the toggle button is clicked
const navbarToggle = document.querySelector('#navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');

    // Change the toggle button to X
    let classValue = navbarToggle.getAttribute('class');
    if (classValue === 'fa-solid fa-bars') {
        navbarToggle.setAttribute('class', 'fa-solid fa-xmark');
    } else {
        navbarToggle.setAttribute('class', 'fa-solid fa-bars');
    }
});

// Close the side nav when X is clicked
const navbarCloseBtn = document.querySelector('#navbar-close') // the navbar X button 
navbarCloseBtn.addEventListener('click', () => {
    navbarMenu.classList.remove('show');

    // Convert the toggle button back
    navbarToggle.setAttribute('class', 'fa-solid fa-bars');

});

// Close the side nav when a link is clicked
const shortScreenLinks = document.querySelectorAll('.short-link');
shortScreenLinks.forEach(shortLink => {
    shortLink.addEventListener('click', () => {
        navbarMenu.classList.remove('show');

        // Convert the toggle button back
        navbarToggle.setAttribute('class', 'fa-solid fa-bars');
    })
})

//--------- Client Voices -----------//
const testimonies = document.querySelectorAll('.testimony');
let currentIndex = 0;

// Add the first card
if (testimonies.length > 0) {
    testimonies[currentIndex].classList.add('active');
}

const showNextCard = () => {
    const currentCard = testimonies[currentIndex];

    // Remove active class from the current card
    currentCard.classList.remove('active');

    // Add slide-out class to the current card
    currentCard.classList.add('slide-out');

    // Calculate the current index - loop to 0 if it ends
    currentIndex = (currentIndex + 1) % testimonies.length;
    nextCard = testimonies[currentIndex];

    // Add slide-in and active classes for the next card
    nextCard.classList.add('slide-in', 'active');

    // Remove animation from all cards when it ends
    setTimeout(() => {
        currentCard.classList.remove('slide-out');
        nextCard.classList.remove('slide-in');
    }, 500);
}

setInterval(showNextCard, 3000);