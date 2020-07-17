class rockScissorsPaper {
  constructor() {
    this.value = ["rock", "scissors", "paper"];
    this.computerValue = this.value[Math.floor(Math.random() * 3)];
    this.score = localStorage.getItem("score") | 0;
    this.gameResult = null;

    this.build();
    this.eventBind();
  }

  build() {
    this.stepOne = document.querySelector(".content-step-one");
    this.stepTwo = document.querySelector(".content-step-two");

    this.scoreDom = document.querySelector(".value");
    this.setScore();
  }

  eventBind() {
    this.stepOne.querySelectorAll("div").forEach(btn => {
      btn.addEventListener("click", e => {
        console.log(e.currentTarget.className);
        this.stepOne.style.display = "none";

        this.createStepTwoUI(e.currentTarget.className);
        this.stepTwo.style.display = "flex";
      });
    });

    document.querySelector(".rules_on_Button").addEventListener("click", () => {
      document.querySelector(".over").style.display = "block";
    });

    document.querySelector(".rules_off_Button").addEventListener("click", () => {
      document.querySelector(".over").style.display = "none";
    });

    this.stepTwo.querySelector(".content-step-three button").addEventListener("click", () => {
      location.reload();
      console.log("click");
    });
  }

  getGameResult = value => {
    if (this.computerValue === value) {
      return "Draw";
    } else {
      switch (this.computerValue) {
        case "rock":
          if (value === "paper") {
            return "YOU WIN";
          } else {
            return "YOU LOSE";
          }
        case "scissors":
          if (value === "rock") {
            return "YOU WIN";
          } else {
            return "YOU LOSE";
          }
        case "paper":
          if (value === "scissors") {
            return "YOU WIN";
          } else {
            return "YOU LOSE";
          }
      }
    }
  };

  setScore() {
    localStorage.setItem("score", this.score);
    this.scoreDom.innerHTML = localStorage.getItem("score");
  }

  createStepTwoUI(value) {
    let result = this.getGameResult(value);
    if (result === "YOU WIN") ++this.score;
    if (result === "YOU LOSE") --this.score;
    this.setScore();

    // 유저가 선택한 값 UI 노출
    this.stepTwo.querySelector(".user-value").classList.add = value;
    this.stepTwo.querySelector(".user-value img").src = `./images/icon-${value}.svg`;

    // 결과 값 노출
    this.stepTwo.querySelector(".content-step-three div").innerText = result;

    // 컴퓨터가 선택한 값 UI 노출
    this.stepTwo.querySelector(".computer-value").classList.add = this.computerValue;
    this.stepTwo.querySelector(
      ".computer-value img"
    ).src = `./images/icon-${this.computerValue}.svg`;
  }
}
