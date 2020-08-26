import {chatInfo} from './chatInfo';

class Emoticon {
    constructor(){
        this.emoticonList;
        this.buildUI();
        this.event();

        this.chatInfo = chatInfo;
        // 최근사용 이모티콘 가져오기 
        chatInfo.getRecentEmoticon();
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
    }

    event(){
        // 이모티콘 리스트 이벤트 바인딩 
        this.emoticonList.addEventListener("click", function(e){
            if( e.target === this)  return;
            document.querySelector('input').value += e.target.innerText;
        })
        
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
        const outputDom = document.createElement('span');
        if( this.emoticonInput.value === ''){
            return;
        }
        let reg = new RegExp('/' + chatInfo.emoticonList().join("|") + '/', 'g');
        let emoticons = this.emoticonInput.value.match(reg);
        chatInfo.setRecentEmoticon(emoticons);

        outputDom.innerText = this.emoticonInput.value;
        this.emoticonOutput.appendChild(outputDom);
        this.emoticonInput.value = '';

        // 이모티콘 리스트 숨기기
        this.hideEmoticonList();
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
}

export default Emoticon;
