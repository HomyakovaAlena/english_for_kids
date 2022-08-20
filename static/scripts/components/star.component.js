import { body, fragment } from "../constants/constants";
import { Component } from "./component.component";

class StarComponent extends Component {
  constructor(name) {
    super(name);
  }

  static renderStar(type) {
    const starsLine = body.querySelector(".stars_line");
    starsLine.classList.remove("stars_line--hidden");
    const starElement = document.createElement("span");

    if (type === "right") {
      starElement.classList.add(
        "stars_line__icon_star",
        "icon_star",
        "icon_star--right"
      );
    } else if (type === "wrong") {
      starElement.classList.add(
        "stars_line__icon_star",
        "icon_star",
        "icon_star--wrong"
      );
    }

    starElement.innerHTML = `<i class="fa-solid fa-star"></i>`;

    fragment.append(starElement);
    starsLine.append(fragment);
  }

  static hideStars() {
    const stars = body.querySelector(".stars_line");
    stars.classList.add("stars_line--hidden");
    while (stars.firstChild) {
      stars.removeChild(stars.firstChild);
    }
  }
}

export { StarComponent };
