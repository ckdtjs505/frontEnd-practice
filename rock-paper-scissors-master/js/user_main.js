class userRSP extends rockScissorsPaper {
    send(value){
        // 유저는 아직 따로 쓰진 않음
    }

    receiver(value){
        if( value.state === 'init' ) {
            window.location.reload()
        }else if( value.state === 'result') {
            // 컴퓨터 선택값
            this.computerValue = value.select;
            // 기존 UI 미노출
            this.stepOne.style.display = "none";
            // 결과값 노출
            this.showStepTwoUI(value.select);

            if( this.gameResult === 1) {
                window.extensionSDK.broadcast.send('user_result', {
                    value : this.score
                });
            }
        }
    }
}