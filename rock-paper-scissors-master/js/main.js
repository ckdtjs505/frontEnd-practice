class rockScissorsPaper {
  constructor() {
    this.value = ["rock", "scissors", "paper"];
    this.score = localStorage.getItem("score") | 0;
    this.gameResult = null;
    this.computerValue = null;

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
    // 가위 바위 보 클릭시
    this.stepOne.querySelectorAll("div").forEach(btn => {
      btn.addEventListener("click", e => {
        console.log(e.currentTarget.className);
        // 컴퓨터 선택값
        this.computerValue = this.value[Math.floor(Math.random() * 3)];
        // 기존 UI 미노출
        this.stepOne.style.display = "none";
        // 결과값 노출
        this.showStepTwoUI(e.currentTarget.className);
      });
    });

    // Rules 버튼 클릭시
    document.querySelector(".rules_on_Button").addEventListener("click", () => {
      document.querySelector(".over").style.display = "block";
    });

    // Rules 종료 버튼 클릭시
    document.querySelector(".rules_off_Button").addEventListener("click", () => {
      document.querySelector(".over").style.display = "none";
    });

    // PLAY AGAIN BUTTON 클릭시 - stepOne 화면 재노출
    this.stepTwo.querySelector(".content-step-three button").addEventListener("click", () => {
      this.stepOne.style.display = "grid";
      this.stepTwo.style.display = "none";
      console.log("click");
    });
  }

  /**
   * 게임 결과 추출 함수
   * @param {string} value - "rock", "scissors", "paper"중 한개의 값을 가짐
   * @return {Number} - -1(패배) ,0(무승부), 1(승리)
   */
  getGameResult = value => {
    if (this.computerValue === value) {
      return 0;
    } else {
      switch (this.computerValue) {
        case "rock":
          if (value === "paper") {
            return 1;
          } else {
            return -1;
          }
        case "scissors":
          if (value === "rock") {
            return 1;
          } else {
            return -1;
          }
        case "paper":
          if (value === "scissors") {
            return 1;
          } else {
            return -1;
          }
      }
    }
  };

  // 결과값 저장 및 노출
  setScore() {
    localStorage.setItem("score", this.score);
    this.scoreDom.innerHTML = localStorage.getItem("score");
  }

  // 가위 바위보 결과값 노출
  showStepTwoUI(value) {
    // 게임 결과 로직
    let result = this.getGameResult(value);
    if (result === 1) ++this.score;
    if (result === -1) --this.score;
    this.setScore();

    // 유저가 선택한 값 UI 노출
    this.stepTwo.querySelector(".user-value").classList.add = value;
    this.stepTwo.querySelector(".user-value img").src = `./images/icon-${value}.svg`;

    // 결과 값 노출
    this.stepTwo.querySelector(".content-step-three div").innerText = this.showResultNumToStr(
      result
    );

    // 컴퓨터가 선택한 값 UI 노출
    this.stepTwo.querySelector(".computer-value").classList.add = this.computerValue;
    this.stepTwo.querySelector(
      ".computer-value img"
    ).src = `./images/icon-${this.computerValue}.svg`;

    // 결과값 노출
    this.stepTwo.style.display = "flex";
  }

  showResultNumToStr(value) {
    switch (value) {
      case 1:
        return "YOU WIN";
      case -1:
        return "YOU LOSE";
      case 0:
        return "Draw";
    }
  }
}
