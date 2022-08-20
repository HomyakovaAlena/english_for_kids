import {
  fragment,
  container,
  picturePathSuccess,
  picturePathFailure,
  soundPathSuccess,
  soundPathFailure,
} from "../constants/constants";
import { Component } from "./component.component";

class GameResult extends Component {
  constructor(name, picturePath, cardContainer, soundPath, errors) {
    super(name, cardContainer);
    this.errors = errors;
    this.pictureAlt = this.name;
    this.picturePath = picturePath;
    this.picturePathSuccess = picturePathSuccess;
    this.picturePathFailure = picturePathFailure;
    this.soundPath = soundPath;
    this.soundPathSuccess = soundPathSuccess;
    this.soundPathFailure = soundPathFailure;
  }

  createCard() {
    const newElement = document.createElement("div");
    newElement.classList.add("game_result");
    newElement.innerHTML = `
      <figure class="game_result__figure">
        <img
          class="game_result__img"
          src="${this.picturePath}"
          alt=${this.pictureAlt}
        />
        <div class="capture"><h4 class="game_result__capture">${this.name}!</h4>
        <h4 class="game_result__capture game_result__capture_errors" id='errors'>${this.errors} errors</h4></div>
      </figure>
      <audio 
        src="${this.soundPath}"
        class="audio-player--${this.name}" crossorigin="anonymous">
            Your browser does not support the
            <code>audio</code> element.
      </audio>
  `;

    return newElement;
  }

  renderCard(gameResultContainer) {
    fragment.append(this.createCard());
    gameResultContainer.append(fragment);

    return this;
  }
}

class GameResultContainer extends GameResult {
  constructor(name = "GameResultContainer", parent = container) {
    super(name);
    this.parent = parent;
  }

  createGameResultContainer() {
    const newElement = document.createElement("div");
    newElement.classList.add("game_result_container");
    return newElement;
  }

  renderGameResultContainer(element) {
    fragment.append(element);
    this.parent.append(fragment);
    return this;
  }

  renderGameResult(name, errors) {
    const gameResultContainer = this.createGameResultContainer();
    if (name === "success") {
      const newGameResult = new GameResult(
        name,
        this.picturePathSuccess,
        gameResultContainer,
        this.soundPathSuccess,
        errors
      );
      newGameResult.renderCard(gameResultContainer);
    } else {
      const newGameResult = new GameResult(
        name,
        this.picturePathFailure,
        gameResultContainer,
        this.soundPathFailure,
        errors
      );
      newGameResult.renderCard(gameResultContainer);
    }
    this.renderGameResultContainer(gameResultContainer);
    return this;
  }
}

export { GameResult, GameResultContainer };
