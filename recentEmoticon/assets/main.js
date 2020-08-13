
class Emoticon {
    constructor(){

        this.emoticonList;
        this.setEmoticonData();
        this.buildUI();
        this.event();
    }

    buildUI(){
    }

    event(){
        document.querySelectorAll('.list').forEach( ele => {
            ele.addEventListener("click", function(e){
                if( e.target === this)  return;
                document.querySelector('input').value += e.target.innerText;
            })
        })
    }

    setEmoticonData(){
        fetch(`https://emoji-api.com/categories/smileys-emotion?access_key=b44e8c37cf2639a8c1382bad72b6ab8ef837ea75`)
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