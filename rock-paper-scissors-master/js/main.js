const stepOne = document.querySelector(".content-step-one");
const stepTwo = document.querySelector(".content-step-two");

let stepOneDom = document.createElement("div");
let stepTwoDom = document.createElement("div");
let scoreDom = document.querySelector(".value");

let value = ["rock", "scissors", "paper"];
const computerValue = value[Math.floor(Math.random() * 3)];

let score;

const createStepOneUI = () => {
  // UI 생성
  stepOneDom.classList.add("content-step-one");
  stepOneDom.innerHTML = `
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

  document.body.appendChild(stepOneDom);

  // Score 값 셋팅
  scoreDom.innerHTML = score;
};

const createStepTwoUI = value => {
  let result;
  if (computerValue === value) {
    result = "Draw";
  } else {
    switch (computerValue) {
      case "rock":
        if (value === "paper") {
          result = "YOU WIN";
        } else {
          result = "YOU LOSE";
        }
        break;
      case "scissors":
        if (value === "rock") {
          result = "YOU WIN";
        } else {
          result = "YOU LOSE";
        }
        break;
      case "paper":
        if (value === "scissors") {
          result = "YOU WIN";
        } else {
          result = "YOU LOSE";
        }
        break;
    }
  }

  if (result === "YOU WIN") {
    ++score;
  } else if (result === "YOU LOSE") {
    --score;
  }

  localStorage.setItem("score", score);
  scoreDom.innerHTML = score;

  stepTwoDom.classList.add("content-step-two");
  stepTwoDom.innerHTML = `
  <div class="user-pick">
    YOU PICKED
    <div class="user-value ${value}">
      <img src="./images/icon-${value}.svg" alt="" />
    </div>
  </div>

  <div class="content-step-three">
    ${result}
    <button>PLAY AGAIN</button>
  </div>

  <div class="computer-pick">
    THE HOUSE PICKED
    <div class="computer-value ${computerValue}">
      <img src="./images/icon-${computerValue}.svg" alt="" />
    </div>
  </div>`;

  document.body.appendChild(stepTwoDom);
};

const eventBindStepOne = () => {
  let userButton = stepOneDom.querySelectorAll("div");
  let rule = document.querySelector(".over");
  let rulesOnButton = document.querySelector(".rules_on_Button");
  let rulesOffButton = document.querySelector(".rules_off_Button");

  userButton.forEach(e => {
    e.addEventListener("click", function () {
      console.log(this.className);
      stepOneDom.remove();
      createStepTwoUI(this.className);
      eventBindStepTwo();
    });
  });

  rulesOnButton.addEventListener("click", () => {
    rule.style.display = "block";
  });

  rulesOffButton.addEventListener("click", () => {
    rule.style.display = "none";
  });
};

const eventBindStepTwo = () => {
  let playAgainButton = stepTwoDom.querySelector(".content-step-three button");

  playAgainButton.addEventListener("click", () => {
    location.reload();
    console.log("click");
  });
};

// 처음시작할 때
if (stepOne === null && stepTwo === null) {
  score = !localStorage.getItem("score") ? 0 : localStorage.getItem("score");

  createStepOneUI();
  eventBindStepOne();
}

if (stepTwo) {
  console.log("STEP 2 : ", stepTwo);
}
