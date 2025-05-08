//--------- Navbar -----------//
const navbarToggle = document.querySelector('#navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarCloseBtn = document.querySelector('#navbar-close') // the navbar X button 

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});

navbarCloseBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});

//--------- Happy Clients -----------//
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

setInterval(showNextCard, 5000);