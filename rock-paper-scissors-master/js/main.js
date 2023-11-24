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
        this.game = new Game();
        this.eventBind();

        // 세팅페이지 띄워줌
        this.setting.show();
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

            this.joinUser.setting( settingInfo );
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
        
    }

}


class Setting {

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
            window.settingInfo = {
                maximumCapacity : Number($setting.maximumCapacity.value),
                joinBalloonCount : Number($setting.joinBalloonCount.value),
                rounds : Number($setting.rounds.value),
            }

            this.finish();
        }
    }
}

class JoinUser {

    setting(value){
        document.getElementById('$maximumCapacity').innerText = value.maximumCapacity;

    }

    start(){
        document.querySelector('#joinUser').style.display = 'flex';
        info.state = STATE.RECRUIT;
    }

    finish(){
        document.querySelector('#joinUser').style.display = 'none';
    }

    recruiting(){
        document.querySelector('#recruitBtn').innerHTML = '모집완료하기'

        this.recruited();
    }

    recruited(){

        info.state = STATE.RECRUIT_FINISH

        document.querySelector('#recruitBtn').innerHTML = '모집완료'
        this.finish();
    }
    
}

class Game {
}