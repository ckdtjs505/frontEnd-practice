class bjRSP extends rockScissorsPaper {

    eventBind(){
        super.eventBind();
        
        const resultBox = document.querySelector('#resultBox')

        const endButton = document.createElement('button')
        endButton.innerText = '제출하기'
        resultBox.append(endButton);
        endButton.addEventListener('click', () => {
            
            if( this.selectValue ){
                window.extensionSDK.broadcast.send('result', {
                    state : 'result',
                    isUser : false,
                    select : this.selectValue 
                });

                const alert = document.querySelector('#alert');
                alert.innerHTML = '이긴사람이 없습니다?... 혼자 한건아닌가요?'
            }else {
                const alert = document.querySelector('#alert');
                alert.innerHTML = '선택된 값이 없습니다.'
            }

        })

        const initButton = document.createElement('button');
        initButton.innerText = '다시 하기'
        this.selectValue = null
        resultBox.append(initButton);
        initButton.addEventListener('click', () => {
            document.querySelectorAll(".content-step-one div").forEach( ele => ele.style.background = '')
            window.extensionSDK.broadcast.send('result', {
                state : 'init',
            });

            setTimeout( () => {
                window.location.reload()
            },1000)
        })
    }


    receiver(action, message, formId){

        if( action === 'user_result') {

            const alert = document.querySelector('#alert');
            let scores = JSON.parse( localStorage.getItem('score') ) || []

            scores = scores.filter((item) => {
                return item.id !== formId;
            });

            const scoreList = [...scores, { id : formId, score : message.value} ] ;

            localStorage.setItem('score', JSON.stringify(scoreList) );
            alert.innerHTML = 
            `이긴 사람 ${
                scoreList.map( ({id, score}) => {
                    return `<div> id : ${id} 점수 : ${score}  </div>`
                }).join('')
            }`
            console.log(message, formId)
        }
    }

}