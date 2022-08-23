// import "../../data/cards.data";
import { fragment, container, body } from "../constants/constants";

import { Component } from "./component.component";

class CategoryCard extends Component {
  constructor(name, picturePath, cardContainer, id) {
    super(name, picturePath, cardContainer, id);
  }

  createCategoryCard() {
    const newElement = document.createElement("div");
    newElement.classList.add("category_card");
    newElement.id = this.id;
    newElement.innerHTML = `
          <a class="category_card__link" href="#">
            <figure class="category_card__figure">
                <img
                class="category_card__img"
                src="${this.picturePath}"
                alt=${this.pictureAlt}
                />
                <h4 class="category_card__capture">${this.name}</h4>
            </figure>
          </a>`;
    return newElement;
  }

  renderCategoryCard() {
    fragment.append(this.createCategoryCard());
    this.cardContainer.append(fragment);
    return this;
  }

  static changeCategoriesDesignToGameMode() {
    const categoryCards = body.querySelectorAll(".category_card");
    [...categoryCards].forEach((item) => {
      item.classList.add("category_card--gameMode");
    });
  }

  static changeCategoriesDesignToTrainMode() {
    const categoryCards = body.querySelectorAll(".category_card");
    [...categoryCards].forEach((item) => {
      item.classList.remove("category_card--gameMode");
    });
  }
}

class CategoryContainer {
  constructor(name = "Category Container", parent = container) {
    this.name = name;
    this.parent = parent;
  }

  createCategoryContainer() {
    const newElement = document.createElement("div");
    newElement.classList.add("category_container");
    return newElement;
  }

  renderCategoryContainer(element) {
    fragment.append(element);
    this.parent.append(fragment);
    return this;
  }

  renderCategoryCards(categoryNames, categoryImagesPaths) {
    const categoryContainer = this.createCategoryContainer();
    categoryNames.forEach((item, index) => {
      const newCategory = new CategoryCard(
        item,
        categoryImagesPaths[index],
        categoryContainer,
        index
      );
      newCategory.renderCategoryCard();
    });

    this.renderCategoryContainer(categoryContainer);
    return this;
  }
}

export { CategoryCard, CategoryContainer };
