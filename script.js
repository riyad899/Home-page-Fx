// JavaScript to toggle menu visibility on smaller screens
const toggleBtn = document.querySelector('.toggle__btn');
const navLinks = document.querySelector('.nav__links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
