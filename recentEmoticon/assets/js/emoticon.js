import {chatInfo} from './chatInfo';
import Util from './util';

class Emoticon {
    constructor(){
        this.emoticonList;
        this.buildUI();
        this.event();

        this.chatInfo = chatInfo;
        // 최근사용 이모티콘 가져오기 
        window.addEventListener('message', ({data}) => {
            if( data.action !== 'pass') return;
            
            this.emoticonInput.value = JSON.stringify(data)
            this.emoticonOutput.scrollTop = this.emoticonOutput.scrollHeight;
            this.displayChatMsg();
        })
    }

    buildUI(){
        this.emoticonContainer = document.querySelector('.emoticonContainer');
        this.onEmoticonTap = this.emoticonContainer.querySelector('.emoticonTap .on');
        this.emoticonList = this.emoticonContainer.querySelector('.emoticonList');
        this.chatContainer = document.querySelector('.chatContainer');
        this.emoticonInput = this.chatContainer.querySelector('input');
        this.emoticonOutput = this.chatContainer.querySelector('.output');
        this.emoticonToggleButton = this.chatContainer.querySelector('.emoticonToggleButton');
        this.emoticonSendButton = this.chatContainer.querySelector('.sendButton');
        this.headerAlert = document.querySelector('header .alert');
    }

    event(){
        // 이모티콘 리스트 클릭 이벤트 바인딩 
        this.emoticonList.addEventListener("click", this.debounce('click', (e) => {
           
            if( this.emoticonList === e.target) return; // 자기자신 눌렀을때는 예외처리
            document.querySelector('input').value += e.target.innerText;

            // 클립보드 복사 
            Util.cilpCopy(e.target.innerText);
            // 클립보드 복사 얼럿 
            this.headerAlert.style.display = "block";

            let showAlert = setTimeout( () => {
                clearTimeout(showAlert);
                this.headerAlert.style.display = "none";
            }, 3000)

        }, 500));
        
        // 이모티콘 탭 이벤트 바인딩
        this.emoticonContainer.querySelectorAll('.emoticonTap li').forEach( ele => {
            ele.addEventListener("click",(e) => {
                // 같은 탭 클릭시 처리
                if( e.target ===  this.onEmoticonTap) return;
                //이모티콘 탭 활성화
                this.onEmoticonTap.classList.remove("on");
                this.onEmoticonTap = e.target.classList.add("on");
                this.onEmoticonTap = e.target;

                // 데이터 불러오기 전 로딩 UI
                this.emoticonList.innerHTML = `<div class="loader"></div>`;
                // 데이터 불러오기
                this.setEmoticonData( e.target.getAttribute('data-type') );
            });
        })

        // 이모티콘 전송 버튼 
        this.emoticonSendButton.addEventListener("click", () => {
            // create 생성 
            this.sendMessage();
        })

        // 채팅 키입력 이벤트
        this.emoticonInput.addEventListener("keyup", (e)=>{
            const {key} = e;
            if( key === "Enter"){
                this.sendMessage();
            }
        })

        // 이모티콘 버튼 이벤트 
        this.emoticonToggleButton.addEventListener("click", ()=> {
            if( !this.emoticonContainer.classList.contains('on') ){
                this.showEmoticonList();
            }else {
                this.hideEmoticonList();
            }
        })
    }
    // 메시지 전송
    sendMessage(){
        const reg = new RegExp('/' + chatInfo.emoticonList().join("|") + '/', 'g');
        const emoticons = this.emoticonInput.value.match(reg);

        // 채팅 메시지가 없으면 메시지 전송 안함.
        if( this.emoticonInput.value === '')
            return;

        window.parent.postMessage( { 
            action : 'chat',
            msg : this.emoticonInput.value
        }, '*' )
        this.emoticonOutput.scrollTop = this.emoticonOutput.scrollHeight;

        // 최근사용 이모티콘 저장 
        if (chatInfo.validationEmoticon(emoticons)) chatInfo.setRecentEmoticon(emoticons);

        // 채팅 돔 생성 
        this.displayChatMsg();

        // 이모티콘 리스트 숨기기
        this.hideEmoticonList();
    }

    // 채팅 돔 생성 
    displayChatMsg(){
        const outputDom = document.createElement('span');
        outputDom.innerText = this.emoticonInput.value;
        this.emoticonOutput.appendChild(outputDom);
        this.emoticonInput.value = '';
    }

    async setEmoticonData( list ){
        switch( list ){
            case "recentEmoticon":
                if( chatInfo.getRecentEmoticon().length === 0 ){
                    // 최근사용 이모티콘이 없습니다. 
                    this.emoticonList.innerHTML = `최근사용 이모티콘이 없습니다.`;
                    this.emoticonList.style.display = "block"
                }else {
                    this.createEmotionList([...chatInfo.getRecentEmoticon()].reverse());
                }
                break;
            case "smileys-emotion":
                this.createEmotionList(chatInfo.emoticonListSmileys);
                break;
            case "travel-places":
                this.createEmotionList(chatInfo.emoticonListTravel);
                break;
            case "animals-nature":
                this.createEmotionList(chatInfo.emoticonListAnimals);
                break;
        }

    }
    /**
     * 이모티콘 리스트 생성 
    **/ 
    createEmotionList(emoticons){
        this.emoticonList.innerHTML = emoticons.map( ele => {
            if ( !chatInfo.errorEmoticonList.includes(ele.character || ele)  )
                return  `
                    <span> 
                        <a href="javascript:;">
                            ${ele.character || ele}
                        </a>
                    </span>`
            }
        ).join('');
        this.emoticonList.style.display = "grid"
    }
    /** 
     * 이모티콘 리스트 숨기기 
    */
    hideEmoticonList(){
        this.emoticonContainer.classList.remove("on");
    }
    /** 
     * 이모티콘 리스트 보이기 
    */
    showEmoticonList(){
        this.emoticonContainer.classList.add("on");
        this.setEmoticonData( this.onEmoticonTap.getAttribute('data-type') );
    }

    debounce (event, func, wait) {
        let timeoutId = null;
        return function (event) {
            var self = this;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(func.bind(self, event), wait);
        };
    }
}

export default Emoticon;
