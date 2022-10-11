const menubtn = document.querySelector('.menu-btn');
const headertoolbar = document.querySelector('.header-toolbar');
const closebtn = document.querySelector('.close-btn');
const portfoliolink = document.querySelector('.portfolio-link');
const aboutlink = document.querySelector('.about-link');
const contactlink = document.querySelector('.contact-link');
let menuOpen = false;

menubtn.addEventListener('click', () => {
  !menuOpen && menubtn.classList.add('hidden');
  headertoolbar.classList.remove('hidden');
  (menuOpen = true);
});

closebtn.addEventListener('click', () => {
  menuOpen && menubtn.classList.remove('hidden');
  headertoolbar.classList.add('hidden');
  (menuOpen = false);
});

portfoliolink.addEventListener('click', () => {
  headertoolbar.classList.add('hidden');
  menubtn.classList.remove('hidden');
  console.log('click link'); // eslint-disable-next-line no-console
});

aboutlink.addEventListener('click', () => {
  headertoolbar.classList.add('hidden');
  menubtn.classList.remove('hidden');
  console.log('click link'); // eslint-disable-next-line no-console
});

contactlink.addEventListener('click', () => {
  headertoolbar.classList.add('hidden');
  menubtn.classList.remove('hidden');
  console.log('click link'); // eslint-disable-next-line no-console
});