const menubtn = document.querySelector('.menu-btn');
const headertoolbar = document.querySelector('.header-toolbar');
const closebtn = document.querySelector('.close-btn');
const portfoliolink = document.querySelector('.portfolio-link');
const aboutlink = document.querySelector('.about-link');
const contactlink = document.querySelector('.contact-link');
const arrayProjectBtn = document.querySelectorAll('.project-btn');

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
});

const dataCards = [
  {
    id: 0,
    url: './img/newnew.svg',
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://adarachel.github.io/personal-portfolio/',
  },
  {
    id: 1,
    url: './img/newnew.svg',
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://adarachel.github.io/personal-portfolio/',
  },
  {
    id: 2,
    url: './img/newnew.svg',
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://adarachel.github.io/personal-portfolio/',
  },
  {
    id: 3,
    url: './img/newnew.svg',
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://adarachel.github.io/personal-portfolio/',
  },
  {
    id: 4,
    url: './img/newnew.svg',
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://adarachel.github.io/personal-portfolio/',
  },
  {
    id: 5,
    url: './img/newnew.svg',
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com/',
    linkSource: 'https://adarachel.github.io/personal-portfolio/',
  },
];

const worksCardDetailsMobile = (index) => `
  <article class="works-card-details-mobile">
          <button type="button" class="close-btn-details">
              <img src="./img/Icon.svg" alt="cancel">
          </button>
          <div class="works-card-image-details-mobile img">
              <img src=${dataCards[index].url} alt="">
          </div>
          <h2 class="works-card-title-mobile">
              ${dataCards[index].title}
          </h2>
          <ul class="works-card-skills-mobile">
              <li class="works-card-skills-mobile li">${dataCards[index].tecnologies.tech1}</li>
              <li class="works-card-skills-mobile li">${dataCards[index].tecnologies.tech2}</li>
              <li class="works-card-skills-mobile li">${dataCards[index].tecnologies.tech3}</li>
          </ul>
          <p class="works-card-paragraph-mobile">
            ${dataCards[index].description}
          </p>
          <div class="works-card-button-mobile">
                  <a href=${dataCards[index].linkVersion} class="works-card-btn-details-mobile">
                  <img src="./img/Enable.png" alt="see live">
                  </a>
                  <a href=${dataCards[index].linkSource} class="works-card-btn-details-mobile">
                  <img src="./img/Enable.svg" alt="see github">
                  </a>
          </div>
          <script src="index.js"></script>
  </article>
  `;

    const projectsCards = [
        {
            "id":"0",
            "name":"Multi-Post Stories Gain+Glory",
            "cardSkills":["ruby on rails","css","Javascript","html"],
            "imageUrl":"./img/Img Plaholder.svg",
    },
        {
            "id":"1",
            "name":"Multi-Post Stories Gain+Glory",
            "cardSkills":["ruby on rails","css","Javascript","html"],
            "imageUrl":"./img/Img Plaholder.svg",
    },
        {
            "id":"2",
            "name":"Multi-Post Stories Gain+Glory",
            "cardSkills":["ruby on rails","css","Javascript","html"],
            "imageUrl":"./img/Img Plaholder.svg",
    },
        {
            "id":"3",
            "name":"Multi-Post Stories Gain+Glory",
            "cardSkills":["ruby on rails","css","Javascript","html"],
            "imageUrl":"./img/Img Plaholder.svg",        
          },
        {
            "id":"4",
            "name":"Multi-Post Stories Gain+Glory",
            "cardSkills":["ruby on rails","css","Javascript","html"],
            "imageUrl":"./img/Img Plaholder.svg",       
          },
        {
            "id":"5",
            "name":"Multi-Post Stories Gain+Glory",
            "cardSkills":["ruby on rails","css","Javascript","html"],
            "imageUrl":"./img/Img Plaholder.svg",
    },
    ];

    const projectsContainer = document.getElementById('work-container-id');


  projectsCards.forEach((projects, index) => {console.log("card") let card = ` 
  <article>
  <div class="works-card">
  <div class="works-card-image">
    <img src=${projects.imageUrl}>
  </div>
  <div class="works-card">
    <h2 class="works-card-title">
        ${projects.name}
    </h2>
    <ul class="works-card-skills">
    <li>${projects.cardSkills[0]}</li>
    <li>${projects.cardSkills[1]}</li>
    <li>${projects.cardSkills[2]}</li>
    <li>${projects.cardSkills[3]}</li>
</ul>
    <div><button data-id="${index}" class="project-btn">See Project</button></div>
  </div>
</div>
</article>
  ` projectsContainer.innerHTML += card });

// eslint-disable-next-line no-plusplus
for (let i = 0; i < arrayProjectBtn.length; i++) {
  arrayProjectBtn[i].addEventListener('click', () => {
    document.body.innerHTML = worksCardDetailsMobile(i);
    const btnCloseDetailsMobile = document.querySelector('.close-btn-details');
    btnCloseDetailsMobile.addEventListener('click', async () => {
      window.location.reload();
    });
  });
}