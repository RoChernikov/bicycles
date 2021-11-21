import '../pages/index.scss';
// --+++Импорт Swiper+++--
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
Swiper.use([Navigation]);

// ******************************************************************
// PROTOTYPE!--------------------------------------------------------
const burgerBtn = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav');
const body = document.querySelector('.page');
const menuItems = document.querySelectorAll('.menu__item');

const openMenu = () => {
  burgerMenu.classList.add('header__nav_active');
  body.classList.add('page_hold');
};

const closeMenu = () => {
  burgerMenu.classList.remove('header__nav_active');
  body.classList.remove('page_hold');
};

function toggleMenu() {
  if (burgerMenu.classList.contains('header__nav_active')) {
    closeMenu();
  } else {
    openMenu();
  }
}

burgerBtn.addEventListener('click', toggleMenu);
menuItems.forEach(item => item.addEventListener('click', closeMenu));

// --+++ТЕСТОВЫЙ СЛАЙДЕР (ROADS)+++--
const imageCardsSlider = new Swiper('.test-slider', {
  // Параметры
  wrapperClass: 'test-slider__wrapper',
  slideClass: 'test-slider__item',
  direction: 'horizontal',
  loop: true,
  spaceBetween: 60,

  // Навигация
  navigation: {
    nextEl: '.roads__nav-btn_type_next',
    prevEl: '.roads__nav-btn_type_prev'
  }
});
// -----------------------------------------------------------------
// PROTOTYPE!--------------------------------------------------------
// ******************************************************************
