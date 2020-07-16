class rockScissorsPaper {
  constructor() {
    this.value = ["rock", "scissors", "paper"];
    this.computerValue = this.value[Math.floor(Math.random() * 3)];
    this.score = localStorage.getItem("score") | 0;

    this.build();
  }

  build() {
    this.stepOne = document.querySelector(".content-step-one");
    this.stepTwo = document.querySelector(".content-step-two");

    this.stepOneDom = document.createElement("div");
    this.stepTwoDom = document.createElement("div");
    this.scoreDom = document.querySelector(".value");
  }

  setStepOne() {
    this.createStepOneUI();
    this.eventBindStepOne();
  }

  setStepTwo() {
    this.createStepTwoUI();
    this.eventBindStepTwo();
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
    let result = this.getGameResult(value);

    if (result === "YOU WIN") {
      ++this.score;
    } else if (result === "YOU LOSE") {
      --this.score;
    }

    localStorage.setItem("score", this.score);
    this.scoreDom.innerHTML = this.score;
  }

  createStepOneUI() {
    // UI 생성
    this.stepOneDom.classList.add("content-step-one");
    this.stepOneDom.innerHTML = `
        <div class="paper">
          <img src="./images/icon-paper.svg" alt="">
        </div>
          <div class="scissors">
        <img src="./images/icon-scissors.svg" alt="">
          </div>
        <div class="rock">
          <img src="./images/icon-rock.svg" alt="">
        </div>
    `;

    document.body.appendChild(this.stepOneDom);

    // Score 값 셋팅
    this.scoreDom.innerHTML = this.score;
  }

  createStepTwoUI(value) {
    this.stepTwoDom.classList.add("content-step-two");
    this.stepTwoDom.innerHTML = `
    <div class="user-pick">
      YOU PICKED
      <div class="user-value ${value}">
        <img src="./images/icon-${value}.svg" alt="" />
      </div>
    </div>
  
    <div class="content-step-three">
      ${this.getGameResult(value)}
      <button>PLAY AGAIN</button>
    </div>
  
    <div class="computer-pick">
      THE HOUSE PICKED
      <div class="computer-value ${this.computerValue}">
        <img src="./images/icon-${this.computerValue}.svg" alt="" />
      </div>
    </div>`;

    document.body.appendChild(this.stepTwoDom);
  }

  eventBindStepOne() {
    let userButton = this.stepOneDom.querySelectorAll("div");
    let rule = document.querySelector(".over");
    let rulesOnButton = document.querySelector(".rules_on_Button");
    let rulesOffButton = document.querySelector(".rules_off_Button");

    userButton.forEach(btn => {
      btn.addEventListener("click", e => {
        console.log(e.currentTarget.className);
        this.stepOneDom.remove();
        this.createStepTwoUI(e.currentTarget.className);
        this.eventBindStepTwo();
      });
    });

    rulesOnButton.addEventListener("click", () => {
      rule.style.display = "block";
    });

    rulesOffButton.addEventListener("click", () => {
      rule.style.display = "none";
    });
  }

  eventBindStepTwo() {
    let playAgainButton = this.stepTwoDom.querySelector(
      ".content-step-three button"
    );

    playAgainButton.addEventListener("click", () => {
      location.reload();
      console.log("click");
    });
  }
}
