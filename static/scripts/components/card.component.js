import { fragment, container} from "../constants/constants";
import { Component } from "./component.component";

class Card extends Component {
  constructor(name, picturePath, cardContainer, id, soundPath, translation) {
    super(name, picturePath, cardContainer, id);
    this.soundPath = soundPath;
    this.sound = new Audio([soundPath]);
    this.translation = translation;
    this.pictureAlt = this.name;
  }
  createCard() {
    const newElement = document.createElement("div");
    newElement.classList.add("card");
    newElement.id = this.id;
    newElement.innerHTML = `
<div class="card__card-inner">
  <div class="card__card-front">
    <a class="card__link" href="#">
      <figure class="card__figure">
        <img
          class="card__img"
          src="${this.picturePath}"
          alt=${this.pictureAlt}
        />
        <h4 class="card__capture">${this.name}</h4>
      </figure>
      <audio 
        src="${this.soundPath}"
        class="audio-player" crossorigin="anonymous">
            Your browser does not support the
            <code>audio</code> element.
      </audio>
      <div class="audio-controls">
        <div class="audio-controls__play-toggle">
          <span class="play-icon"><i class="fa-solid fa-music"></i></span>
          <span class="pause-icon--hidden"><i class="fa-solid fa-pause"></i></span>
        </div>
      </div>
      <div class="rotate-controls">
        <div class="rotate-controls__play-toggle">
          <span class="rotate-icon"><i class="fa-solid fa-arrows-rotate"></i></span>    
        </div>
      </div>
    </a>
  </div>  
  <div class="card__card-back">
    <a class="card__link" href="#">
      <figure class="card__figure">
        <img
          class="card__img"
          src="${this.picturePath}"
          alt=${this.pictureAlt}
        />
        <h4 class="card__capture">${this.translation}</h4>
      </figure>
    </a>
  </div>    
</div>
  `;
    return newElement;
  }

  renderCard() {
    fragment.append(this.createCard());
    this.cardContainer.append(fragment);
    return this;
  }

}

class CardsContainer {
  constructor(name = "Card Container", parent = container) {
    this.name = name;
    this.parent = parent;
  }

  createCardContainer() {
    const newElement = document.createElement("div");
    newElement.classList.add("card_container");
    return newElement;
  }

  renderCardContainer(element) {
    fragment.append(element);
    this.parent.append(fragment);
    return this;
  }

  renderCards(cardNames, cardImagesPaths, soundPaths, translations) {
    const cardContainer = this.createCardContainer();
    cardNames.map((item, index) => {
      const newCard = new Card(
        item,
        cardImagesPaths[index],
        cardContainer,
        `card${index}`,
        soundPaths[index],
        translations[index]
      );
      newCard.renderCard();
    });

    this.renderCardContainer(cardContainer);
    return this;
  }

  renderDifficultCards(words) {
    const cardContainer = this.createCardContainer();
    words.forEach((item, index) => {
      const newCard = new Card(
        item.word,
        item.image,
        cardContainer,
        `card${index}`,
        item.audioSrc,
        item.translation
      );
      newCard.renderCard();
    });

    this.renderCardContainer(cardContainer);
    return this;
  }
}

export { Card, CardsContainer };
