import '../pages/index.scss';
// --+++Импорт Swiper+++--
import Swiper, { Navigation, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
Swiper.use([Navigation]);
Swiper.use([Autoplay]);
Swiper.use([EffectFade]);

// ******************************************************************
// PROTOTYPE!--------------------------------------------------------
const burgerBtn = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav');
const body = document.querySelector('.page');
const menu = document.querySelector('.menu');

const openMenu = () => {
  burgerMenu.classList.add('header__nav_active');
  body.classList.add('page_hold');
  burgerBtn.checked = true;
};

const closeMenu = () => {
  burgerMenu.classList.remove('header__nav_active');
  body.classList.remove('page_hold');
  burgerBtn.checked = false;
};

function toggleMenu() {
  if (burgerMenu.classList.contains('header__nav_active')) {
    closeMenu();
  } else {
    openMenu();
  }
}

burgerBtn.addEventListener('click', toggleMenu);
menu.addEventListener('click', evt => {
  if (evt.target.classList.contains('menu__link')) {
    closeMenu();
  }
});

// --+++СКРОЛЛ, ДЕМОНСТРАЦИОННЫЙ КОД
const headerLinks = Array.from(document.querySelectorAll('.header__link'));
const workout = document.querySelector('.workout');
const roads = document.querySelector('.roads');

headerLinks[0].onclick = evt => {
  evt.preventDefault();
  roads.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
};

headerLinks[2].onclick = evt => {
  evt.preventDefault();
  workout.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
};
// -----------------------------------------------------------------

// --+++ROADS IMG-SLIDER+++--
const roadsImgSlider = new Swiper('.roads__image-slider', {
  // Параметры
  wrapperClass: 'roads__img-slider-wrapper',
  slideClass: 'roads__img-slider-item',
  slideActiveClass: 'roads__img-slider-item_active',
  direction: 'horizontal',
  loop: true,
  speed: 350,
  simulateTouch: false,
  slidesPerView: 1,
  spaceBetween: 40,
  autoplay: {
    delay: 1500
  },
  breakpoints: {
    861: {
      slidesPerView: 2
    }
  },
  // Навигация
  navigation: {
    nextEl: '.roads__nav-btn_type_next',
    prevEl: '.roads__nav-btn_type_prev'
  }
});

// --+++ROADS TEXT-SLIDER+++--
const roadsTextSlider = new Swiper('.roads__text-slider', {
  // Параметры
  wrapperClass: 'roads__text-slider-wrapper',
  slideClass: 'roads__text-slider-item',
  direction: 'horizontal',
  loop: true,
  speed: 350,
  allowTouchMove: false,
  spaceBetween: 40,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // Навигация
  navigation: {
    nextEl: '.roads__nav-btn_type_next',
    prevEl: '.roads__nav-btn_type_prev'
  }
});

// --+++SLIDER LISTENERS+++--
roadsImgSlider.on('slideNextTransitionStart', function () {
  roadsTextSlider[0].slideNext();
  roadsTextSlider[1].slideNext();
});

roadsImgSlider.on('slidePrevTransitionStart', function () {
  roadsTextSlider[0].slidePrev();
  roadsTextSlider[1].slidePrev();
});
