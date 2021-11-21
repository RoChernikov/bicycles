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

// --+++ROADS TEXT-SLIDER+++--
const roadsTextSlider = new Swiper('.roads__text-slider', {
  // Параметры
  wrapperClass: 'roads__text-slider-wrapper',
  slideClass: 'roads__text-slider-item',
  direction: 'horizontal',
  loop: true,
  speed: 500,
  // allowTouchMove: false,
  spaceBetween: 60,

  // Навигация
  navigation: {
    nextEl: '.roads__nav-btn_type_next',
    prevEl: '.roads__nav-btn_type_prev'
  }
});
// -----------------------------------------------------------------
// --+++ROADS IMG-SLIDER+++--
const roadsImgSlider = new Swiper('.roads__img-slider', {
  // Параметры
  wrapperClass: 'roads__img-slider-wrapper',
  slideClass: 'roads__img-slider-item',
  direction: 'horizontal',
  loop: true,
  speed: 400,
  // allowTouchMove: false,
  slidesPerView: 2,
  spaceBetween: 40,

  // Навигация
  navigation: {
    nextEl: '.roads__nav-btn_type_next',
    prevEl: '.roads__nav-btn_type_prev'
  }
});
// -----------------------------------------------------------------
// --+++SLIDER LISTENERS+++--
roadsTextSlider.on('slideNextTransitionStart', function () {
  roadsImgSlider.slideNext();
});

roadsTextSlider.on('slidePrevTransitionStart', function () {
  roadsImgSlider.slidePrev();
});
