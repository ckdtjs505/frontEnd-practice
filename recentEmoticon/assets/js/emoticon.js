import { getEmoticonsData } from './api';

class Emoticon {
    constructor(){
        this.emoticonList;
        this.buildUI();
        this.event();
    }

    buildUI(){
        this.emoticonContainer = document.querySelector('.emoticonContainer');
        this.onEmoticonTap = this.emoticonContainer.querySelector('.emoticonTap .on');
        this.emoticonList = this.emoticonContainer.querySelector('.emoticonList');
        console.log(this.emoticonList)
        this.setEmoticonData( this.onEmoticonTap.getAttribute('data-type') );
    }

    event(){
        // 이모티콘 리스트 이벤트 바인딩 
        this.emoticonList.addEventListener("click", function(e){
            if( e.target === this)  return;
            document.querySelector('input').value += e.target.innerText;
        })
        
        // 이모티콘 탭 이벤트 바인딩
        this.emoticonContainer.querySelector('.emoticonTap').addEventListener("click",(e) => {
            if( e.target === this)  return;
            //이모티콘 탭 활성화
            this.onEmoticonTap.classList.remove("on");
            this.onEmoticonTap = e.target.classList.add("on");
            this.onEmoticonTap =e.target;

            // 데이터 불러오기 전 로딩 UI
            this.emoticonList.innerHTML = `<div class="loader"></div>`
            // 데이터 불러오기
            this.setEmoticonData( e.target.getAttribute('data-type') );
        });
 
    }

    async setEmoticonData( list ){
        await getEmoticonsData(list).then( data => { 
            let emoticonList = data.map( ele => {
                let errorEmoticonList = [`🥲`,`🥸`,`🪨`,`🪵`,`🛖`,`♨️`,`🛻`,`🛼`,`🦬`,`🦣`,`🦫`,`🪶`,`🦤`,`🦭`,`🪲`,`🪳`,`🪳`,`🪱`,`🪰`,`🪴`];
                if ( !errorEmoticonList.includes(ele.character)  )
                    return  `
                        <span> 
                            <a href="javascript:;">
                                ${ele.character}
                            </a>
                        </span>`
                }
            )
                
            this.emoticonList.innerHTML = emoticonList.join('');
        })
    }
}

export default Emoticon;
