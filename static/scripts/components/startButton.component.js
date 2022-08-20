import { body } from "../constants/constants";
import { Component } from "./component.component";

class StartButtonComponent extends Component {
  constructor(name) {
    super(name);
  }

  static renderStartButton() {
    const startButton = body.querySelector(".start_line");
    startButton.classList.remove("start_line--hidden");
  }

  static hideStartButton() {
    const stars = body.querySelector(".start_line");
    stars.classList.add("start_line--hidden");
  }
}

export { StartButtonComponent };
