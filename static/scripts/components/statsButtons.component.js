import { fragment } from "../constants/constants";

class StatsButtons {
  constructor(statsData, tableContainer = "container") {
    this.statsData = statsData;
    this.tableContainer = tableContainer;
  }

  addButtons(tableContainer) {
    const buttonRepeat = document.createElement("button");
    buttonRepeat.classList.add(
      "stats__button",
      "stats__button-repeat_difficult"
    );
    buttonRepeat.textContent = `Repeat difficult words`;
    const buttonReset = document.createElement("button");
    buttonReset.classList.add("stats__button", "stats__button-reset");
    buttonReset.textContent = `Reset`;
    fragment.append(buttonRepeat);
    fragment.append(buttonReset);
    tableContainer.append(fragment);
  }
}

export { StatsButtons };
