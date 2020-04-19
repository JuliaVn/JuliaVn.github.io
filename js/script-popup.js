var addToBasket = document.querySelectorAll(".addToBasket");
var popup = document.querySelector(".popup");
// var popupWrap = document.querySelector(".popup__wrapper");
var overlay = document.querySelector(".popup__overlay");


addToBasket.forEach(function (element, index) {
  element.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    overlay.classList.add("popup__overlay-show");
  })
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === 'Escape') {
    if (popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
      overlay.classList.remove("popup__overlay-show");
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  overlay.classList.remove("popup__overlay-show");
});

