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

  postNewItem(id, action) {
    return {
      id: id,
      action: action,
    };
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

  getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  async sendToServer(stats) {
    const url = window.location.href;
    let data = { data: stats };
    const csrftoken = this.getCookie("csrftoken");

    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRFToken": csrftoken,
        },
      });
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
    } catch (error) {
      console.error("Error:", error);
    }
  }

}

export { StatsData };
