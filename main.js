const navOpen = document.querySelector('#nav-open');
const closeMenu = document.querySelector('#close-menu');
const mobileNav = document.querySelector('#mobile-nav');
const navLinkClose = document.querySelectorAll('.nav-link-close');
const portfolioItems = document.querySelectorAll('.porfolio-items-detail');
const wrapper = document.querySelector('.wrapper');
const form = document.querySelector('#form');

navOpen.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

const closeMobileNav = () => {
  mobileNav.style.display = 'none';
  document.body.style.overflow = 'auto';
};

closeMenu.addEventListener('click', closeMobileNav);

navLinkClose.forEach((link) => {
  link.addEventListener('click', closeMobileNav);
});

window.onresize = () => {
  if (window.innerWidth >= 768) {
    closeMobileNav();
  }
};

const portfolioItemsDetail = [
  {
    id: '1',
    name: 'Tonic',
    year: '2015',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has, a galley of type and scrambled it 1960s. Lorem Ipsum is simplydummy text of the printing and typesetting industry.',
    title: 'CANOPY',
    stack: 'Back End Dev',
    workStack: ['HTML', 'CSS', 'JavaScript'],
    images: 'images/desktop-switch/(1)Snapshoot desktop.png',
    source: '#',
    live: '#',
  },

  {
    id: '2',
    name: 'Multi-Post Stories',
    year: '2015',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has, a galley of type and scrambled it 1960s. Lorem Ipsum is simplydummy text of the printing and typesetting industry.',
    title: 'FACEBOOK',
    stack: 'Full Stack Dev',
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
    images: 'images/desktop-switch/(2)Snapshoot desktop.png',
    source: '#',
    live: '#',
  },

  {
    id: '3',
    name: 'Facebook 360',
    year: '2015',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has, a galley of type and scrambled it 1960s. Lorem Ipsum is simplydummy text of the printing and typesetting industry.',
    title: 'Facebook',
    stack: 'Full Stack Dev',
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
    images: 'images/desktop-switch/(3)Snapshoot desktop.png',
    source: '#',
    live: '#',
  },

  {
    id: '4',
    name: 'Uber Navigation',
    year: '2015',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has, a galley of type and scrambled it 1960s. Lorem Ipsum is simplydummy text of the printing and typesetting industry.',
    title: 'Uber',
    stack: 'Lead Developer',
    workStack: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
    images: 'images/desktop-switch/(4)Snapshoot desktop.png',
    source: '#',
    live: '#',
  },
];

if (portfolioItems) {
  portfolioItems.forEach((cards) => {
    cards.addEventListener('click', (e) => {
      const idValue = e.target.closest('.card').id;
      for (let i = 0; i < portfolioItemsDetail.length; i += 1) {
        if (portfolioItemsDetail[i].id === idValue) {
          const popupPage = document.createElement('page');
          popupPage.classList.add('popup-page');
          // console.log(porfolioItemsDetail[i].name);
          popupPage.innerHTML = `
          <div class="background"></div>
          <div class="card flex-main">
          <button class="close-btn" type="submit">
          <i class="fas fa-times"></i>
          </button>
          <div class="card-right">
              <h2>${portfolioItemsDetail[i].name}</h2>
              <ul class="cano">
                <li>${portfolioItemsDetail[i].title}<i class="fa fa-circle"></i></li>
                <li>${portfolioItemsDetail[i].stack}<i class="fa fa-circle"></i></li>
                <li>${portfolioItemsDetail[i].year}</li>
              </ul>
               <img src="${portfolioItemsDetail[i].images}" alt="${portfolioItemsDetail[i].name}">
            <div class="flex-nl">


              <ul class="lang">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">Javascript</a></li>
              </ul>
              <div class="border"></div>
              </div>
               <div class="link-button">
                <button class="btn-default"><a href="${portfolioItemsDetail[i].live} class="see-btn">See live<img src="images/see-images/live.png" alt="live-link"/></a></button>
                <button class="btn-default"><a href="${portfolioItemsDetail[i].source} class="see-btn">See source<img src="images/see-images/Vector.png" alt="live-link"/></a></button>
               </div>

            </div>

            </div>
          </div>
          </div>
          </div>
          `;
          wrapper.appendChild(popupPage);
          const closeButton = popupPage.querySelector('.close-btn');
          closeButton.addEventListener('click', () => {
            wrapper.removeChild(popupPage);
          });
        }
      }
    });
  });
}

// start of form validation
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // validate the form fields
  const email = document.querySelector('#email').value;

  // check if name field is empty
  if (email !== email.toLowerCase()) {
    const errorDiv = document.querySelector('#validate');
    errorDiv.innerText = 'Kindly type email address in lowercase';
  } else {
    form.submit();
  }
});
