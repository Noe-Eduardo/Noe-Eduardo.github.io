const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('menu-h');
const menuItems = document.querySelectorAll('.menu-h .menu-item');


hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});










const items = document.querySelectorAll('.container div');

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('rotate'); 
  });
});
