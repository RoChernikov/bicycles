const { log } = console;
import '../pages/index.scss';
import smoothscroll from 'smoothscroll-polyfill';
// --+++Импорт Swiper+++--
import Swiper, { Navigation, Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

// ******************************************************************
// PROTOTYPE!------------------------------------ДЕМОНСТРАЦИОННЫЙ КОД
smoothscroll.polyfill();
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

// ******************************************************************
// PROTOTYPE!----------------------------INPUT, ДЕМОНСТРАЦИОННЫЙ КОД
const footerInput = document.querySelector('.footer__input');
footerInput.addEventListener('focus', () => {
  footerInput.setAttribute('placeholder', '');
});

footerInput.addEventListener('blur', () => {
  footerInput.setAttribute('placeholder', 'Ваш e-mail');
});

// ******************************************************************
// PROTOTYPE!----------------------------СКРОЛЛ, ДЕМОНСТРАЦИОННЫЙ КОД
const headerLinks = Array.from(document.querySelectorAll('.header__link'));
const workout = document.querySelector('.workout');
const bikes = document.querySelector('.bikes');
const roads = document.querySelector('.roads');
const heroButton = document.querySelector('.hero__button');

headerLinks[0].onclick = evt => {
  evt.preventDefault();
  roads.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
};

headerLinks[1].onclick = evt => {
  evt.preventDefault();
  bikes.scrollIntoView({
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

heroButton.onclick = evt => {
  evt.preventDefault();
  roads.scrollIntoView({
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

// --+++BIKES-SLIDER+++--
const bikesSlider = new Swiper('.bikes__slider', {
  // Параметры
  wrapperClass: 'bikes__slider-wrapper',
  slideClass: 'bikes__slider-item',
  direction: 'horizontal',
  loop: false,
  speed: 350,
  simulateTouch: true,
  slidesPerView: 1,
  spaceBetween: 40,
  // Пагинация
  pagination: {
    el: '.bikes__pagination',
    bulletClass: 'bikes__bullet',
    bulletActiveClass: 'bikes__bullet_active',
    clickable: false
  }
});

// ******************************************************************
// PROTOTYPE!----------------------------КАРТОЧКИ, ДЕМОНСТРАЦИОННЫЙ КОД
import bikeCards from '../components/initial-cards';
const highwayBikes = bikeCards.filter(card => card.type === 'highway');
const gravelBikes = bikeCards.filter(card => card.type === 'gravel');
const ttBikes = bikeCards.filter(card => card.type === 'tt');
const bikeCardTemplate = document.querySelector('#bike-card-template').content;
const bikeCardsContainer = document.querySelector('.bikes__list');
const bikeSliderContainer = document.querySelector('.bikes__slider-wrapper');

// --+++Создание карточки+++--
const createBikeCard = data => {
  const card = bikeCardTemplate.querySelector('.bikes__item').cloneNode(true);
  card.querySelector('.bikes__image').src = `${data.image}`;
  card.querySelector('.bikes__caption').textContent = `${data.caption}`;
  card.querySelector('.bikes__link').href = `${data.link}`;
  return card;
};

const createBikeSliderCard = data => {
  const card = bikeCardTemplate.querySelector('.bikes__item').cloneNode(true);
  card.classList = 'bikes__slider-item bikes__item';
  card.querySelector('.bikes__image').src = `${data.image}`;
  card.querySelector('.bikes__caption').textContent = `${data.caption}`;
  card.querySelector('.bikes__link').href = `${data.link}`;
  return card;
};

// --+++Добавление карточки+++--
const addBikeCard = data => bikeCardsContainer.append(createBikeCard(data));
const addBikeSliderCard = data =>
  bikeSliderContainer.append(createBikeSliderCard(data));

// --+++Заполнение карточками+++--

const generateCards = cardData => {
  cardData.forEach(card => addBikeCard(card));
};
generateCards(highwayBikes);

const generateSliderCards = cardData => {
  cardData.forEach(card => addBikeSliderCard(card));
};
generateSliderCards(highwayBikes);

// -----------------------------------------------------------------
// --+++Переключение табов+++--
const bikeTabs = document.querySelectorAll('.bikes__nav-link');
const bikeSelector = document.querySelector('.bikes__selector');

const renderBikesCards = data => {
  bikeCardsContainer.innerHTML = '';
  generateCards(data);
};

const renderBikesSliderCards = data => {
  bikeSliderContainer.innerHTML = '';
  generateSliderCards(data);
};

bikeTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-id');
    bikeTabs.forEach(tab => tab.classList.remove('bikes__nav-link_active'));
    tab.classList.add('bikes__nav-link_active');

    switch (tabId) {
      case 'highway':
        renderBikesCards(highwayBikes);
        bikeSelector.value = 'Шоссе';
        renderBikesSliderCards(highwayBikes);
        break;

      case 'gravel':
        renderBikesCards(gravelBikes);
        bikeSelector.value = 'Грэвел';
        renderBikesSliderCards(gravelBikes);
        break;

      case 'tt':
        renderBikesCards(ttBikes);
        bikeSelector.value = 'ТТ';
        renderBikesSliderCards(ttBikes);
        break;
    }
  });
});

bikeSelector.addEventListener('input', () => {
  const value = bikeSelector.value;
  const switchTab = tabId => {
    bikeTabs.forEach(tab => tab.classList.remove('bikes__nav-link_active'));
    bikeTabs.forEach(tab => {
      if (tab.getAttribute('data-id') === tabId) {
        tab.classList.add('bikes__nav-link_active');
      }
    });
  };
  switch (value) {
    case 'Шоссе':
      renderBikesSliderCards(highwayBikes);
      renderBikesCards(highwayBikes);
      switchTab('highway');
      break;

    case 'Грэвел':
      renderBikesSliderCards(gravelBikes);
      renderBikesCards(gravelBikes);
      switchTab('gravel');
      break;

    case 'ТТ':
      renderBikesSliderCards(ttBikes);
      renderBikesCards(ttBikes);
      switchTab('tt');
      break;
  }
});

// ******************************************************************
// PROTOTYPE!----------------------------СМЕНА ТЕМЫ, ДЕМОНСТРАЦИОННЫЙ КОД
let preferThemeColor = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches; //можно реализовать автоматическое переключение
const footerThemeSwitch = document.querySelector('#footer-switcher');
const headerThemeSwitch = document.querySelector('#header-switcher');

const setThemeSwitcher = isDark => {
  if (isDark) {
    footerThemeSwitch.setAttribute('checked', '');
    headerThemeSwitch.setAttribute('checked', '');
  }
};

const handleThemeSwitch = isChecked => {
  if (isChecked) {
    document.body.setAttribute('dark', '');
  } else {
    document.body.removeAttribute('dark', '');
  }
};

footerThemeSwitch.onclick = evt => {
  handleThemeSwitch(evt.target.checked);
  setThemeSwitcher(document.body.hasAttribute('dark', ''));
};

headerThemeSwitch.onclick = evt => {
  handleThemeSwitch(evt.target.checked);
  setThemeSwitcher(document.body.hasAttribute('dark', ''));
};
setThemeSwitcher(document.body.hasAttribute('dark', ''));
