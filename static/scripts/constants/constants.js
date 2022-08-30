const fragment = document.createDocumentFragment();
const body = document.body;
const container = document.querySelector(".container");
const navElements = {
  navIcon: document.getElementById("js-nav-button"),
  nav: document.getElementById("js-nav"),
  overlay: document.getElementById("js-overlay"),
  burgerLine: document.querySelector(".burger__line"),
  burger: document.querySelector(".burger"),
};

const CategoryContainerElement = document.querySelector(".category_container");
const CardsContainerElement = document.querySelector(".card_container");

const picturePathSuccess = "../static/assets/images/SUCCESS2.jpg";
const picturePathFailure = "../static/assets/images/FAILURE2.jpg";
const soundPathSuccess = "../static/assets/audio/success.mp3";
const soundPathFailure = "../static/assets/audio/failure.mp3";

export {
  fragment,
  body,
  container,
  navElements,
  CategoryContainerElement,
  CardsContainerElement,
  picturePathSuccess,
  picturePathFailure,
  soundPathSuccess,
  soundPathFailure,
};
