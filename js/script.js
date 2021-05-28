document.querySelector('.hamburger').addEventListener('click', () => {
   document.querySelector('.menu').classList.toggle('menu_active');
   document.querySelector('.hamburger').classList.toggle('hamburger_active');
});

document.querySelectorAll('.menu_link').forEach((item) => {
   item.addEventListener('click', () => {
      document.querySelector('.menu').classList.remove('menu_active');
      document.querySelector('.hamburger').classList.remove('hamburger_active');
   });
});
