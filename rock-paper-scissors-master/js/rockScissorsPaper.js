class rockScissorsPaper {
  constructor() {
    this.value = ["rock", "scissor", "paper"];
    this.score = localStorage.getItem("score") | 0;
    this.gameResult = null;
    this.computerValue = null;
    this.selectValue = null;
    
    this.build();
    this.eventBind();
  }

  build() {
    this.stepOne = document.querySelector(".content-step-one");
    this.stepTwo = document.querySelector(".content-step-two");

    document.querySelector('.rules_on_Button').style.display = 'none'
    this.scoreDom = document.querySelector(".value");
    this.setScore();
  }

  ready(){
    // this.stepOne.style.display = 'none'
  }

  eventBind() {
    window.addEventListener('message', ({data}) => {
      if( data && data.cmd === 'msg'){
        document.querySelector(".chat_value").innerText = data.data.message
        document.querySelector(".chat_id").innerText = data.data.nickname
      }
    })

    // 가위 바위 보 클릭시
    this.stepOne.querySelectorAll("div").forEach(btn => {
      btn.addEventListener("click", e => {
        console.log(e.currentTarget.className);
        // 초기화 후
        document.querySelectorAll(".content-step-one div").forEach( ele => ele.style.background = '')
        // 선택한 값만 그래이로
        e.currentTarget.style.background = 'gray'
        this.selectValue = e.currentTarget.className
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
    // this.stepTwo.querySelector(".content-step-three button").addEventListener("click", () => {
    //   this.stepOne.style.display = "flex";
    //   this.stepTwo.style.display = "none";
    //   document.querySelectorAll(".content-step-one div").forEach( ele => ele.style.background = '')
    //   console.log("click");
    // });
  }

  /**
   * 게임 결과 추출 함수
   * @param {string} value - "rock", "scissors", "paper"중 한개의 값을 가짐
   * @return {Number} - -1(패배) ,0(무승부), 1(승리)
   */
  getGameResult = (user, result) => {
    console.log('#getGameResult#', result)
    if( user === undefined ||user === null ) {
      return -1;
    }
    if (user === result) {
      return 0;
    } else {
      switch (this.computerValue) {
        case "rock":
          if (value === "paper") {
            return 1;
          } else {
            return -1;
          }
        case "scissor":
          if (value === "rock") {
            return 1;
          } else {
            return -1;
          }
        case "paper":
          if (value === "scissor") {
            return 1;
          } else {
            return -1;
          }
      }
    }
  };

  // 결과값 저장 및 노출
  setScore() {
    // localStorage.setItem("score", this.score);
    // this.scoreDom.innerHTML = localStorage.getItem("score");
  }

  // 가위 바위보 결과값 노출
  showStepTwoUI(value) {
    // 게임 결과 로직
    let result = this.getGameResult(this.selectValue, value); // 컴퓨터로부터 받은값
    if (result === 1) ++this.score;
    if (result === -1) --this.score;
    this.setScore();

    console.log( this.selectValue )

    // 유저가 선택한 값 UI 노출
    this.stepTwo.querySelector(".user-value").classList.add = value;
    this.stepTwo.querySelector(".user-value img").src = `./images/icon-${value === 'scissor' ?'scissors' : value }.svg`;

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
    console.log(`@@`, value)
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


class bjRSP extends rockScissorsPaper {

  eventBind(){
      super.eventBind();
      
      const resultBox = document.querySelector('#resultBox')

      const endButton = document.createElement('button')
      endButton.style.margin = 'auto'
      endButton.style.marginTop = '3rem'
      endButton.innerText = '완료'
      resultBox.append(endButton);
      endButton.addEventListener('click', () => {
          
          if( this.selectValue ){
              window.extensionSDK.broadcast.send('BJ_CHOICE', {
                  state : 'result',
                  isUser : false,
                  select : this.selectValue 
              });

              
              // 결과 값ㅇ리 옴
              setTimeout( () => {
                  window.extensionSDK.broadcast.send('USER_RESULT', {
                      // 본인 아이디 입력 
                      userId : 'jsp021',
                      value : 1
                  });
              }, 1000)

              // const alert = document.querySelector('#alert');
              // alert.innerHTML = '이긴사람이 없습니다?... 혼자 한건아닌가요?'
          }else {
              // const alert = document.querySelector('#alert');
              // alert.innerHTML = '선택된 값이 없습니다.'
          }

      })

      this.selectValue = null
  }

  getUserResult(message){
      const alert = document.querySelector('#alert');
      const $result = document.createElement('div');
      $result.innerHTML = `${message.userId} : ${message.value == 1 ? '승' : '패'}`
      // let scores = JSON.parse( localStorage.getItem('score') ) || []

      // scores = scores.filter((item) => {
      //     return item.id !== formId;
      // });

      // const scoreList = [...scores, { id : formId, score : message.value} ] ;

      // localStorage.setItem('score', JSON.stringify(scoreList) );



      alert.append($result);
  }

}


class userRSP extends rockScissorsPaper {
  send(value){
      // 유저는 아직 따로 쓰진 않음
  }

  receiver(value){
      console.log(value)
      if( value.state === 'init' ) {
          window.location.reload()
      }else if( value.state === 'BJ_CHOICE') {
          // 컴퓨터 선택값
          this.computerValue = value.select;
          // 기존 UI 미노출
          this.stepOne.style.display = "none";
          // 결과값 노출
          this.showStepTwoUI(value.select);

          if( this.gameResult === 1) {
              window.extensionSDK.broadcast.send('USER_RESULT', {
                  // 본인 아이디 입력 
                  value : this.score
              });
          }
      }
  }
}