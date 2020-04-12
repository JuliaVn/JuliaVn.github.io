var headerBurger = document.querySelector('.header__burger');

headerBurger.classList.remove('header__burger--nojs');

headerBurger.addEventListener('click', function() {
  if (headerBurger.classList.contains('header__burger--closed')) {
    headerBurger.classList.remove('header__burger--closed');
    headerBurger.classList.add('header__burger--opened');
  } else {
    headerBurger.classList.add('header__burger--closed');
    headerBurger.classList.remove('header__burger--opened');
  }
});