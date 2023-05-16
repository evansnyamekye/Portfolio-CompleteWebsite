const navOpen = document.querySelector('#nav-open');
const closeMenu = document.querySelector('#close-menu');
const mobileNav = document.querySelector('#mobile-nav');
const navLinkClose = document.querySelectorAll('.nav-link-close');

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