
// Burger-Menu
const burgerMenu = document.querySelector('.burger_menu');
const headerNav = document.querySelector('.header_nav');

if (burgerMenu) {
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle('active');
        headerNav.classList.toggle('active');
    })

    headerNav.querySelectorAll('.link').forEach(element => {
        element.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            headerNav.classList.remove('active');
        })
    })
};



