import {
  body,
  // categoryNames,
  // categoryImagesPaths,
} from "../constants/constants";
import {
  Card,
  // CardsContainer
} from "../components/card.component";
// import { cards, categories } from "../../data/cards.data";
import { Navigation } from "../components/navigation.component";
import {
  CategoryCard,
  // CategoryContainer,
} from "../components/categoryCard.component";
import { GameResultContainer } from "../components/gameResult.component";
import { AudioComponent } from "../components/audio.component";
import { StarComponent } from "../components/star.component";
import { StartButtonComponent } from "../components/startButton.component";
import { Component } from "../components/component.component";
import { StatsData } from "../components/statsData";
// import { StatisticsContainer } from "../components/statsTable.component";
import { SortableTable } from "../components/sortableTable.component";

class App {
  constructor(categories, cards) {
    this.categories = categories;
    this.categoriesNames = "";
    this.categoriesImages = "";
    this.categoriesIcons = "";
    this.cards = cards;
    this.mode = "train";
    // this.currentCategory = "None";
    this.errors = 0;
    this.currentID = NaN;
    this.audiogenerator = null;
    this.count = 0;
    this.audioPlayersCount = NaN;
    this.statsData = new StatsData();
    this.difficultWords = [];
  }

  setMode(mode) {
    this.mode = mode;
  }

  toggleMode() {
    StarComponent.hideStars();
    if (this.mode === "train") {
      this.setMode("play");
      Card.changeCardDesignToGameMode();
      CategoryCard.changeCategoriesDesignToGameMode();
      StartButtonComponent.renderStartButton();
      console.log("play mode");
    } else {
      this.setMode("train");
      Card.changeCardDesignToTrainMode();
      CategoryCard.changeCategoriesDesignToTrainMode();
      StartButtonComponent.hideStartButton();
      console.log("train mode");
    }
  }

  // renderCards(event, difficultWords) {
  //   if (difficultWords) {
  //     const wordsToRender = cards
  //       .flat()
  //       .filter((item) => difficultWords.includes(item.word));
  //     const CardsContainerElement = new CardsContainer();
  //     CardsContainerElement.renderDifficultCards(wordsToRender);
  //   } else {
  //     this.currentCategory =
  //       event.target.closest(".category_card")?.id ||
  //       event.target.closest(".toCardPage").id;
  //     const CardsContainerElement = new CardsContainer();
  //     CardsContainerElement.renderCards(
  //       ...Component.chooseAssetsForRendering(this.cards, this.currentCategory)
  //     );
  //   }

  //   if (this.mode === "play") {
  //     Card.changeCardDesignToGameMode();
  //     StartButtonComponent.renderStartButton();
  //   } else {
  //     Card.changeCardDesignToTrainMode();
  //     StartButtonComponent.hideStartButton();
  //   }
  // }

  // renderCategories() {
  //   const Categories = new CategoryContainer();
  //   Categories.renderCategoryCards(categoryNames, categoryImagesPaths);
  //   if (this.mode === "play") {
  //     CategoryCard.changeCategoriesDesignToGameMode();
  //     StartButtonComponent.renderStartButton();
  //   } else {
  //     CategoryCard.changeCategoriesDesignToTrainMode();
  //     StartButtonComponent.hideStartButton();
  //   }
  // }

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

  renderStats() {
    // Component.cleanDOM();
    // const statsContainer = new StatisticsContainer();
    // statsContainer.renderStatistics(
    //   this.cards,
    //   this.categories,
    //   this.statsData
    // );
    SortableTable.addSortTableListener();
  }

