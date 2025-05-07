// Navbar
const navbarToggle = document.querySelector('#navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarCloseBtn = document.querySelector('#navbar-close') // the navbar X button 

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});

navbarCloseBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});