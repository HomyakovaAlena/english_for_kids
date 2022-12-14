import { container } from "../constants/constants";

class Component {
  constructor(name, picturePath, cardContainer, id) {
    this.name = name;
    this.picture = new Image();
    this.picturePath = picturePath;
    this.pictureAlt = `${this.name}`;
    this.cardContainer = cardContainer;
    this.id = id;
  }

  static cleanDOM() {
    const categoryContainerElement = document.querySelector(
      ".category_container"
    );
    const cardsContainerElement = document.querySelector(".card_container");
    const gameResultContainerElement = document.querySelector(
      ".game_result_container"
    );
    const statsContainerElement = document.querySelector(".stats_container");
    categoryContainerElement?.remove();
    cardsContainerElement?.remove();
    gameResultContainerElement?.remove();
    statsContainerElement?.remove();
  }

  static chooseAssetsForRendering(cards, id) {
    this.cardNames = [];
    this.cardImagesPaths = [];
    this.soundPaths = [];
    this.translations = [];
    cards[id].map((item) => {
      this.cardNames.push(item["word"]);
      this.cardImagesPaths.push(item["image"]);
      this.soundPaths.push(item["audioSrc"]);
      this.translations.push(item["translation"]);
    });
    return [
      this.cardNames,
      this.cardImagesPaths,
      this.soundPaths,
      this.translations,
    ];
  }

  static rotateBack(event, card) {
    event.preventDefault();
    card.classList.add("card--pressed");
    card.addEventListener("mouseleave", function () {
      card.classList.remove("card--pressed");
    });
  }

  static simulateSwitchButtonClick() {
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    const switchButton = document.querySelector(".switch");
    switchButton.dispatchEvent(clickEvent);
  }

  static simulatetoMainPageClick() {
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    const h1 = document.querySelector(".header__link");
    h1.dispatchEvent(clickEvent);
  }

  static changeDesign(mode) {
    if (mode === "train") {
      container.classList.add("trainMode");
      container.classList.remove("gameMode");
    } else {
      container.classList.remove("trainMode");
      container.classList.add("gameMode");
    }
  }
}

export { Component };
