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

                window.extensionSDK.broadcast.send('GAME_START', {
                    user_list : this.joinUser.userList
                });

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

class BJScreenMain extends Main {
    constructor(){
        super();
        this.setting = new Setting();
        this.joinUser = new JoinUser();
        this.game = new bjRSP();
        this.eventBind();
        // 세팅페이지 띄워줌
        this.setting.start();
    }

    receive(action, message){
        switch (action) {
			case 'BALLOON_GIFTED':
                // 참여 유저에 넣는다
                this.joinUser.addUser(message, this.setting.settingInfo.joinBalloonCount)
                // 참여한 유저의 경우에만 가위 바위보 페이지가 노출되게 한다. 
				break;
            case 'USER_RESULT':
                this.game.getUserResult(message)
                break;
        }
    }


}

class UserScreenMain extends Main {
    constructor() {
        super();
        this.game = new userRSP();
    }

    receive(action, message){
        switch (action) {
			case 'BALLOON_GIFTED':
                this.joinUser.addUser(message, this.setting.settingInfo.joinBalloonCount );
                // 참여한 유저의 경우에만 가위 바위보 페이지가 노출되게 한다. 
				break;
            case 'BJ_CHOICE' :
                // BJ의 결과 값 
                // 유저는 BJ의 결과값을 받아. 승 패 여부를 전달한다.
                break;
            case 'GAME_START':
                // 게임 시작 조건에 만족한 참여 유저
                // this.game.start(); 이런 느낌이여 할듯듯
                break;
        }
    }

}


class Setting {  
    constructor(){
        this.settingInfo = {
            maximumCapacity : 1,
            joinBalloonCount : 1,
            // rounds : 1,
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
                // rounds : Number($setting.rounds.value),
            }

            $setting.joinBalloonCount.disabled = true;
            $setting.maximumCapacity.disabled = true;
            // $setting.rounds.disabled = true;
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

    addUser(message, joinBalloonCount){

        if( message.count != joinBalloonCount){
            return false;
        }

        if(this.userList.length === this.maximumCapacity ){
            return false;
        }

        if(this.userList.includes(message.userId)){
            return false;
        }

        this.userList.push(message.userId);

        document.querySelector('#joinCnt').innerText = this.userList.length;
        document.createElement('li').innerText = 
        document.querySelector("#joinUserList").innerHTML = `${this.userList.map( (id) => {
            return `<li> ${id}</li>`
        }).join('')}`
        
        return true;
    }

    recruiting(){
        // document.querySelector('#recruitBtn').innerHTML = '모집완료하기'

        // this.recruited();
    }

    setValue(value){
        this.userValue = this.userList.map

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