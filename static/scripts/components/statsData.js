class StatsData {
  constructor() {
    this.data = {};
  }

  addGameItem(category, word, correct) {
    this.data[category] = this.data[category] || {};
    this.data[category][word] = this.data[category][word] || {};
    if (correct) {
      this.data[category][word]["correct"] ??= 0;
      this.data[category][word]["correct"]++;
    } else {
      this.data[category][word]["wrong"] ??= 0;
      this.data[category][word]["wrong"]++;
    }
  }

  addTrainItem(category, word) {
    this.data[category] = this.data[category] || {};
    this.data[category][word] = this.data[category][word] || {};

    this.data[category][word]["trained"] ??= 0;
    this.data[category][word]["trained"]++;
  }

  getTrainedItem(category, word) {
    return (
      (this.data[category] &&
        this.data[category][word] &&
        this.data[category][word].trained) ||
      0
    );
  }
  getCorrectItem(category, word) {
    return (
      (this.data[category] &&
        this.data[category][word] &&
        this.data[category][word].correct) ||
      0
    );
  }
  getWrongItem(category, word) {
    return (
      (this.data[category] &&
        this.data[category][word] &&
        this.data[category][word].wrong) ||
      0
    );
  }

  mirrorToLocalStorage() {
    localStorage.setItem("stats", JSON.stringify(this.data));
  }

  restoreFromLocalStorage() {
    this.data = { ...JSON.parse(localStorage.getItem("stats")) };
  }
}

export { StatsData };
