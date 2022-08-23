// import { categories } from "../../data/cards.data";
const fragment = document.createDocumentFragment();
const body = document.body;
const container = document.querySelector(".container");
const navElements = {
  navIcon: document.getElementById("js-nav-button"),
  nav: document.getElementById("js-nav"),
  overlay: document.getElementById("js-overlay"),
  burgerLine: document.querySelector(".burger__line"),
};

const CategoryContainerElement = document.querySelector(".category_container");
const CardsContainerElement = document.querySelector(".card_container");
// const [categoryNames, categoryImagesPaths, categoryIcons] = [
//   categories[0],
//   categories[1],
//   categories[2],
// ];

const picturePathSuccess = "../static/assets/images/SUCCESS2.jpg";
const picturePathFailure = "../static/assets/images/FAILURE2.jpg";
const soundPathSuccess = "../static/assets/audio/success.mp3";
const soundPathFailure = "../static/assets/audio/failure.mp3";

export {
  fragment,
  body,
  container,
  navElements,
  // categoryNames,
  // categoryImagesPaths,
  // categoryIcons,
  CategoryContainerElement,
  CardsContainerElement,
  picturePathSuccess,
  picturePathFailure,
  soundPathSuccess,
  soundPathFailure,
};
