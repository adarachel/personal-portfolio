const menubtn = document.querySelector('.menu-btn');
const headertoolbar = document.querySelector('.header-toolbar');
const closebtn = document.querySelector('.close-btn');
const portfoliolink = document.querySelector('.portfolio-link');
const aboutlink = document.querySelector('.about-link');
const contactlink = document.querySelector('.contact-link');
const form = document.querySelector('.form-post');
const fullName = form.elements;

const mediaqueryList = window.matchMedia('(max-width: 768px');

const screenTest = (e) => {
  if (e.matches) {
    fullName.required = false;
  } else {
    fullName.required = true;
  }
};

screenTest(mediaqueryList);

mediaqueryList.addListener(screenTest);

const { email } = form.elements;
const errMsgEmail = document.querySelector('small');

menubtn.addEventListener('click', () => {
  menubtn.classList.add('hidden');
  headertoolbar.classList.remove('hidden');
});

closebtn.addEventListener('click', () => {
  menubtn.classList.remove('hidden');
  headertoolbar.classList.add('hidden');
});

portfoliolink.addEventListener('click', () => {
  headertoolbar.classList.add('hidden');
  menubtn.classList.remove('hidden');
});

aboutlink.addEventListener('click', () => {
  headertoolbar.classList.add('hidden');
  menubtn.classList.remove('hidden');
});

contactlink.addEventListener('click', () => {
  headertoolbar.classList.add('hidden');
  menubtn.classList.remove('hidden');
