/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/chatInfo.js":
/*!*******************************!*\
  !*** ./assets/js/chatInfo.js ***!
  \*******************************/
/*! exports provided: chatInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatInfo", function() { return chatInfo; });
const chatInfo = {
    errorEmoticonList : [
        `🥲`,`🥸`,`🪨`,`🪵`,`🛖`,
        `♨️`,`🛻`,`🛼`,`🦬`,`🦣`,
        `🦫`,`🪶`,`🦤`,`🦭`,`🪲`,
        `🪳`,`🪳`,`🪱`,`🪰`,`🪴`],

    emoticonListSmileys : [
        "😀","😃","😄","😁","😆","😅","🤣","😂","🙂","🙃",
        "😉","😊","😇","🥰","😍","🤩","😘","😗","☺️","😚",
        "😙","😋","😛","😜","🤪","😝","🤑","🤗","🤭","🤫",
        "🤔","🤐","🤨","😐","😑","😶","😏","😒","🙄","😬",
        "🤥","😌","😔","😪","🤤","😴","😷","🤒","🤕","🤢",
        "🤮","🤧","🥵","🥶","🥴","😵","🤯","🤠","🥳",
        "😎","🤓","🧐","😕","😟","🙁","☹️","😮","😯","😲",
        "😳","🥺","😦","😧","😨","😰","😥","😢","😭","😱",
        "😖","😣","😞","😓","😩","😫","🥱","😤","😡","😠",
        "🤬","😈","👿","💀","☠️","💩","🤡","👹","👺","👻",
        "👽","👾","🤖","😺","😸","😹","😻","😼","😽","🙀",
        "😿","😾","🙈","🙉","🙊","💋","💌","💘","💝","💖",
        "💗","💓","💞","💕","💟","❣️","💔","❤️","🧡","💛",
        "💚","💙","💜","🤎","🖤","🤍","💯","💢","💥","💫",
        "💦","💨","🕳️","💣","💬","👁️‍🗨️","🗨️","🗯️","💭","💤",
    ],

    emoticonListTravel : [
        "🌍","🌎","🌏","🌐","🗺️","🗾","🧭","🏔️","⛰️","🌋",
        "🗻","🏕️","🏖️","🏜️","🏝️","🏞️","🏟️","🏛️","🏗️","🧱",
        "🏘️","🏚️","🏠","🏡","🏢","🏣","🏤","🏥","🏦","🏨",
        "🏩","🏪","🏫","🏬","🏭","🏯","🏰","💒","🗼","🗽",
        "⛪","🕌","🛕","🕍","⛩️","🕋","⛲","⛺","🌁","🌃",
        "🏙️","🌄","🌅","🌆","🌇","🌉","🎠","🎡","🎢","💈",
        "🎪","🚂","🚃","🚄","🚅","🚆","🚇","🚈","🚉","🚊",
        "🚝","🚞","🚋","🚌","🚍","🚎","🚐","🚑","🚒","🚓",
        "🚔","🚕","🚖","🚗","🚘","🚙","🚚","🚛","🚜","🏎️",
        "🏍️","🛵","🦽","🦼","🛺","🚲","🛴","🛹","🚏","🛣️",
        "🛤️","🛢️","⛽","🚨","🚥","🚦","🛑","🚧","⚓","⛵",
        "🛶","🚤","🛳️","⛴️","🛥️","🚢","✈️","🛩️","🛫","🛬",
        "🪂","💺","🚁","🚟","🚠","🚡","🛰️","🚀","🛸","🛎️",
        "🧳","⌛","⏳","⌚","⏰","⏱️","⏲️","🕰️","🕛","🕧",
        "🕐","🕜","🕑","🕝","🕒","🕞","🕓","🕟","🕔","🕠",
        "🕕","🕡","🕖","🕢","🕗","🕣","🕘","🕤","🕙","🕥",
        "🕚","🕦","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘",
        "🌙","🌚","🌛","🌜","🌡️","☀️","🌝","🌞","🪐","⭐",
        "🌟","🌠","🌌","☁️","⛅","⛈️","🌤️","🌥️","🌦️","🌧️",
        "🌨️","🌩️","🌪️","🌫️","🌬️","🌀","🌈","🌂","☂️","☔",
        "⛱️","⚡","❄️","☃️","⛄","☄️","🔥","💧","🌊",    
    ],

    emoticonListAnimals : [
        "🐵","🐒","🦍","🦧","🐶","🐕","🦮","🐕‍🦺","🐩","🐺",
        "🦊","🦝","🐱","🐈","🐈‍⬛","🦁","🐯","🐅","🐆",
        "🐴","🐎","🦄","🦓","🦌","🐮","🐂","🐃","🐄","🐷",
        "🐖","🐗","🐽","🐏","🐑","🐐","🐪","🐫","🦙","🦒",
        "🐘","🦏","🦛","🐭","🐁","🐀","🐹","🐰","🐇","🐿️",
        "🦔","🦇","🐻","🐻‍❄️","🐨","🐼","🦥","🦦","🦨",
        "🦘","🦡","🐾","🦃","🐔","🐓","🐣","🐤","🐥","🐦",
        "🐧","🕊️","🦅","🦆","🦢","🦉","🦩","🦚","🦜","🐸",
        "🐊","🐢","🦎","🐍","🐲","🐉","🦕","🦖","🐳","🐋",
        "🐬","🐟","🐠","🐡","🦈","🐙","🐚","🐌","🦋","🐛",
        "🐜","🐝","🐞","🦗","🕷️","🕸️","🦂","🦟","🦠","💐",
        "🌸","💮","🏵️","🌹","🥀","🌺","🌻","🌼","🌷","🌱",
        "🌲","🌳","🌴","🌵","🌾","🌿","☘️","🍀","🍁","🍂",
        "🍃"
    ],

    emoticonList(){
        return [ ...this.emoticonListSmileys, ...this.emoticonListTravel, ...this.emoticonListAnimals ]
    },
    /**
     *  최근사용 이모티콘 
     * @example ["😦","😪","🤤","😴","😃","😄","🐒","🐵"]
    */
    recentEmotcions : [],

    /**
     * 로컬에 저장된 최근사용 이모티콘 데이터 가져오기 
     * @return { Array } 
    */
    getRecentEmoticon(){
        try {
            this.recentEmotcions = JSON.parse( localStorage.getItem("recentEmoticon"));
            if( !this.validationEmoticon(this.recentEmotcions) )
                throw Error();
        } catch (error) {
            console.log("parseError", error);
            this.recentEmotcions = [];
            localStorage.setItem("recentEmoticon", JSON.stringify(this.recentEmotcions) )
        }
        return this.recentEmotcions = [ ...new Set( this.recentEmotcions)];
    },

    /**
     * 최근 사용 이모티콘 데이터 저장 
     * 채팅 입력시 실행 
    */
    setRecentEmoticon(emoticons){
        emoticons.forEach(emoticon => {
            // 이모티콘 중복 제거 
            if( this.recentEmotcions.includes(emoticon)){
                const index = this.recentEmotcions.indexOf(emoticon);
                this.recentEmotcions = [ ...this.recentEmotcions.slice(0, index), ...this.recentEmotcions.slice(index + 1)]
            }
            // 이모티콘 추가 
            this.recentEmotcions = [...this.recentEmotcions, emoticon];
        });

        localStorage.setItem("recentEmoticon", JSON.stringify( this.recentEmotcions) );
    },

    /**
     * 채팅 이모티콘 데이터 확인 
    */
    validationEmoticon( emoticons ){
        // 배열 일 때만 TRUE 값 
        if( Array.isArray(emoticons)  )
            return true;
        return false;
    }
}

