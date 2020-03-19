const sidebarBurger = document.querySelector('.menu-burger');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');


sidebarBurger.addEventListener('click', () => {
    sidebarBurger.classList.toggle('active');
    sidebar.classList.toggle('active');
    body.classList.toggle('body__hidden');
    if(sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
    } else {
        sidebar.classList.add('hidden');
    }
});