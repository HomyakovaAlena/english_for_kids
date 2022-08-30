import { fragment, container } from "../constants/constants";
import { StatsButtons } from "../components/statsButtons.component";

class StatsTable {
  constructor(cards, categories, statsData) {
    this.cards = cards;
    this.categories = categories;
    this.statsData = statsData;
  }

  createTable() {
    const newElement = document.createElement("div");
    newElement.classList.add("statsTable_container_div");
    newElement.innerHTML = `
  <table class="stats sortable">
    <caption>Your statistics</caption>
    <thead>
      <tr>
        <th scope="col" aria-sort="ascending">
          <button>Category<span aria-hidden="true"></span></button>
        </th>
        <th scope="col">
          <button>Word<span aria-hidden="true"></span></button>
        </th>
        <th scope="col">
          <button>Translation<span aria-hidden="true"></span></button>
        </th>
        <th scope="col" class="num">
          <button>Trained<span aria-hidden="true"></span></button>
        </th>
        <th scope="col" class="num">
          <button>Correct<span aria-hidden="true"></span></button>
        </th>
        <th scope="col" class="num">
          <button>Errors<span aria-hidden="true"></span></button>
        </th>
        <th scope="col" class="num">
          <button>% correct<span aria-hidden="true"></span></button>
        </th>
      </tr>
    </thead>
    <tbody class="stats__table_body" id="stats__table_body"></tbody>
  </table>
  `;
    return newElement;
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

  insertData(tableBody) {
    const categoriesNames = this.categories[0];
    this.cards.forEach((category, categoryIndex) => {
      const currentCategory = categoriesNames[categoryIndex];
      category.forEach((currentWord) => {
        const currWord = currentWord.word;
        const tableRow = document.createElement("tr");
        tableRow.classList.add("stats__row");
        const trained = this.statsData.getTrainedItem(
          currentCategory,
          currWord
        );
        const correct = this.statsData.getCorrectItem(
          currentCategory,
          currWord
        );
        const wrong = this.statsData.getWrongItem(currentCategory, currWord);
        const percentage = Math.round((correct / (correct + wrong)) * 100) || 0;
        tableRow.innerHTML = ` 
            <tr>
            <th scope="row">${currentCategory}</th>
            <td>${currWord}</td>
            <td>${currentWord.translation}</td>
            <td class="num">${trained}</td>
            <td class="num">${correct}</td>
            <td class="num">${wrong}</td>
            <td class="num">${percentage}%</td>
            </tr>`;
        tableBody.append(tableRow);
      });
    });
  }

  renderTable(tableContainer) {
    fragment.append(this.createTable());
    tableContainer.append(fragment);
  }
}

class StatisticsContainer {
  constructor(name = "StatisticsContainer", parent = container) {
    this.name = name;
    this.parent = parent;
  }

  createStatisticsContainer() {
    const newElement = document.createElement("div");
    newElement.classList.add("stats_container");
    return newElement;
  }

  renderStatisticsContainer(element) {
    fragment.append(element);
    this.parent.append(fragment);
    return this;
  }

  renderStatistics(cards, categories, statsData) {
    const statisticsContainer = this.createStatisticsContainer();
    this.renderStatisticsContainer(statisticsContainer);

    const newStatsTable = new StatsTable(cards, categories, statsData);
    const statsButtons = new StatsButtons(statsData, statisticsContainer);
    statsButtons.addButtons(statisticsContainer);
    newStatsTable.renderTable(statisticsContainer);

    const tableBody = document.querySelector(".stats__table_body");
    newStatsTable.insertData(tableBody);

    return this;
  }
}
export { StatsTable, StatisticsContainer };
