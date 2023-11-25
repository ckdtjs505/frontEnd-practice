const STATE = {
    SETTING : 'SETTING',
    SETTING_FINISH : 'SETTING_FINISH',
    RECRUIT : 'RECRUIT',
    RECRUIT_FINISH : 'RECRUIT_FINISH',
}

const info = {
    // settingInfo: { },
    state : '',
}


class Main {
    constructor() {
        this.setting = new Setting();
        this.joinUser = new JoinUser();
        this.game = new bjRSP();
        this.eventBind();
        // 세팅페이지 띄워줌
        this.setting.start();
    }

    eventBind(){
        // 셋팅쪽 
        document.getElementById('settingIcon').addEventListener('click', () => {
            this.setting.start();
        })

        document.getElementById('closeModal').addEventListener('click', ()=>{
            this.setting.finish();
        })

        document.getElementById('settingSave').addEventListener('click', ()=>{
            this.setting.save();

            document.getElementById('joinUserIcon').style.display = "block";
            this.joinUser.setting( this.setting.settingInfo.maximumCapacity );
            this.joinUser.start();
        })

        // 유저 참여 쪽 
        document.getElementById('joinUserIcon').addEventListener('click', () => {
            this.joinUser.start();
        })

        document.getElementById('joinUserModal').addEventListener('click', ()=>{
            this.joinUser.finish();
        })

        document.querySelector('#recruitBtn').addEventListener('click', () => {
            // 모집중일 때는 모집 완료
            if( info.state === STATE.RECRUIT   ){
                this.joinUser.recruited();
            }else {
                // 그이외 모집중이 아닌 경우에는
                this.joinUser.finish();
            }
        })
        

        document.querySelector('#reloadIcon').addEventListener( 'click', () => {
            document.querySelectorAll(".content-step-one div").forEach( ele => ele.style.background = '')

            // window.extensionSDK.broadcast.send('result', {
            //     state : 'init',
            // });

            setTimeout( () => {
                window.location.reload()
            },1000)
        })
    }

}

class Setting {  
    constructor(){
        this.settingInfo = {
            maximumCapacity : 1,
            joinBalloonCount : 1,
            rounds : 1,
        }
    }

    start(){
        document.getElementById('modal').style.display = 'flex';
        info.state = STATE.SETTING;
    }

    finish(){
        document.getElementById('modal').style.display = 'none';
        info.state = STATE.SETTING_FINISH;
    }

    save(){
        const $setting = document.setting;
        if(!$setting.joinBalloonCount.value ){
            alert('no 2')
            return;
        }else {


            this.settingInfo = {
                maximumCapacity : Number($setting.maximumCapacity.value),
                joinBalloonCount : Number($setting.joinBalloonCount.value),
                rounds : Number($setting.rounds.value),
            }

            $setting.joinBalloonCount.disabled = true;
            $setting.maximumCapacity.disabled = true;
            $setting.rounds.disabled = true;
            document.querySelector("#settingSave").disabled = true;

            document.getElementById('closeModal').style.display = 'block';
            this.finish();
        }
    }
}

class JoinUser {
    constructor(){
        this.userList = [];
    }


    setting(value){
        document.getElementById('$maximumCapacity').innerText = value;
        this.maximumCapacity = value;
    }

    start(){
        document.querySelector('#joinUser').style.display = 'flex';
        info.state = STATE.RECRUIT;
    }

    finish(){
        document.querySelector('#joinUser').style.display = 'none';       
    }

    addUser(message){
        message = {
            userId  : 'ckdtjs505',
            userNickname : "soina"
        }

        if(this.userList.length === this.maximumCapacity ){
            return;
        }

        if(this.userList.includes(message.userNickname)){
            return;
        }

        this.userList.push(message.userNickname)

        document.querySelector('#joinCnt').innerText = this.userList.length;
        document.createElement('li').innerText = 
        document.querySelector("#joinUserList").innerHTML = `${this.userList.map( (nickname) => {
            return `<li> ${nickname}</li>`
        }).join('')}`
        
    }

    recruiting(){
        // document.querySelector('#recruitBtn').innerHTML = '모집완료하기'

        // this.recruited();
    }

    recruited(){

        info.state = STATE.RECRUIT_FINISH;

        document.querySelector('#recruitBtn').innerHTML = '모집완료'

        document.querySelector('#recruitBtn').disabled = true;

        document.querySelector('#joinUserModal').style.display = 'block'; 

        this.finish(); 
    }
    
}

class Game {
}