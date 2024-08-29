const burgerMenu = document.querySelector('.burger_menu');
const headerNav = document.querySelector('.header_nav');

if (burgerMenu) {
    burgerMenu.addEventListener("click", (event) => {
        burgerMenu.classList.toggle('active');
        headerNav.classList.toggle('active');
    })
};

