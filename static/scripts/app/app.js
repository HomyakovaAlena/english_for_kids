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
    this.difficultWords = [];
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
      console.log("play mode");
      localStorage.setItem("mode", "play");
      this.disableCardsBeforeStart();
    } else {
      this.setMode("train");
      Component.changeDesign("train");
      console.log("train mode");
      localStorage.setItem("mode", "train");
      this.disableCardsBeforeStart();
    }
  }

  disableCardsBeforeStart() {
    console.log(this.count, "this.count");
    console.log(localStorage.getItem("mode"));
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
    const gameResultContainer = new GameResultContainer();
    if (this.errors === 0) {
      gameResultContainer.renderGameResult("success", this.errors);
      AudioComponent.playSuccessAudio();
    } else {
      gameResultContainer.renderGameResult("failure", this.errors);
      AudioComponent.playFailureAudio();
    }
  }


  handleclicks = (event) => {
    const element = event.target;
    const card = element.closest(".card");
    if (element.closest(".switch")) {
      this.toggleMode();
    } else if (element.closest(".statistics")) {
      Component.changeDesign("train");
    } else if (element.closest(".audio-controls")) {
      AudioComponent.playAudio(event, element);
      this.currentID = card.id;
      this.currentWord = card.querySelector(".card__capture").textContent;
      this.currentCategoryName = window.location.href
        .slice(window.location.href.lastIndexOf("/") + 1)
        .replaceAll("%20", " ")
        .replace("#", "");
      this.statsData.sendToServer(
        this.statsData.postNewItem(
          +this.currentID.replace("card", ""),
          "trained"
        )
      );
    } else if (element.closest(".rotate-controls")) {
      Component.rotateBack(event, card);
    } else if (element.closest(".icon_start")) {
      this.isStarted = true;
      this.disableCardsBeforeStart();
      this.generateAudio();
      this.currentID = this.pronounceWords();
      element.closest(".icon_start").classList.add("icon_start--hidden");
      body
        .querySelector(".icon_repeat")
        .classList.remove("icon_repeat--hidden");
    } else if (this.mode === "play" && card) {
      const isRight = this.defineAccuracy(event, this.currentID);
      if (isRight) {
        this.count++;
        StarComponent.renderStar("right");
        AudioComponent.playCorrectAudio();
        this.currentWord = card.querySelector(".card__capture").textContent;
        this.currentCategoryName = window.location.href
          .slice(window.location.href.lastIndexOf("/") + 1)
          .replaceAll("%20", " ")
          .replace("#", "");
        this.statsData.sendToServer(
          this.statsData.postNewItem(
            +this.currentID.replace("card", ""),
            "correct"
          )
        );
        if (!this.isFinished()) {
          this.currentID = this.pronounceWords();
        } else {
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
      } else {
        StarComponent.renderStar("wrong");
        this.errors++;
        AudioComponent.playErrorAudio();
        this.currentWord = card.querySelector(".card__capture").textContent;
        this.currentCategoryName = window.location.href
          .slice(window.location.href.lastIndexOf("/") + 1)
          .replaceAll("%20", " ")
          .replaceAll("#", "");
        this.statsData.sendToServer(
          this.statsData.postNewItem(
            +this.currentID.replace("card", ""),
            "errors"
          )
        );
        if (!this.difficultWords.includes(this.currentWord)) {
          this.difficultWords.push(this.currentWord);
        }
      }
    } else if (element.closest(".icon_repeat")) {
      AudioComponent.repeatPronouncedWord(this.currentID);
    }
    // else if (element.closest(".stats__button-repeat_difficult")) {
    //   if (this.difficultWords.length) {
    //     Component.cleanDOM();
    //     const wordsToRender = this.difficultWords.sort(function (a, b) {
    //       return a - b;
    //     });
    //     const length = Math.min(this.difficultWords.length, 8);
    //     this.renderCards(event, wordsToRender.slice(0, length));
    //     this.errors = 0;
    //   } else {
    //     console.log("No difficult words");
    //   }
    // } else if (element.closest(".stats__button-reset")) {
    //   this.statsData = new StatsData();
    //   this.statsData.sendToServer();
    //   this.difficultWords = [];
    // }
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
