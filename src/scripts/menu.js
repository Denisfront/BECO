const sidebarBurger = document.querySelector('.menu-burger');
const sidebar = document.querySelector('.sidebar');
const menuTitle = document.querySelector('.menu__title');


sidebarBurger.addEventListener('click', () => {
    sidebarBurger.classList.toggle('active');
    sidebar.classList.toggle('active');

    if(sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
    } else {
        sidebar.classList.add('hidden');
    }
});