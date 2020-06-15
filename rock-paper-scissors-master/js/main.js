const stepOne = document.querySelector(".content-step-one");
const stepTwo = document.querySelector(".content-step-two");
let stepOneDom = document.createElement("div");
let stepTwoDom = document.createElement("div");

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
  let score = document.querySelector(".value");
  score.innerHTML = "0";
};

const createStepTwoUI = value => {
  stepTwoDom.classList.add("content-step-two");
  stepTwoDom.innerHTML = `
  <div class="user-pick">
    YOU PICKED
    <div class="user-value ${value}">
      <img src="./images/icon-${value}.svg" alt="" />
    </div>
  </div>

  <div class="content-step-three">
    YOU LOSE
    <button>PLAY AGAIN</button>
  </div>

  <div class="computer-pick">
    THE HOUSE PICKED
    <div class="computer-value none">
      <img src="./images/icon-scissors.svg" alt="" />
    </div>
  </div>
  `;

  document.body.appendChild(stepTwoDom);
};

const eventBindStepOne = () => {
  let userButton = stepOneDom.querySelectorAll("div");
  userButton.forEach(e => {
    e.addEventListener("click", function () {
      console.log(this.className);
      stepOneDom.remove();
      createStepTwoUI(this.className);
    });
  });
};

// 처음시작할 때
if (stepOne === null && stepTwo === null) {
  console.log("STEP 1 : ", stepOne);
  createStepOneUI();
  eventBindStepOne();
}

if (stepTwo) {
  console.log("STEP 2 : ", stepTwo);
}
