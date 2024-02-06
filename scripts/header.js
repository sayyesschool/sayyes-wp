const header = document.querySelector('.header');
const burger = header.querySelector('.header__burger');
const list = header.querySelector('.header__list');
const listItems = list.querySelectorAll('.header__item:has(.subnav__content)');

let lastScrollY = window.scrollY;

function closeAllSubnav() {
  listItems.forEach((item) => {
    const subnav = item.querySelector('.subnav');

    item.classList.remove('active');
    subnav.style.height = 0;
  });
}

function updateHeaderClasses() {
  const currentScrollY = window.scrollY;
  const isScrollingUp = currentScrollY < lastScrollY;
  const isSmallScreen = window.innerWidth < 769;

  header.classList.toggle('expanded', currentScrollY !== 0);

  if (isSmallScreen) {
    header.classList.remove('opened');
    closeAllSubnav();
  } else {
    header.classList.toggle('opened', isScrollingUp);
  }

  lastScrollY = currentScrollY;
}

window.addEventListener('scroll', updateHeaderClasses);

burger.addEventListener('click', () => {
  header.classList.toggle('opened');
  closeAllSubnav();
});

list.addEventListener('click', (event) => {
  const target = event.target;
  const isItem = target.classList.contains('header__item');
  const subnav = target.querySelector('.subnav');

  if (subnav && isItem) {
    if (subnav.clientHeight) {
      target.classList.remove('active');
      subnav.style.height = 0;
    } else {
      closeAllSubnav();
      target.classList.add('active');
      subnav.style.height = `${subnav.scrollHeight}px`;
    }
  }
});