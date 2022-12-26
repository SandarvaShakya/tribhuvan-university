const menu = document.querySelector('.menu')
const navItems = document.querySelector('.nav-items')
const arrowUp = document.querySelector('.arrow-up')

menu.addEventListener('click', () => {
    navItems.classList.toggle('nav-items-show');
})

arrowUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
})