/***/ }),

/***/ "./assets/js/emoticon.js":
/*!*******************************!*\
  !*** ./assets/js/emoticon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chatInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatInfo */ "./assets/js/chatInfo.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./assets/js/util.js");



class Emoticon {
    constructor(){
        this.emoticonList;
        this.buildUI();
        this.event();

        this.chatInfo = _chatInfo__WEBPACK_IMPORTED_MODULE_0__["chatInfo"];
        // 최근사용 이모티콘 가져오기 
        _chatInfo__WEBPACK_IMPORTED_MODULE_0__["chatInfo"].getRecentEmoticon();

        window.addEventListener('message', ({data}) => {
            if( data.action !== 'pass') return;
            
            this.emoticonInput.value = JSON.stringify(data)
            this.sendMessage();
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
            _util__WEBPACK_IMPORTED_MODULE_1__["default"].cilpCopy(e.target.innerText);
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
        const reg = new RegExp('/' + _chatInfo__WEBPACK_IMPORTED_MODULE_0__["chatInfo"].emoticonList().join("|") + '/', 'g');
        const emoticons = this.emoticonInput.value.match(reg);

        // 채팅 메시지가 없으면 메시지 전송 안함.
        if( this.emoticonInput.value === '')
            return;


        this.emoticonOutput.scrollTop = this.emoticonOutput.scrollHeight;

        // 최근사용 이모티콘 저장 
        if (_chatInfo__WEBPACK_IMPORTED_MODULE_0__["chatInfo"].validationEmoticon(emoticons)) _chatInfo__WEBPACK_IMPORTED_MODULE_0__["chatInfo"].setRecentEmoticon(emoticons);

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
                if( _chatInfo__WEBPACK_IMPORTED_MODULE_0__["chatInfo"].getRecentEmoticon().length === 0 ){
                    // 최근사용 이모티콘이 없습니다. 
                    this.emoticonList.innerHTML = `최근사용 이모티콘이 없습니다.`;
                    this.emoticonList.style.display = "block"
                }else {
                    this.createEmotionList([..._chatInfo__WEBPACK_IMPORTED_MODULE_0__["chatInfo"].getRecentEmoticon()].reverse());
                }
                break;
            case "smileys-emotion":
                this.createEmotionList(_chatInfo__WEBPACK_IMPORTED_MODULE_0__["chatInfo"].emoticonListSmileys);
                break;
            case "travel-places":
                this.createEmotionList(_chatInfo__WEBPACK_IMPORTED_MODULE_0__["chatInfo"].emoticonListTravel);
                break;
            case "animals-nature":
                this.createEmotionList(_chatInfo__WEBPACK_IMPORTED_MODULE_0__["chatInfo"].emoticonListAnimals);
                break;
        }

    }
    /**
     * 이모티콘 리스트 생성 
    **/ 
    createEmotionList(emoticons){
        this.emoticonList.innerHTML = emoticons.map( ele => {
            if ( !_chatInfo__WEBPACK_IMPORTED_MODULE_0__["chatInfo"].errorEmoticonList.includes(ele.character || ele)  )
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

/* harmony default export */ __webpack_exports__["default"] = (Emoticon);


/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emoticon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoticon */ "./assets/js/emoticon.js");


window.emoticon = new _emoticon__WEBPACK_IMPORTED_MODULE_0__["default"]();



/***/ }),

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Util{
    constructor() {
    }
    // 클립보드 복사 
    static cilpCopy( value ){
        let textArea = document.createElement('textarea');
        textArea.value = value;
        document.body.append( textArea );
        textArea.select();
        textArea.setSelectionRange(0, 1);

        document.execCommand('copy');
        document.body.removeChild( textArea );
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXRJbmZvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbW90aWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLFE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQUE7QUFBQTtBQUFvQztBQUNWOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixrREFBUTtBQUNoQztBQUNBLFFBQVEsa0RBQVE7O0FBRWhCLDZDQUE2QyxLQUFLO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVEO0FBQ3ZEOztBQUVBO0FBQ0EsWUFBWSw2Q0FBSTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLG1CQUFtQixJQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsa0RBQVE7QUFDN0M7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLFlBQVksa0RBQVEsZ0NBQWdDLGtEQUFROztBQUU1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLCtDQUErQyxrREFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsa0RBQVE7QUFDL0M7QUFDQTtBQUNBLHVDQUF1QyxrREFBUTtBQUMvQztBQUNBO0FBQ0EsdUNBQXVDLGtEQUFRO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFRO0FBQzFCO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDekx4QjtBQUFBO0FBQWlDOztBQUVqQyxzQkFBc0IsaURBQVE7Ozs7Ozs7Ozs7Ozs7O0FDRjlCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVlLG1FQUFJLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9tYWluLmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IGNoYXRJbmZvID0ge1xyXG4gICAgZXJyb3JFbW90aWNvbkxpc3QgOiBbXHJcbiAgICAgICAgYPCfpbJgLGDwn6W4YCxg8J+qqGAsYPCfqrVgLGDwn5uWYCxcclxuICAgICAgICBg4pmo77iPYCxg8J+bu2AsYPCfm7xgLGDwn6asYCxg8J+mo2AsXHJcbiAgICAgICAgYPCfpqtgLGDwn6q2YCxg8J+mpGAsYPCfpq1gLGDwn6qyYCxcclxuICAgICAgICBg8J+qs2AsYPCfqrNgLGDwn6qxYCxg8J+qsGAsYPCfqrRgXSxcclxuXHJcbiAgICBlbW90aWNvbkxpc3RTbWlsZXlzIDogW1xyXG4gICAgICAgIFwi8J+YgFwiLFwi8J+Yg1wiLFwi8J+YhFwiLFwi8J+YgVwiLFwi8J+YhlwiLFwi8J+YhVwiLFwi8J+ko1wiLFwi8J+YglwiLFwi8J+ZglwiLFwi8J+Zg1wiLFxyXG4gICAgICAgIFwi8J+YiVwiLFwi8J+YilwiLFwi8J+Yh1wiLFwi8J+lsFwiLFwi8J+YjVwiLFwi8J+kqVwiLFwi8J+YmFwiLFwi8J+Yl1wiLFwi4pi677iPXCIsXCLwn5iaXCIsXHJcbiAgICAgICAgXCLwn5iZXCIsXCLwn5iLXCIsXCLwn5ibXCIsXCLwn5icXCIsXCLwn6SqXCIsXCLwn5idXCIsXCLwn6SRXCIsXCLwn6SXXCIsXCLwn6StXCIsXCLwn6SrXCIsXHJcbiAgICAgICAgXCLwn6SUXCIsXCLwn6SQXCIsXCLwn6SoXCIsXCLwn5iQXCIsXCLwn5iRXCIsXCLwn5i2XCIsXCLwn5iPXCIsXCLwn5iSXCIsXCLwn5mEXCIsXCLwn5isXCIsXHJcbiAgICAgICAgXCLwn6SlXCIsXCLwn5iMXCIsXCLwn5iUXCIsXCLwn5iqXCIsXCLwn6SkXCIsXCLwn5i0XCIsXCLwn5i3XCIsXCLwn6SSXCIsXCLwn6SVXCIsXCLwn6SiXCIsXHJcbiAgICAgICAgXCLwn6SuXCIsXCLwn6SnXCIsXCLwn6W1XCIsXCLwn6W2XCIsXCLwn6W0XCIsXCLwn5i1XCIsXCLwn6SvXCIsXCLwn6SgXCIsXCLwn6WzXCIsXHJcbiAgICAgICAgXCLwn5iOXCIsXCLwn6STXCIsXCLwn6eQXCIsXCLwn5iVXCIsXCLwn5ifXCIsXCLwn5mBXCIsXCLimLnvuI9cIixcIvCfmK5cIixcIvCfmK9cIixcIvCfmLJcIixcclxuICAgICAgICBcIvCfmLNcIixcIvCfpbpcIixcIvCfmKZcIixcIvCfmKdcIixcIvCfmKhcIixcIvCfmLBcIixcIvCfmKVcIixcIvCfmKJcIixcIvCfmK1cIixcIvCfmLFcIixcclxuICAgICAgICBcIvCfmJZcIixcIvCfmKNcIixcIvCfmJ5cIixcIvCfmJNcIixcIvCfmKlcIixcIvCfmKtcIixcIvCfpbFcIixcIvCfmKRcIixcIvCfmKFcIixcIvCfmKBcIixcclxuICAgICAgICBcIvCfpKxcIixcIvCfmIhcIixcIvCfkb9cIixcIvCfkoBcIixcIuKYoO+4j1wiLFwi8J+SqVwiLFwi8J+koVwiLFwi8J+RuVwiLFwi8J+RulwiLFwi8J+Ru1wiLFxyXG4gICAgICAgIFwi8J+RvVwiLFwi8J+RvlwiLFwi8J+kllwiLFwi8J+YulwiLFwi8J+YuFwiLFwi8J+YuVwiLFwi8J+Yu1wiLFwi8J+YvFwiLFwi8J+YvVwiLFwi8J+ZgFwiLFxyXG4gICAgICAgIFwi8J+Yv1wiLFwi8J+YvlwiLFwi8J+ZiFwiLFwi8J+ZiVwiLFwi8J+ZilwiLFwi8J+Si1wiLFwi8J+SjFwiLFwi8J+SmFwiLFwi8J+SnVwiLFwi8J+SllwiLFxyXG4gICAgICAgIFwi8J+Sl1wiLFwi8J+Sk1wiLFwi8J+SnlwiLFwi8J+SlVwiLFwi8J+Sn1wiLFwi4p2j77iPXCIsXCLwn5KUXCIsXCLinaTvuI9cIixcIvCfp6FcIixcIvCfkptcIixcclxuICAgICAgICBcIvCfkppcIixcIvCfkplcIixcIvCfkpxcIixcIvCfpI5cIixcIvCflqRcIixcIvCfpI1cIixcIvCfkq9cIixcIvCfkqJcIixcIvCfkqVcIixcIvCfkqtcIixcclxuICAgICAgICBcIvCfkqZcIixcIvCfkqhcIixcIvCflbPvuI9cIixcIvCfkqNcIixcIvCfkqxcIixcIvCfkYHvuI/igI3wn5eo77iPXCIsXCLwn5eo77iPXCIsXCLwn5ev77iPXCIsXCLwn5KtXCIsXCLwn5KkXCIsXHJcbiAgICBdLFxyXG5cclxuICAgIGVtb3RpY29uTGlzdFRyYXZlbCA6IFtcclxuICAgICAgICBcIvCfjI1cIixcIvCfjI5cIixcIvCfjI9cIixcIvCfjJBcIixcIvCfl7rvuI9cIixcIvCfl75cIixcIvCfp61cIixcIvCfj5TvuI9cIixcIuKbsO+4j1wiLFwi8J+Mi1wiLFxyXG4gICAgICAgIFwi8J+Xu1wiLFwi8J+Ple+4j1wiLFwi8J+Plu+4j1wiLFwi8J+PnO+4j1wiLFwi8J+Pne+4j1wiLFwi8J+Pnu+4j1wiLFwi8J+Pn++4j1wiLFwi8J+Pm++4j1wiLFwi8J+Pl++4j1wiLFwi8J+nsVwiLFxyXG4gICAgICAgIFwi8J+PmO+4j1wiLFwi8J+Pmu+4j1wiLFwi8J+PoFwiLFwi8J+PoVwiLFwi8J+PolwiLFwi8J+Po1wiLFwi8J+PpFwiLFwi8J+PpVwiLFwi8J+PplwiLFwi8J+PqFwiLFxyXG4gICAgICAgIFwi8J+PqVwiLFwi8J+PqlwiLFwi8J+Pq1wiLFwi8J+PrFwiLFwi8J+PrVwiLFwi8J+Pr1wiLFwi8J+PsFwiLFwi8J+SklwiLFwi8J+XvFwiLFwi8J+XvVwiLFxyXG4gICAgICAgIFwi4puqXCIsXCLwn5WMXCIsXCLwn5uVXCIsXCLwn5WNXCIsXCLim6nvuI9cIixcIvCflYtcIixcIuKbslwiLFwi4pu6XCIsXCLwn4yBXCIsXCLwn4yDXCIsXHJcbiAgICAgICAgXCLwn4+Z77iPXCIsXCLwn4yEXCIsXCLwn4yFXCIsXCLwn4yGXCIsXCLwn4yHXCIsXCLwn4yJXCIsXCLwn46gXCIsXCLwn46hXCIsXCLwn46iXCIsXCLwn5KIXCIsXHJcbiAgICAgICAgXCLwn46qXCIsXCLwn5qCXCIsXCLwn5qDXCIsXCLwn5qEXCIsXCLwn5qFXCIsXCLwn5qGXCIsXCLwn5qHXCIsXCLwn5qIXCIsXCLwn5qJXCIsXCLwn5qKXCIsXHJcbiAgICAgICAgXCLwn5qdXCIsXCLwn5qeXCIsXCLwn5qLXCIsXCLwn5qMXCIsXCLwn5qNXCIsXCLwn5qOXCIsXCLwn5qQXCIsXCLwn5qRXCIsXCLwn5qSXCIsXCLwn5qTXCIsXHJcbiAgICAgICAgXCLwn5qUXCIsXCLwn5qVXCIsXCLwn5qWXCIsXCLwn5qXXCIsXCLwn5qYXCIsXCLwn5qZXCIsXCLwn5qaXCIsXCLwn5qbXCIsXCLwn5qcXCIsXCLwn4+O77iPXCIsXHJcbiAgICAgICAgXCLwn4+N77iPXCIsXCLwn5u1XCIsXCLwn6a9XCIsXCLwn6a8XCIsXCLwn5u6XCIsXCLwn5qyXCIsXCLwn5u0XCIsXCLwn5u5XCIsXCLwn5qPXCIsXCLwn5uj77iPXCIsXHJcbiAgICAgICAgXCLwn5uk77iPXCIsXCLwn5ui77iPXCIsXCLim71cIixcIvCfmqhcIixcIvCfmqVcIixcIvCfmqZcIixcIvCfm5FcIixcIvCfmqdcIixcIuKak1wiLFwi4pu1XCIsXHJcbiAgICAgICAgXCLwn5u2XCIsXCLwn5qkXCIsXCLwn5uz77iPXCIsXCLim7TvuI9cIixcIvCfm6XvuI9cIixcIvCfmqJcIixcIuKciO+4j1wiLFwi8J+bqe+4j1wiLFwi8J+bq1wiLFwi8J+brFwiLFxyXG4gICAgICAgIFwi8J+qglwiLFwi8J+SulwiLFwi8J+agVwiLFwi8J+an1wiLFwi8J+aoFwiLFwi8J+aoVwiLFwi8J+bsO+4j1wiLFwi8J+agFwiLFwi8J+buFwiLFwi8J+bju+4j1wiLFxyXG4gICAgICAgIFwi8J+ns1wiLFwi4oybXCIsXCLij7NcIixcIuKMmlwiLFwi4o+wXCIsXCLij7HvuI9cIixcIuKPsu+4j1wiLFwi8J+VsO+4j1wiLFwi8J+Vm1wiLFwi8J+Vp1wiLFxyXG4gICAgICAgIFwi8J+VkFwiLFwi8J+VnFwiLFwi8J+VkVwiLFwi8J+VnVwiLFwi8J+VklwiLFwi8J+VnlwiLFwi8J+Vk1wiLFwi8J+Vn1wiLFwi8J+VlFwiLFwi8J+VoFwiLFxyXG4gICAgICAgIFwi8J+VlVwiLFwi8J+VoVwiLFwi8J+VllwiLFwi8J+VolwiLFwi8J+Vl1wiLFwi8J+Vo1wiLFwi8J+VmFwiLFwi8J+VpFwiLFwi8J+VmVwiLFwi8J+VpVwiLFxyXG4gICAgICAgIFwi8J+VmlwiLFwi8J+VplwiLFwi8J+MkVwiLFwi8J+MklwiLFwi8J+Mk1wiLFwi8J+MlFwiLFwi8J+MlVwiLFwi8J+MllwiLFwi8J+Ml1wiLFwi8J+MmFwiLFxyXG4gICAgICAgIFwi8J+MmVwiLFwi8J+MmlwiLFwi8J+Mm1wiLFwi8J+MnFwiLFwi8J+Moe+4j1wiLFwi4piA77iPXCIsXCLwn4ydXCIsXCLwn4yeXCIsXCLwn6qQXCIsXCLirZBcIixcclxuICAgICAgICBcIvCfjJ9cIixcIvCfjKBcIixcIvCfjIxcIixcIuKYge+4j1wiLFwi4puFXCIsXCLim4jvuI9cIixcIvCfjKTvuI9cIixcIvCfjKXvuI9cIixcIvCfjKbvuI9cIixcIvCfjKfvuI9cIixcclxuICAgICAgICBcIvCfjKjvuI9cIixcIvCfjKnvuI9cIixcIvCfjKrvuI9cIixcIvCfjKvvuI9cIixcIvCfjKzvuI9cIixcIvCfjIBcIixcIvCfjIhcIixcIvCfjIJcIixcIuKYgu+4j1wiLFwi4piUXCIsXHJcbiAgICAgICAgXCLim7HvuI9cIixcIuKaoVwiLFwi4p2E77iPXCIsXCLimIPvuI9cIixcIuKbhFwiLFwi4piE77iPXCIsXCLwn5SlXCIsXCLwn5KnXCIsXCLwn4yKXCIsICAgIFxyXG4gICAgXSxcclxuXHJcbiAgICBlbW90aWNvbkxpc3RBbmltYWxzIDogW1xyXG4gICAgICAgIFwi8J+QtVwiLFwi8J+QklwiLFwi8J+mjVwiLFwi8J+mp1wiLFwi8J+QtlwiLFwi8J+QlVwiLFwi8J+mrlwiLFwi8J+QleKAjfCfprpcIixcIvCfkKlcIixcIvCfkLpcIixcclxuICAgICAgICBcIvCfpopcIixcIvCfpp1cIixcIvCfkLFcIixcIvCfkIhcIixcIvCfkIjigI3irJtcIixcIvCfpoFcIixcIvCfkK9cIixcIvCfkIVcIixcIvCfkIZcIixcclxuICAgICAgICBcIvCfkLRcIixcIvCfkI5cIixcIvCfpoRcIixcIvCfppNcIixcIvCfpoxcIixcIvCfkK5cIixcIvCfkIJcIixcIvCfkINcIixcIvCfkIRcIixcIvCfkLdcIixcclxuICAgICAgICBcIvCfkJZcIixcIvCfkJdcIixcIvCfkL1cIixcIvCfkI9cIixcIvCfkJFcIixcIvCfkJBcIixcIvCfkKpcIixcIvCfkKtcIixcIvCfpplcIixcIvCfppJcIixcclxuICAgICAgICBcIvCfkJhcIixcIvCfpo9cIixcIvCfpptcIixcIvCfkK1cIixcIvCfkIFcIixcIvCfkIBcIixcIvCfkLlcIixcIvCfkLBcIixcIvCfkIdcIixcIvCfkL/vuI9cIixcclxuICAgICAgICBcIvCfppRcIixcIvCfpodcIixcIvCfkLtcIixcIvCfkLvigI3inYTvuI9cIixcIvCfkKhcIixcIvCfkLxcIixcIvCfpqVcIixcIvCfpqZcIixcIvCfpqhcIixcclxuICAgICAgICBcIvCfpphcIixcIvCfpqFcIixcIvCfkL5cIixcIvCfpoNcIixcIvCfkJRcIixcIvCfkJNcIixcIvCfkKNcIixcIvCfkKRcIixcIvCfkKVcIixcIvCfkKZcIixcclxuICAgICAgICBcIvCfkKdcIixcIvCflYrvuI9cIixcIvCfpoVcIixcIvCfpoZcIixcIvCfpqJcIixcIvCfpolcIixcIvCfpqlcIixcIvCfpppcIixcIvCfppxcIixcIvCfkLhcIixcclxuICAgICAgICBcIvCfkIpcIixcIvCfkKJcIixcIvCfpo5cIixcIvCfkI1cIixcIvCfkLJcIixcIvCfkIlcIixcIvCfppVcIixcIvCfppZcIixcIvCfkLNcIixcIvCfkItcIixcclxuICAgICAgICBcIvCfkKxcIixcIvCfkJ9cIixcIvCfkKBcIixcIvCfkKFcIixcIvCfpohcIixcIvCfkJlcIixcIvCfkJpcIixcIvCfkIxcIixcIvCfpotcIixcIvCfkJtcIixcclxuICAgICAgICBcIvCfkJxcIixcIvCfkJ1cIixcIvCfkJ5cIixcIvCfppdcIixcIvCflbfvuI9cIixcIvCflbjvuI9cIixcIvCfpoJcIixcIvCfpp9cIixcIvCfpqBcIixcIvCfkpBcIixcclxuICAgICAgICBcIvCfjLhcIixcIvCfkq5cIixcIvCfj7XvuI9cIixcIvCfjLlcIixcIvCfpYBcIixcIvCfjLpcIixcIvCfjLtcIixcIvCfjLxcIixcIvCfjLdcIixcIvCfjLFcIixcclxuICAgICAgICBcIvCfjLJcIixcIvCfjLNcIixcIvCfjLRcIixcIvCfjLVcIixcIvCfjL5cIixcIvCfjL9cIixcIuKYmO+4j1wiLFwi8J+NgFwiLFwi8J+NgVwiLFwi8J+NglwiLFxyXG4gICAgICAgIFwi8J+Ng1wiXHJcbiAgICBdLFxyXG5cclxuICAgIGVtb3RpY29uTGlzdCgpe1xyXG4gICAgICAgIHJldHVybiBbIC4uLnRoaXMuZW1vdGljb25MaXN0U21pbGV5cywgLi4udGhpcy5lbW90aWNvbkxpc3RUcmF2ZWwsIC4uLnRoaXMuZW1vdGljb25MaXN0QW5pbWFscyBdXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiAg7LWc6re87IKs7JqpIOydtOuqqO2LsOy9mCBcclxuICAgICAqIEBleGFtcGxlIFtcIvCfmKZcIixcIvCfmKpcIixcIvCfpKRcIixcIvCfmLRcIixcIvCfmINcIixcIvCfmIRcIixcIvCfkJJcIixcIvCfkLVcIl1cclxuICAgICovXHJcbiAgICByZWNlbnRFbW90Y2lvbnMgOiBbXSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOuhnOy7rOyXkCDsoIDsnqXrkJwg7LWc6re87IKs7JqpIOydtOuqqO2LsOy9mCDrjbDsnbTthLAg6rCA7KC47Jik6riwIFxyXG4gICAgICogQHJldHVybiB7IEFycmF5IH0gXHJcbiAgICAqL1xyXG4gICAgZ2V0UmVjZW50RW1vdGljb24oKXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY2VudEVtb3RjaW9ucyA9IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVjZW50RW1vdGljb25cIikpO1xyXG4gICAgICAgICAgICBpZiggIXRoaXMudmFsaWRhdGlvbkVtb3RpY29uKHRoaXMucmVjZW50RW1vdGNpb25zKSApXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFyc2VFcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMucmVjZW50RW1vdGNpb25zID0gW107XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVjZW50RW1vdGljb25cIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5yZWNlbnRFbW90Y2lvbnMpIClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjZW50RW1vdGNpb25zID0gWyAuLi5uZXcgU2V0KCB0aGlzLnJlY2VudEVtb3RjaW9ucyldO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOy1nOq3vCDsgqzsmqkg7J2066qo7Yuw7L2YIOuNsOydtO2EsCDsoIDsnqUgXHJcbiAgICAgKiDssYTtjIUg7J6F66Cl7IucIOyLpO2WiSBcclxuICAgICovXHJcbiAgICBzZXRSZWNlbnRFbW90aWNvbihlbW90aWNvbnMpe1xyXG4gICAgICAgIGVtb3RpY29ucy5mb3JFYWNoKGVtb3RpY29uID0+IHtcclxuICAgICAgICAgICAgLy8g7J2066qo7Yuw7L2YIOykkeuztSDsoJzqsbAgXHJcbiAgICAgICAgICAgIGlmKCB0aGlzLnJlY2VudEVtb3RjaW9ucy5pbmNsdWRlcyhlbW90aWNvbikpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJlY2VudEVtb3RjaW9ucy5pbmRleE9mKGVtb3RpY29uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjZW50RW1vdGNpb25zID0gWyAuLi50aGlzLnJlY2VudEVtb3RjaW9ucy5zbGljZSgwLCBpbmRleCksIC4uLnRoaXMucmVjZW50RW1vdGNpb25zLnNsaWNlKGluZGV4ICsgMSldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g7J2066qo7Yuw7L2YIOy2lOqwgCBcclxuICAgICAgICAgICAgdGhpcy5yZWNlbnRFbW90Y2lvbnMgPSBbLi4udGhpcy5yZWNlbnRFbW90Y2lvbnMsIGVtb3RpY29uXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWNlbnRFbW90aWNvblwiLCBKU09OLnN0cmluZ2lmeSggdGhpcy5yZWNlbnRFbW90Y2lvbnMpICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog7LGE7YyFIOydtOuqqO2LsOy9mCDrjbDsnbTthLAg7ZmV7J24IFxyXG4gICAgKi9cclxuICAgIHZhbGlkYXRpb25FbW90aWNvbiggZW1vdGljb25zICl7XHJcbiAgICAgICAgLy8g67Cw7Je0IOydvCDrlYzrp4wgVFJVRSDqsJIgXHJcbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoZW1vdGljb25zKSAgKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2NoYXRJbmZvfSBmcm9tICcuL2NoYXRJbmZvJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcclxuXHJcbmNsYXNzIEVtb3RpY29uIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5lbW90aWNvbkxpc3Q7XHJcbiAgICAgICAgdGhpcy5idWlsZFVJKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudCgpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYXRJbmZvID0gY2hhdEluZm87XHJcbiAgICAgICAgLy8g7LWc6re87IKs7JqpIOydtOuqqO2LsOy9mCDqsIDsoLjsmKTquLAgXHJcbiAgICAgICAgY2hhdEluZm8uZ2V0UmVjZW50RW1vdGljb24oKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCBkYXRhLmFjdGlvbiAhPT0gJ3Bhc3MnKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmVtb3RpY29uSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFVJKCl7XHJcbiAgICAgICAgdGhpcy5lbW90aWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbW90aWNvbkNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMub25FbW90aWNvblRhcCA9IHRoaXMuZW1vdGljb25Db250YWluZXIucXVlcnlTZWxlY3RvcignLmVtb3RpY29uVGFwIC5vbicpO1xyXG4gICAgICAgIHRoaXMuZW1vdGljb25MaXN0ID0gdGhpcy5lbW90aWNvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZW1vdGljb25MaXN0Jyk7XHJcbiAgICAgICAgdGhpcy5jaGF0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXRDb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmVtb3RpY29uSW5wdXQgPSB0aGlzLmNoYXRDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgICB0aGlzLmVtb3RpY29uT3V0cHV0ID0gdGhpcy5jaGF0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5vdXRwdXQnKTtcclxuICAgICAgICB0aGlzLmVtb3RpY29uVG9nZ2xlQnV0dG9uID0gdGhpcy5jaGF0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5lbW90aWNvblRvZ2dsZUJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuZW1vdGljb25TZW5kQnV0dG9uID0gdGhpcy5jaGF0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zZW5kQnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciAuYWxlcnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudCgpe1xyXG4gICAgICAgIC8vIOydtOuqqO2LsOy9mCDrpqzsiqTtirgg7YG066atIOydtOuypO2KuCDrsJTsnbjrlKkgXHJcbiAgICAgICAgdGhpcy5lbW90aWNvbkxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZGVib3VuY2UoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIHRoaXMuZW1vdGljb25MaXN0ID09PSBlLnRhcmdldCkgcmV0dXJuOyAvLyDsnpDquLDsnpDsi6Ag64iM66CA7J2E65WM64qUIOyYiOyZuOyymOumrFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlICs9IGUudGFyZ2V0LmlubmVyVGV4dDtcclxuXHJcbiAgICAgICAgICAgIC8vIO2BtOumveuztOuTnCDrs7XsgqwgXHJcbiAgICAgICAgICAgIFV0aWwuY2lscENvcHkoZS50YXJnZXQuaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgLy8g7YG066a967O065OcIOuzteyCrCDslrzrn78gXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyQWxlcnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBzaG93QWxlcnQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2hvd0FsZXJ0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyQWxlcnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9LCAzMDAwKVxyXG5cclxuICAgICAgICB9LCA1MDApKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDsnbTrqqjti7DsvZgg7YOtIOydtOuypO2KuCDrsJTsnbjrlKlcclxuICAgICAgICB0aGlzLmVtb3RpY29uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbW90aWNvblRhcCBsaScpLmZvckVhY2goIGVsZSA9PiB7XHJcbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g6rCZ7J2AIO2DrSDtgbTrpq3si5wg7LKY66asXHJcbiAgICAgICAgICAgICAgICBpZiggZS50YXJnZXQgPT09ICB0aGlzLm9uRW1vdGljb25UYXApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIC8v7J2066qo7Yuw7L2YIO2DrSDtmZzshLHtmZRcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbW90aWNvblRhcC5jbGFzc0xpc3QucmVtb3ZlKFwib25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW1vdGljb25UYXAgPSBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwib25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW1vdGljb25UYXAgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDrjbDsnbTthLAg67aI65+s7Jik6riwIOyghCDroZzrlKkgVUlcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1vdGljb25MaXN0LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIC8vIOuNsOydtO2EsCDrtojrn6zsmKTquLBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RW1vdGljb25EYXRhKCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIOydtOuqqO2LsOy9mCDsoITshqEg67KE7Yq8IFxyXG4gICAgICAgIHRoaXMuZW1vdGljb25TZW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSDsg53shLEgXHJcbiAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyDssYTtjIUg7YKk7J6F66ClIOydtOuypO2KuFxyXG4gICAgICAgIHRoaXMuZW1vdGljb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZTtcclxuICAgICAgICAgICAgaWYoIGtleSA9PT0gXCJFbnRlclwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIOydtOuqqO2LsOy9mCDrsoTtirwg7J2067Kk7Yq4IFxyXG4gICAgICAgIHRoaXMuZW1vdGljb25Ub2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xyXG4gICAgICAgICAgICBpZiggIXRoaXMuZW1vdGljb25Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdvbicpICl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFbW90aWNvbkxpc3QoKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlRW1vdGljb25MaXN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8g66mU7Iuc7KeAIOyghOyGoVxyXG4gICAgc2VuZE1lc3NhZ2UoKXtcclxuICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKCcvJyArIGNoYXRJbmZvLmVtb3RpY29uTGlzdCgpLmpvaW4oXCJ8XCIpICsgJy8nLCAnZycpO1xyXG4gICAgICAgIGNvbnN0IGVtb3RpY29ucyA9IHRoaXMuZW1vdGljb25JbnB1dC52YWx1ZS5tYXRjaChyZWcpO1xyXG5cclxuICAgICAgICAvLyDssYTtjIUg66mU7Iuc7KeA6rCAIOyXhuycvOuptCDrqZTsi5zsp4Ag7KCE7IahIOyViO2VqC5cclxuICAgICAgICBpZiggdGhpcy5lbW90aWNvbklucHV0LnZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5lbW90aWNvbk91dHB1dC5zY3JvbGxUb3AgPSB0aGlzLmVtb3RpY29uT3V0cHV0LnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgICAgLy8g7LWc6re87IKs7JqpIOydtOuqqO2LsOy9mCDsoIDsnqUgXHJcbiAgICAgICAgaWYgKGNoYXRJbmZvLnZhbGlkYXRpb25FbW90aWNvbihlbW90aWNvbnMpKSBjaGF0SW5mby5zZXRSZWNlbnRFbW90aWNvbihlbW90aWNvbnMpO1xyXG5cclxuICAgICAgICAvLyDssYTtjIUg64+UIOyDneyEsSBcclxuICAgICAgICB0aGlzLmRpc3BsYXlDaGF0TXNnKCk7XHJcblxyXG4gICAgICAgIC8vIOydtOuqqO2LsOy9mCDrpqzsiqTtirgg7Iio6riw6riwXHJcbiAgICAgICAgdGhpcy5oaWRlRW1vdGljb25MaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7LGE7YyFIOuPlCDsg53shLEgXHJcbiAgICBkaXNwbGF5Q2hhdE1zZygpe1xyXG4gICAgICAgIGNvbnN0IG91dHB1dERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBvdXRwdXREb20uaW5uZXJUZXh0ID0gdGhpcy5lbW90aWNvbklucHV0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuZW1vdGljb25PdXRwdXQuYXBwZW5kQ2hpbGQob3V0cHV0RG9tKTtcclxuICAgICAgICB0aGlzLmVtb3RpY29uSW5wdXQudmFsdWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRFbW90aWNvbkRhdGEoIGxpc3QgKXtcclxuICAgICAgICBzd2l0Y2goIGxpc3QgKXtcclxuICAgICAgICAgICAgY2FzZSBcInJlY2VudEVtb3RpY29uXCI6XHJcbiAgICAgICAgICAgICAgICBpZiggY2hhdEluZm8uZ2V0UmVjZW50RW1vdGljb24oKS5sZW5ndGggPT09IDAgKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyDstZzqt7zsgqzsmqkg7J2066qo7Yuw7L2Y7J20IOyXhuyKteuLiOuLpC4gXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbW90aWNvbkxpc3QuaW5uZXJIVE1MID0gYOy1nOq3vOyCrOyaqSDsnbTrqqjti7DsvZjsnbQg7JeG7Iq164uI64ukLmA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbW90aWNvbkxpc3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRW1vdGlvbkxpc3QoWy4uLmNoYXRJbmZvLmdldFJlY2VudEVtb3RpY29uKCldLnJldmVyc2UoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNtaWxleXMtZW1vdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbW90aW9uTGlzdChjaGF0SW5mby5lbW90aWNvbkxpc3RTbWlsZXlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidHJhdmVsLXBsYWNlc1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbW90aW9uTGlzdChjaGF0SW5mby5lbW90aWNvbkxpc3RUcmF2ZWwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhbmltYWxzLW5hdHVyZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbW90aW9uTGlzdChjaGF0SW5mby5lbW90aWNvbkxpc3RBbmltYWxzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOydtOuqqO2LsOy9mCDrpqzsiqTtirgg7IOd7ISxIFxyXG4gICAgKiovIFxyXG4gICAgY3JlYXRlRW1vdGlvbkxpc3QoZW1vdGljb25zKXtcclxuICAgICAgICB0aGlzLmVtb3RpY29uTGlzdC5pbm5lckhUTUwgPSBlbW90aWNvbnMubWFwKCBlbGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoICFjaGF0SW5mby5lcnJvckVtb3RpY29uTGlzdC5pbmNsdWRlcyhlbGUuY2hhcmFjdGVyIHx8IGVsZSkgIClcclxuICAgICAgICAgICAgICAgIHJldHVybiAgYFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtlbGUuY2hhcmFjdGVyIHx8IGVsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLmpvaW4oJycpO1xyXG4gICAgICAgIHRoaXMuZW1vdGljb25MaXN0LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIlxyXG4gICAgfVxyXG4gICAgLyoqIFxyXG4gICAgICog7J2066qo7Yuw7L2YIOumrOyKpO2KuCDsiKjquLDquLAgXHJcbiAgICAqL1xyXG4gICAgaGlkZUVtb3RpY29uTGlzdCgpe1xyXG4gICAgICAgIHRoaXMuZW1vdGljb25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9uXCIpO1xyXG4gICAgfVxyXG4gICAgLyoqIFxyXG4gICAgICog7J2066qo7Yuw7L2YIOumrOyKpO2KuCDrs7TsnbTquLAgXHJcbiAgICAqL1xyXG4gICAgc2hvd0Vtb3RpY29uTGlzdCgpe1xyXG4gICAgICAgIHRoaXMuZW1vdGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9uXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0RW1vdGljb25EYXRhKCB0aGlzLm9uRW1vdGljb25UYXAuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYm91bmNlIChldmVudCwgZnVuYywgd2FpdCkge1xyXG4gICAgICAgIGxldCB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jLmJpbmQoc2VsZiwgZXZlbnQpLCB3YWl0KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbW90aWNvbjtcclxuIiwiaW1wb3J0IEVtb3RpY29uIGZyb20gJy4vZW1vdGljb24nXHJcblxyXG53aW5kb3cuZW1vdGljb24gPSBuZXcgRW1vdGljb24oKTtcclxuXHJcbiIsImNsYXNzIFV0aWx7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIC8vIO2BtOumveuztOuTnCDrs7XsgqwgXHJcbiAgICBzdGF0aWMgY2lscENvcHkoIHZhbHVlICl7XHJcbiAgICAgICAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICB0ZXh0QXJlYS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKCB0ZXh0QXJlYSApO1xyXG4gICAgICAgIHRleHRBcmVhLnNlbGVjdCgpO1xyXG4gICAgICAgIHRleHRBcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIDEpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoIHRleHRBcmVhICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdGlsOyJdLCJzb3VyY2VSb290IjoiIn0=
