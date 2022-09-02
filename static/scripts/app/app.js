import { body, container } from "../constants/constants";
import { Navigation } from "../components/navigation.component";
import { GameResultContainer } from "../components/gameResult.component";
import { AudioComponent } from "../components/audio.component";
import { StarComponent } from "../components/star.component";
import { Component } from "../components/component.component";
import { StatsData } from "../components/statsData";
import { SortableTable } from "../components/sortableTable.component";

class App {
  constructor() {
    this.mode = "train";
    this.errors = 0;
    this.currentID = NaN;
    this.audiogenerator = null;
    this.count = 0;
    this.audioPlayersCount = NaN;
    this.statsData = new StatsData();
    this.currentPage = "";
    this.isStarted = false;
  }

  setMode(mode) {
    this.mode = mode;
  }

  toggleMode() {
    if (this.mode === "train") {
      this.setMode("play");
      Component.changeDesign("play");
      localStorage.setItem("mode", "play");
      this.disableCardsBeforeStart();
    } else {
      this.setMode("train");
      Component.changeDesign("train");
      localStorage.setItem("mode", "train");
      this.disableCardsBeforeStart();
    }
  }

  disableCardsBeforeStart() {
    if ((localStorage.getItem("mode") === "play") & !this.isStarted) {
      container.classList.add("notStarted");
    }
    if (localStorage.getItem("mode") === "train" || this.isStarted) {
      container.classList.remove("notStarted");
    }
  }

  defineSettingsForPage() {
    if (document.querySelector(".category_container")) {
      this.currentPage = "category_page";
    } else if (document.querySelector(".card_container")) {
      this.currentPage = "card_page";
    } else if (document.querySelector(".stats_container")) {
      this.currentPage = "stats_page";
    }
    container.classList.add(this.currentPage);
    if (
      (localStorage.getItem("mode") === "play") &
      (this.currentPage === "card_page" || this.currentPage === "category_page")
    ) {
      Component.simulateSwitchButtonClick();
    }
  }

  generateAudio() {
    const shuffledAudio = AudioComponent.shuffleAudio();
    this.audioPlayersCount = shuffledAudio.length;
    this.audioGenerator = AudioComponent.gen(shuffledAudio);
  }

  pronounceWords() {
    const newAudio = this.audioGenerator.next().value;
    newAudio.play();
    const card = newAudio.closest(".card");
    card.classList.add("card--pronounced");
    this.currentID = card.id;
    return this.currentID;
  }

  handleAudioControlsCLick(event, card, element) {
    AudioComponent.playAudio(event, element);
    this.currentID = card.id;
    this.statsData.sendToServer(
      this.statsData.postNewItem(+this.currentID.replace("card", ""), "trained")
    );
  }

  defineAccuracy(event, id) {
    const element = event.target;
    event.preventDefault();
    const card = element.closest(".card");
    if (card.id === id) {
      card.classList.add("card--guessed");
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    return this.count >= this.audioPlayersCount;
  }

  renderGameResult() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const gameResultContainer = new GameResultContainer();
    if (this.errors === 0) {
      gameResultContainer.renderGameResult("success", this.errors);
      AudioComponent.playSuccessAudio();
    } else {
      gameResultContainer.renderGameResult("failure", this.errors);
      AudioComponent.playFailureAudio();
    }
  }

  handleStartButtonClick(element) {
    this.isStarted = true;
    this.disableCardsBeforeStart();
    this.generateAudio();
    this.currentID = this.pronounceWords();
    element.closest(".icon_start").classList.add("icon_start--hidden");
    body.querySelector(".icon_repeat").classList.remove("icon_repeat--hidden");
  }

  handleWrongAndRight(accuracy) {
    if (accuracy === "right") {
      this.count++;
      StarComponent.renderStar("right");
      AudioComponent.playCorrectAudio();
      this.statsData.sendToServer(
        this.statsData.postNewItem(
          +this.currentID.replace("card", ""),
          "correct"
        )
      );
    } else {
      StarComponent.renderStar("wrong");
      this.errors++;
      AudioComponent.playErrorAudio();
      this.statsData.sendToServer(
        this.statsData.postNewItem(
          +this.currentID.replace("card", ""),
          "errors"
        )
      );
    }
  }

  handleGameFinish() {
    Component.cleanDOM();
    this.toggleMode();
    document
      ?.querySelector(".icon_start")
      .classList.remove("icon_start--hidden");
    document
      ?.querySelector(".icon_repeat")
      .classList.add("icon_repeat--hidden");
    StarComponent.hideStars();
    this.renderGameResult();
    setTimeout(Component.cleanDOM, 3000);
    setTimeout(Component.simulatetoMainPageClick, 3000);
    this.count = 0;
    this.audioPlayersCount = NaN;
  }

  handleGameMode(event) {
    const isRight = this.defineAccuracy(event, this.currentID);
    if (isRight) {
      this.handleWrongAndRight("right");
      if (!this.isFinished()) {
        this.currentID = this.pronounceWords();
      } else {
        this.handleGameFinish();
      }
    } else {
      this.handleWrongAndRight("wrong");
    }
  }

  handleReset() {
    this.errors = 0;
    this.statsData.sendToServer({ reset: "reset" });
    window.location.reload();
  }

  handleclicks = (event) => {
    const element = event.target;
    const card = element.closest(".card");
    if (element.closest(".switch")) {
      this.toggleMode();
    } else if (element.closest(".statistics")) {
      Component.changeDesign("train");
    } else if (element.closest(".audio-controls")) {
      this.handleAudioControlsCLick(event, card, element);
    } else if (element.closest(".rotate-controls")) {
      Component.rotateBack(event, card);
    } else if (element.closest(".icon_start")) {
      this.handleStartButtonClick(element);
    } else if (this.mode === "play" && card) {
      this.handleGameMode(event);
    } else if (element.closest(".icon_repeat")) {
      AudioComponent.repeatPronouncedWord(this.currentID);
    } else if (element.closest(".stats__button-repeat_difficult")) {
      this.errors = 0;
    } else if (element.closest(".stats__button-reset")) {
      this.handleReset();
    }
  };

  addListeners() {
    body.addEventListener("click", this.handleclicks);
    document.addEventListener("DOMContentLoaded", this.defineSettingsForPage);
    SortableTable.addSortTable();
  }

  addNavigation() {
    const navigation = new Navigation();
    navigation.addListeners();
  }
}

const application = new App();
application.addNavigation();
application.addListeners();

export { App };
