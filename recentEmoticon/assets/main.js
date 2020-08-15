
class Emoticon {
    constructor(){

        this.emoticonList;
       
        this.buildUI();
        this.event();
    }

    buildUI(){
        this.emoticonContainer = document.querySelector('.emoticonContainer');
        this.onEmoticonTap = this.emoticonContainer.querySelector('.tap .on');
        this.emoticonList = this.emoticonContainer.querySelector('.emoticonList');
        
        this.setEmoticonData( this.onEmoticonTap.getAttribute('data-type') );
    }

    event(){
        // 이모티콘 리스트 이벤트 바인딩 
        this.emoticonList.querySelectorAll('.list').forEach( ele => {
            ele.addEventListener("click", function(e){
                if( e.target === this)  return;
                document.querySelector('input').value += e.target.innerText;
            })
        })
        
        // 이모티콘 탭 이벤트 바인딩
        this.emoticonContainer.querySelector('.tap').addEventListener("click",(e) => {
            if( e.target === this)  return;
            this.setEmoticonData( e.target.getAttribute('data-type') );
        });
 
    }

    setEmoticonData( list ){
        fetch(`https://emoji-api.com/categories/${list}?access_key=b44e8c37cf2639a8c1382bad72b6ab8ef837ea75`)
        .then( response => response.json())
        .then( data => { 
            this.emoticonList =  data.map( ele => `
                <span> 
                    <a href="javascript:;">
                        ${ele.character}
                    </a>
                </span>`
            )
                
            document.querySelector('.list ').innerHTML = this.emoticonList.join('');
        })
    }
}