  handleclicks = (event) => {
    const element = event.target;
    const card = element.closest(".card");
    this.renderStats();
    if (element.closest(".switch")) {
      this.toggleMode();
    } else if (element.closest(".statistics")) {
      StarComponent.hideStars();
    }
    // else if (
    //   element.closest(".category_card") ||
    //   element.closest(".toCardPage")
    // ) {
    //   Component.cleanDOM();
    //   StarComponent.hideStars();
    //   this.renderCards(event);
    //   this.errors = 0;
    // }
    else if (element.closest(".audio-controls")) {
      AudioComponent.playAudio(event, element);
      this.currentID = card.id;
      this.currentWord = card.querySelector(".card__capture").textContent;
      // this.currentCategory = this.cards.findIndex((x) =>
      //   x.some((e) => e.word === this.currentWord)
      // );
      this.currentCategoryName = window.location.href
        .slice(window.location.href.lastIndexOf("/") + 1)
        .replaceAll("%20", " ")
        .replace("#", "");
      console.log(this.currentCategoryName);
      this.statsData.addTrainItem(this.currentCategoryName, this.currentWord);
      // this.statsData.mirrorToLocalStorage();
      this.statsData.sendToServer(
        this.statsData.postNewItem(+this.currentID.replace('card', ''), 'trained')
      );
    } else if (element.closest(".rotate-controls")) {
      Component.rotateBack(event, card);
    }
    // else if (element.closest(".toMain")) {
    //   Component.cleanDOM();
    //   this.renderCategories();
    // }
    else if (element.closest(".icon_start")) {
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
        // this.currentCategory = this.cards.findIndex((x) =>
        //   x.some((e) => e.word === this.currentWord)
        // );
        this.currentCategoryName = window.location.href
          .slice(window.location.href.lastIndexOf("/") + 1)
          .replaceAll("%20", " ")
          .replace("#", "");
        this.statsData.addGameItem(
          this.currentCategoryName,
          this.currentWord,
          true
        );
        // this.statsData.mirrorToLocalStorage();
        this.statsData.sendToServer(
        this.statsData.postNewItem(+this.currentID.replace('card', ''), 'correct')
      );
        if (!this.isFinished()) {
          this.currentID = this.pronounceWords();
        } else {
          Component.cleanDOM();
          document
            ?.querySelector(".icon_start")
            .classList.remove("icon_start--hidden");
          document
            ?.querySelector(".icon_repeat")
            .classList.add("icon_repeat--hidden");
          StartButtonComponent.hideStartButton();
          StarComponent.hideStars();
          this.renderGameResult();
          setTimeout(Component.cleanDOM, 5000);
          setTimeout(Component.simulatetoMainPageClick, 5000);
          setTimeout(Component.simulateSwitchButtonClick, 5000);
          this.count = 0;
          this.audioPlayersCount = NaN;
        }
      } else {
        StarComponent.renderStar("wrong");
        this.errors++;
        AudioComponent.playErrorAudio();
        this.currentWord = card.querySelector(".card__capture").textContent;
        // this.currentCategory = this.cards.findIndex((x) =>
        //   x.some((e) => e.word === this.currentWord)
        // );
        this.currentCategoryName = window.location.href
          .slice(window.location.href.lastIndexOf("/") + 1)
          .replaceAll("%20", " ")
          .replaceAll("#", "");
        this.statsData.addGameItem(
          this.currentCategoryName,
          this.currentWord,
          false
        );
        // this.statsData.mirrorToLocalStorage();
        this.statsData.sendToServer(
        this.statsData.postNewItem(+this.currentID.replace('card', ''), 'errors')
      );
        if (!this.difficultWords.includes(this.currentWord)) {
          this.difficultWords.push(this.currentWord);
        }
      }
    } else if (element.closest(".icon_repeat")) {
      AudioComponent.repeatPronouncedWord(this.currentID);
    } else if (element.closest(".stats__button-repeat_difficult")) {
      if (this.difficultWords.length) {
        Component.cleanDOM();
        const wordsToRender = this.difficultWords.sort(function (a, b) {
          return a - b;
        });
        const length = Math.min(this.difficultWords.length, 8);
        this.renderCards(event, wordsToRender.slice(0, length));
        this.errors = 0;
      } else {
        console.log("No difficult words");
      }
    } else if (element.closest(".stats__button-reset")) {
      this.statsData = new StatsData();
      // this.statsData.mirrorToLocalStorage();
      this.statsData.sendToServer();
      this.difficultWords = [];
      this.renderStats();
    }
  };

  addListeners() {
    body.addEventListener("click", this.handleclicks);
    // this.statsData.restoreFromLocalStorage();
  }

  addNavigation() {
    console.log("nav");
    const navigation = new Navigation();
    // this.categoriesNames,
    // this.categoriesIcons
    // navigation.addMenuItems();
    navigation.addListeners();
  }
}

const application = new App();
// application.renderCategories();
application.addNavigation();
application.addListeners();

export { App };
