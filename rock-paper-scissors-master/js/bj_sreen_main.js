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