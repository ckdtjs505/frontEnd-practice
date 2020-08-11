
class Emoticon {
    constructor(){

        this.emoticonList;
        this.setEmoticonData();
        this.buildUI();
    }

    buildUI(){
    }

    setEmoticonData(){
        fetch(`https://emoji-api.com/categories/travel-places?access_key=b44e8c37cf2639a8c1382bad72b6ab8ef837ea75`)
        .then( response => response.json())
        .then( data => { 
            this.emoticonList =  data.map( ele => ele.character);
            document.querySelector('.list ul').innerHTML = this.emoticonList;
        })
    }
}