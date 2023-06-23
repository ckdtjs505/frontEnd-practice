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

        window.parent.postMessage( { 
            action : 'chat',
            msg : this.emoticonInput.value
        }, '*' )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXRJbmZvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbW90aWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLFE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQUE7QUFBQTtBQUFvQztBQUNWOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixrREFBUTtBQUNoQztBQUNBLDZDQUE2QyxLQUFLO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1REFBdUQ7QUFDdkQ7O0FBRUE7QUFDQSxZQUFZLDZDQUFJO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsbUJBQW1CLElBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrREFBUTtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsWUFBWSxrREFBUSxnQ0FBZ0Msa0RBQVE7O0FBRTVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsK0NBQStDLGtEQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxrREFBUTtBQUMvQztBQUNBO0FBQ0EsdUNBQXVDLGtEQUFRO0FBQy9DO0FBQ0E7QUFDQSx1Q0FBdUMsa0RBQVE7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0RBQVE7QUFDMUI7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMzTHhCO0FBQUE7QUFBaUM7O0FBRWpDLHNCQUFzQixpREFBUTs7Ozs7Ozs7Ozs7Ozs7QUNGOUI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsbUVBQUksRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL21haW4uanNcIik7XG4iLCJleHBvcnQgY29uc3QgY2hhdEluZm8gPSB7XHJcbiAgICBlcnJvckVtb3RpY29uTGlzdCA6IFtcclxuICAgICAgICBg8J+lsmAsYPCfpbhgLGDwn6qoYCxg8J+qtWAsYPCfm5ZgLFxyXG4gICAgICAgIGDimajvuI9gLGDwn5u7YCxg8J+bvGAsYPCfpqxgLGDwn6ajYCxcclxuICAgICAgICBg8J+mq2AsYPCfqrZgLGDwn6akYCxg8J+mrWAsYPCfqrJgLFxyXG4gICAgICAgIGDwn6qzYCxg8J+qs2AsYPCfqrFgLGDwn6qwYCxg8J+qtGBdLFxyXG5cclxuICAgIGVtb3RpY29uTGlzdFNtaWxleXMgOiBbXHJcbiAgICAgICAgXCLwn5iAXCIsXCLwn5iDXCIsXCLwn5iEXCIsXCLwn5iBXCIsXCLwn5iGXCIsXCLwn5iFXCIsXCLwn6SjXCIsXCLwn5iCXCIsXCLwn5mCXCIsXCLwn5mDXCIsXHJcbiAgICAgICAgXCLwn5iJXCIsXCLwn5iKXCIsXCLwn5iHXCIsXCLwn6WwXCIsXCLwn5iNXCIsXCLwn6SpXCIsXCLwn5iYXCIsXCLwn5iXXCIsXCLimLrvuI9cIixcIvCfmJpcIixcclxuICAgICAgICBcIvCfmJlcIixcIvCfmItcIixcIvCfmJtcIixcIvCfmJxcIixcIvCfpKpcIixcIvCfmJ1cIixcIvCfpJFcIixcIvCfpJdcIixcIvCfpK1cIixcIvCfpKtcIixcclxuICAgICAgICBcIvCfpJRcIixcIvCfpJBcIixcIvCfpKhcIixcIvCfmJBcIixcIvCfmJFcIixcIvCfmLZcIixcIvCfmI9cIixcIvCfmJJcIixcIvCfmYRcIixcIvCfmKxcIixcclxuICAgICAgICBcIvCfpKVcIixcIvCfmIxcIixcIvCfmJRcIixcIvCfmKpcIixcIvCfpKRcIixcIvCfmLRcIixcIvCfmLdcIixcIvCfpJJcIixcIvCfpJVcIixcIvCfpKJcIixcclxuICAgICAgICBcIvCfpK5cIixcIvCfpKdcIixcIvCfpbVcIixcIvCfpbZcIixcIvCfpbRcIixcIvCfmLVcIixcIvCfpK9cIixcIvCfpKBcIixcIvCfpbNcIixcclxuICAgICAgICBcIvCfmI5cIixcIvCfpJNcIixcIvCfp5BcIixcIvCfmJVcIixcIvCfmJ9cIixcIvCfmYFcIixcIuKYue+4j1wiLFwi8J+YrlwiLFwi8J+Yr1wiLFwi8J+YslwiLFxyXG4gICAgICAgIFwi8J+Ys1wiLFwi8J+lulwiLFwi8J+YplwiLFwi8J+Yp1wiLFwi8J+YqFwiLFwi8J+YsFwiLFwi8J+YpVwiLFwi8J+YolwiLFwi8J+YrVwiLFwi8J+YsVwiLFxyXG4gICAgICAgIFwi8J+YllwiLFwi8J+Yo1wiLFwi8J+YnlwiLFwi8J+Yk1wiLFwi8J+YqVwiLFwi8J+Yq1wiLFwi8J+lsVwiLFwi8J+YpFwiLFwi8J+YoVwiLFwi8J+YoFwiLFxyXG4gICAgICAgIFwi8J+krFwiLFwi8J+YiFwiLFwi8J+Rv1wiLFwi8J+SgFwiLFwi4pig77iPXCIsXCLwn5KpXCIsXCLwn6ShXCIsXCLwn5G5XCIsXCLwn5G6XCIsXCLwn5G7XCIsXHJcbiAgICAgICAgXCLwn5G9XCIsXCLwn5G+XCIsXCLwn6SWXCIsXCLwn5i6XCIsXCLwn5i4XCIsXCLwn5i5XCIsXCLwn5i7XCIsXCLwn5i8XCIsXCLwn5i9XCIsXCLwn5mAXCIsXHJcbiAgICAgICAgXCLwn5i/XCIsXCLwn5i+XCIsXCLwn5mIXCIsXCLwn5mJXCIsXCLwn5mKXCIsXCLwn5KLXCIsXCLwn5KMXCIsXCLwn5KYXCIsXCLwn5KdXCIsXCLwn5KWXCIsXHJcbiAgICAgICAgXCLwn5KXXCIsXCLwn5KTXCIsXCLwn5KeXCIsXCLwn5KVXCIsXCLwn5KfXCIsXCLinaPvuI9cIixcIvCfkpRcIixcIuKdpO+4j1wiLFwi8J+noVwiLFwi8J+Sm1wiLFxyXG4gICAgICAgIFwi8J+SmlwiLFwi8J+SmVwiLFwi8J+SnFwiLFwi8J+kjlwiLFwi8J+WpFwiLFwi8J+kjVwiLFwi8J+Sr1wiLFwi8J+SolwiLFwi8J+SpVwiLFwi8J+Sq1wiLFxyXG4gICAgICAgIFwi8J+SplwiLFwi8J+SqFwiLFwi8J+Vs++4j1wiLFwi8J+So1wiLFwi8J+SrFwiLFwi8J+Rge+4j+KAjfCfl6jvuI9cIixcIvCfl6jvuI9cIixcIvCfl6/vuI9cIixcIvCfkq1cIixcIvCfkqRcIixcclxuICAgIF0sXHJcblxyXG4gICAgZW1vdGljb25MaXN0VHJhdmVsIDogW1xyXG4gICAgICAgIFwi8J+MjVwiLFwi8J+MjlwiLFwi8J+Mj1wiLFwi8J+MkFwiLFwi8J+Xuu+4j1wiLFwi8J+XvlwiLFwi8J+nrVwiLFwi8J+PlO+4j1wiLFwi4puw77iPXCIsXCLwn4yLXCIsXHJcbiAgICAgICAgXCLwn5e7XCIsXCLwn4+V77iPXCIsXCLwn4+W77iPXCIsXCLwn4+c77iPXCIsXCLwn4+d77iPXCIsXCLwn4+e77iPXCIsXCLwn4+f77iPXCIsXCLwn4+b77iPXCIsXCLwn4+X77iPXCIsXCLwn6exXCIsXHJcbiAgICAgICAgXCLwn4+Y77iPXCIsXCLwn4+a77iPXCIsXCLwn4+gXCIsXCLwn4+hXCIsXCLwn4+iXCIsXCLwn4+jXCIsXCLwn4+kXCIsXCLwn4+lXCIsXCLwn4+mXCIsXCLwn4+oXCIsXHJcbiAgICAgICAgXCLwn4+pXCIsXCLwn4+qXCIsXCLwn4+rXCIsXCLwn4+sXCIsXCLwn4+tXCIsXCLwn4+vXCIsXCLwn4+wXCIsXCLwn5KSXCIsXCLwn5e8XCIsXCLwn5e9XCIsXHJcbiAgICAgICAgXCLim6pcIixcIvCflYxcIixcIvCfm5VcIixcIvCflY1cIixcIuKbqe+4j1wiLFwi8J+Vi1wiLFwi4puyXCIsXCLim7pcIixcIvCfjIFcIixcIvCfjINcIixcclxuICAgICAgICBcIvCfj5nvuI9cIixcIvCfjIRcIixcIvCfjIVcIixcIvCfjIZcIixcIvCfjIdcIixcIvCfjIlcIixcIvCfjqBcIixcIvCfjqFcIixcIvCfjqJcIixcIvCfkohcIixcclxuICAgICAgICBcIvCfjqpcIixcIvCfmoJcIixcIvCfmoNcIixcIvCfmoRcIixcIvCfmoVcIixcIvCfmoZcIixcIvCfmodcIixcIvCfmohcIixcIvCfmolcIixcIvCfmopcIixcclxuICAgICAgICBcIvCfmp1cIixcIvCfmp5cIixcIvCfmotcIixcIvCfmoxcIixcIvCfmo1cIixcIvCfmo5cIixcIvCfmpBcIixcIvCfmpFcIixcIvCfmpJcIixcIvCfmpNcIixcclxuICAgICAgICBcIvCfmpRcIixcIvCfmpVcIixcIvCfmpZcIixcIvCfmpdcIixcIvCfmphcIixcIvCfmplcIixcIvCfmppcIixcIvCfmptcIixcIvCfmpxcIixcIvCfj47vuI9cIixcclxuICAgICAgICBcIvCfj43vuI9cIixcIvCfm7VcIixcIvCfpr1cIixcIvCfprxcIixcIvCfm7pcIixcIvCfmrJcIixcIvCfm7RcIixcIvCfm7lcIixcIvCfmo9cIixcIvCfm6PvuI9cIixcclxuICAgICAgICBcIvCfm6TvuI9cIixcIvCfm6LvuI9cIixcIuKbvVwiLFwi8J+aqFwiLFwi8J+apVwiLFwi8J+aplwiLFwi8J+bkVwiLFwi8J+ap1wiLFwi4pqTXCIsXCLim7VcIixcclxuICAgICAgICBcIvCfm7ZcIixcIvCfmqRcIixcIvCfm7PvuI9cIixcIuKbtO+4j1wiLFwi8J+bpe+4j1wiLFwi8J+aolwiLFwi4pyI77iPXCIsXCLwn5up77iPXCIsXCLwn5urXCIsXCLwn5usXCIsXHJcbiAgICAgICAgXCLwn6qCXCIsXCLwn5K6XCIsXCLwn5qBXCIsXCLwn5qfXCIsXCLwn5qgXCIsXCLwn5qhXCIsXCLwn5uw77iPXCIsXCLwn5qAXCIsXCLwn5u4XCIsXCLwn5uO77iPXCIsXHJcbiAgICAgICAgXCLwn6ezXCIsXCLijJtcIixcIuKPs1wiLFwi4oyaXCIsXCLij7BcIixcIuKPse+4j1wiLFwi4o+y77iPXCIsXCLwn5Ww77iPXCIsXCLwn5WbXCIsXCLwn5WnXCIsXHJcbiAgICAgICAgXCLwn5WQXCIsXCLwn5WcXCIsXCLwn5WRXCIsXCLwn5WdXCIsXCLwn5WSXCIsXCLwn5WeXCIsXCLwn5WTXCIsXCLwn5WfXCIsXCLwn5WUXCIsXCLwn5WgXCIsXHJcbiAgICAgICAgXCLwn5WVXCIsXCLwn5WhXCIsXCLwn5WWXCIsXCLwn5WiXCIsXCLwn5WXXCIsXCLwn5WjXCIsXCLwn5WYXCIsXCLwn5WkXCIsXCLwn5WZXCIsXCLwn5WlXCIsXHJcbiAgICAgICAgXCLwn5WaXCIsXCLwn5WmXCIsXCLwn4yRXCIsXCLwn4ySXCIsXCLwn4yTXCIsXCLwn4yUXCIsXCLwn4yVXCIsXCLwn4yWXCIsXCLwn4yXXCIsXCLwn4yYXCIsXHJcbiAgICAgICAgXCLwn4yZXCIsXCLwn4yaXCIsXCLwn4ybXCIsXCLwn4ycXCIsXCLwn4yh77iPXCIsXCLimIDvuI9cIixcIvCfjJ1cIixcIvCfjJ5cIixcIvCfqpBcIixcIuKtkFwiLFxyXG4gICAgICAgIFwi8J+Mn1wiLFwi8J+MoFwiLFwi8J+MjFwiLFwi4piB77iPXCIsXCLim4VcIixcIuKbiO+4j1wiLFwi8J+MpO+4j1wiLFwi8J+Mpe+4j1wiLFwi8J+Mpu+4j1wiLFwi8J+Mp++4j1wiLFxyXG4gICAgICAgIFwi8J+MqO+4j1wiLFwi8J+Mqe+4j1wiLFwi8J+Mqu+4j1wiLFwi8J+Mq++4j1wiLFwi8J+MrO+4j1wiLFwi8J+MgFwiLFwi8J+MiFwiLFwi8J+MglwiLFwi4piC77iPXCIsXCLimJRcIixcclxuICAgICAgICBcIuKbse+4j1wiLFwi4pqhXCIsXCLinYTvuI9cIixcIuKYg++4j1wiLFwi4puEXCIsXCLimITvuI9cIixcIvCflKVcIixcIvCfkqdcIixcIvCfjIpcIiwgICAgXHJcbiAgICBdLFxyXG5cclxuICAgIGVtb3RpY29uTGlzdEFuaW1hbHMgOiBbXHJcbiAgICAgICAgXCLwn5C1XCIsXCLwn5CSXCIsXCLwn6aNXCIsXCLwn6anXCIsXCLwn5C2XCIsXCLwn5CVXCIsXCLwn6auXCIsXCLwn5CV4oCN8J+mulwiLFwi8J+QqVwiLFwi8J+QulwiLFxyXG4gICAgICAgIFwi8J+milwiLFwi8J+mnVwiLFwi8J+QsVwiLFwi8J+QiFwiLFwi8J+QiOKAjeKsm1wiLFwi8J+mgVwiLFwi8J+Qr1wiLFwi8J+QhVwiLFwi8J+QhlwiLFxyXG4gICAgICAgIFwi8J+QtFwiLFwi8J+QjlwiLFwi8J+mhFwiLFwi8J+mk1wiLFwi8J+mjFwiLFwi8J+QrlwiLFwi8J+QglwiLFwi8J+Qg1wiLFwi8J+QhFwiLFwi8J+Qt1wiLFxyXG4gICAgICAgIFwi8J+QllwiLFwi8J+Ql1wiLFwi8J+QvVwiLFwi8J+Qj1wiLFwi8J+QkVwiLFwi8J+QkFwiLFwi8J+QqlwiLFwi8J+Qq1wiLFwi8J+mmVwiLFwi8J+mklwiLFxyXG4gICAgICAgIFwi8J+QmFwiLFwi8J+mj1wiLFwi8J+mm1wiLFwi8J+QrVwiLFwi8J+QgVwiLFwi8J+QgFwiLFwi8J+QuVwiLFwi8J+QsFwiLFwi8J+Qh1wiLFwi8J+Qv++4j1wiLFxyXG4gICAgICAgIFwi8J+mlFwiLFwi8J+mh1wiLFwi8J+Qu1wiLFwi8J+Qu+KAjeKdhO+4j1wiLFwi8J+QqFwiLFwi8J+QvFwiLFwi8J+mpVwiLFwi8J+mplwiLFwi8J+mqFwiLFxyXG4gICAgICAgIFwi8J+mmFwiLFwi8J+moVwiLFwi8J+QvlwiLFwi8J+mg1wiLFwi8J+QlFwiLFwi8J+Qk1wiLFwi8J+Qo1wiLFwi8J+QpFwiLFwi8J+QpVwiLFwi8J+QplwiLFxyXG4gICAgICAgIFwi8J+Qp1wiLFwi8J+Viu+4j1wiLFwi8J+mhVwiLFwi8J+mhlwiLFwi8J+molwiLFwi8J+miVwiLFwi8J+mqVwiLFwi8J+mmlwiLFwi8J+mnFwiLFwi8J+QuFwiLFxyXG4gICAgICAgIFwi8J+QilwiLFwi8J+QolwiLFwi8J+mjlwiLFwi8J+QjVwiLFwi8J+QslwiLFwi8J+QiVwiLFwi8J+mlVwiLFwi8J+mllwiLFwi8J+Qs1wiLFwi8J+Qi1wiLFxyXG4gICAgICAgIFwi8J+QrFwiLFwi8J+Qn1wiLFwi8J+QoFwiLFwi8J+QoVwiLFwi8J+miFwiLFwi8J+QmVwiLFwi8J+QmlwiLFwi8J+QjFwiLFwi8J+mi1wiLFwi8J+Qm1wiLFxyXG4gICAgICAgIFwi8J+QnFwiLFwi8J+QnVwiLFwi8J+QnlwiLFwi8J+ml1wiLFwi8J+Vt++4j1wiLFwi8J+VuO+4j1wiLFwi8J+mglwiLFwi8J+mn1wiLFwi8J+moFwiLFwi8J+SkFwiLFxyXG4gICAgICAgIFwi8J+MuFwiLFwi8J+SrlwiLFwi8J+Pte+4j1wiLFwi8J+MuVwiLFwi8J+lgFwiLFwi8J+MulwiLFwi8J+Mu1wiLFwi8J+MvFwiLFwi8J+Mt1wiLFwi8J+MsVwiLFxyXG4gICAgICAgIFwi8J+MslwiLFwi8J+Ms1wiLFwi8J+MtFwiLFwi8J+MtVwiLFwi8J+MvlwiLFwi8J+Mv1wiLFwi4piY77iPXCIsXCLwn42AXCIsXCLwn42BXCIsXCLwn42CXCIsXHJcbiAgICAgICAgXCLwn42DXCJcclxuICAgIF0sXHJcblxyXG4gICAgZW1vdGljb25MaXN0KCl7XHJcbiAgICAgICAgcmV0dXJuIFsgLi4udGhpcy5lbW90aWNvbkxpc3RTbWlsZXlzLCAuLi50aGlzLmVtb3RpY29uTGlzdFRyYXZlbCwgLi4udGhpcy5lbW90aWNvbkxpc3RBbmltYWxzIF1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqICDstZzqt7zsgqzsmqkg7J2066qo7Yuw7L2YIFxyXG4gICAgICogQGV4YW1wbGUgW1wi8J+YplwiLFwi8J+YqlwiLFwi8J+kpFwiLFwi8J+YtFwiLFwi8J+Yg1wiLFwi8J+YhFwiLFwi8J+QklwiLFwi8J+QtVwiXVxyXG4gICAgKi9cclxuICAgIHJlY2VudEVtb3RjaW9ucyA6IFtdLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog66Gc7Lus7JeQIOyggOyepeuQnCDstZzqt7zsgqzsmqkg7J2066qo7Yuw7L2YIOuNsOydtO2EsCDqsIDsoLjsmKTquLAgXHJcbiAgICAgKiBAcmV0dXJuIHsgQXJyYXkgfSBcclxuICAgICovXHJcbiAgICBnZXRSZWNlbnRFbW90aWNvbigpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjZW50RW1vdGNpb25zID0gSlNPTi5wYXJzZSggbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWNlbnRFbW90aWNvblwiKSk7XHJcbiAgICAgICAgICAgIGlmKCAhdGhpcy52YWxpZGF0aW9uRW1vdGljb24odGhpcy5yZWNlbnRFbW90Y2lvbnMpIClcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXJzZUVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5yZWNlbnRFbW90Y2lvbnMgPSBbXTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWNlbnRFbW90aWNvblwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnJlY2VudEVtb3RjaW9ucykgKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZWNlbnRFbW90Y2lvbnMgPSBbIC4uLm5ldyBTZXQoIHRoaXMucmVjZW50RW1vdGNpb25zKV07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog7LWc6re8IOyCrOyaqSDsnbTrqqjti7DsvZgg642w7J207YSwIOyggOyepSBcclxuICAgICAqIOyxhO2MhSDsnoXroKXsi5wg7Iuk7ZaJIFxyXG4gICAgKi9cclxuICAgIHNldFJlY2VudEVtb3RpY29uKGVtb3RpY29ucyl7XHJcbiAgICAgICAgZW1vdGljb25zLmZvckVhY2goZW1vdGljb24gPT4ge1xyXG4gICAgICAgICAgICAvLyDsnbTrqqjti7DsvZgg7KSR67O1IOygnOqxsCBcclxuICAgICAgICAgICAgaWYoIHRoaXMucmVjZW50RW1vdGNpb25zLmluY2x1ZGVzKGVtb3RpY29uKSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmVjZW50RW1vdGNpb25zLmluZGV4T2YoZW1vdGljb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNlbnRFbW90Y2lvbnMgPSBbIC4uLnRoaXMucmVjZW50RW1vdGNpb25zLnNsaWNlKDAsIGluZGV4KSwgLi4udGhpcy5yZWNlbnRFbW90Y2lvbnMuc2xpY2UoaW5kZXggKyAxKV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDsnbTrqqjti7DsvZgg7LaU6rCAIFxyXG4gICAgICAgICAgICB0aGlzLnJlY2VudEVtb3RjaW9ucyA9IFsuLi50aGlzLnJlY2VudEVtb3RjaW9ucywgZW1vdGljb25dO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlY2VudEVtb3RpY29uXCIsIEpTT04uc3RyaW5naWZ5KCB0aGlzLnJlY2VudEVtb3RjaW9ucykgKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDssYTtjIUg7J2066qo7Yuw7L2YIOuNsOydtO2EsCDtmZXsnbggXHJcbiAgICAqL1xyXG4gICAgdmFsaWRhdGlvbkVtb3RpY29uKCBlbW90aWNvbnMgKXtcclxuICAgICAgICAvLyDrsLDsl7Qg7J28IOuVjOunjCBUUlVFIOqwkiBcclxuICAgICAgICBpZiggQXJyYXkuaXNBcnJheShlbW90aWNvbnMpICApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Y2hhdEluZm99IGZyb20gJy4vY2hhdEluZm8nO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xyXG5cclxuY2xhc3MgRW1vdGljb24ge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmVtb3RpY29uTGlzdDtcclxuICAgICAgICB0aGlzLmJ1aWxkVUkoKTtcclxuICAgICAgICB0aGlzLmV2ZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhdEluZm8gPSBjaGF0SW5mbztcclxuICAgICAgICAvLyDstZzqt7zsgqzsmqkg7J2066qo7Yuw7L2YIOqwgOyguOyYpOq4sCBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgaWYoIGRhdGEuYWN0aW9uICE9PSAncGFzcycpIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZW1vdGljb25JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgICAgIHRoaXMuZW1vdGljb25PdXRwdXQuc2Nyb2xsVG9wID0gdGhpcy5lbW90aWNvbk91dHB1dC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUNoYXRNc2coKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkVUkoKXtcclxuICAgICAgICB0aGlzLmVtb3RpY29uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtb3RpY29uQ29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5vbkVtb3RpY29uVGFwID0gdGhpcy5lbW90aWNvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZW1vdGljb25UYXAgLm9uJyk7XHJcbiAgICAgICAgdGhpcy5lbW90aWNvbkxpc3QgPSB0aGlzLmVtb3RpY29uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5lbW90aWNvbkxpc3QnKTtcclxuICAgICAgICB0aGlzLmNoYXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdENvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuZW1vdGljb25JbnB1dCA9IHRoaXMuY2hhdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuZW1vdGljb25PdXRwdXQgPSB0aGlzLmNoYXRDb250YWluZXIucXVlcnlTZWxlY3RvcignLm91dHB1dCcpO1xyXG4gICAgICAgIHRoaXMuZW1vdGljb25Ub2dnbGVCdXR0b24gPSB0aGlzLmNoYXRDb250YWluZXIucXVlcnlTZWxlY3RvcignLmVtb3RpY29uVG9nZ2xlQnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5lbW90aWNvblNlbmRCdXR0b24gPSB0aGlzLmNoYXRDb250YWluZXIucXVlcnlTZWxlY3RvcignLnNlbmRCdXR0b24nKTtcclxuICAgICAgICB0aGlzLmhlYWRlckFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIC5hbGVydCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50KCl7XHJcbiAgICAgICAgLy8g7J2066qo7Yuw7L2YIOumrOyKpO2KuCDtgbTrpq0g7J2067Kk7Yq4IOuwlOyduOuUqSBcclxuICAgICAgICB0aGlzLmVtb3RpY29uTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5kZWJvdW5jZSgnY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiggdGhpcy5lbW90aWNvbkxpc3QgPT09IGUudGFyZ2V0KSByZXR1cm47IC8vIOyekOq4sOyekOyLoCDriIzroIDsnYTrlYzripQg7JiI7Jm47LKY66asXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgKz0gZS50YXJnZXQuaW5uZXJUZXh0O1xyXG5cclxuICAgICAgICAgICAgLy8g7YG066a967O065OcIOuzteyCrCBcclxuICAgICAgICAgICAgVXRpbC5jaWxwQ29weShlLnRhcmdldC5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICAvLyDtgbTrpr3rs7Trk5wg67O17IKsIOyWvOufvyBcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJBbGVydC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNob3dBbGVydCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzaG93QWxlcnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJBbGVydC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH0sIDMwMDApXHJcblxyXG4gICAgICAgIH0sIDUwMCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOydtOuqqO2LsOy9mCDtg60g7J2067Kk7Yq4IOuwlOyduOuUqVxyXG4gICAgICAgIHRoaXMuZW1vdGljb25Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmVtb3RpY29uVGFwIGxpJykuZm9yRWFjaCggZWxlID0+IHtcclxuICAgICAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDqsJnsnYAg7YOtIO2BtOumreyLnCDsspjrpqxcclxuICAgICAgICAgICAgICAgIGlmKCBlLnRhcmdldCA9PT0gIHRoaXMub25FbW90aWNvblRhcCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy/snbTrqqjti7DsvZgg7YOtIO2ZnOyEse2ZlFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVtb3RpY29uVGFwLmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbW90aWNvblRhcCA9IGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJvblwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbW90aWNvblRhcCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOuNsOydtO2EsCDrtojrn6zsmKTquLAg7KCEIOuhnOuUqSBVSVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbW90aWNvbkxpc3QuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgLy8g642w7J207YSwIOu2iOufrOyYpOq4sFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFbW90aWNvbkRhdGEoIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8g7J2066qo7Yuw7L2YIOyghOyGoSDrsoTtirwgXHJcbiAgICAgICAgdGhpcy5lbW90aWNvblNlbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIOyDneyEsSBcclxuICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIOyxhO2MhSDtgqTsnoXroKUg7J2067Kk7Yq4XHJcbiAgICAgICAgdGhpcy5lbW90aWNvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSk9PntcclxuICAgICAgICAgICAgY29uc3Qge2tleX0gPSBlO1xyXG4gICAgICAgICAgICBpZigga2V5ID09PSBcIkVudGVyXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8g7J2066qo7Yuw7L2YIOuyhO2KvCDsnbTrsqTtirggXHJcbiAgICAgICAgdGhpcy5lbW90aWNvblRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XHJcbiAgICAgICAgICAgIGlmKCAhdGhpcy5lbW90aWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ29uJykgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vtb3RpY29uTGlzdCgpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVFbW90aWNvbkxpc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyDrqZTsi5zsp4Ag7KCE7IahXHJcbiAgICBzZW5kTWVzc2FnZSgpe1xyXG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoJy8nICsgY2hhdEluZm8uZW1vdGljb25MaXN0KCkuam9pbihcInxcIikgKyAnLycsICdnJyk7XHJcbiAgICAgICAgY29uc3QgZW1vdGljb25zID0gdGhpcy5lbW90aWNvbklucHV0LnZhbHVlLm1hdGNoKHJlZyk7XHJcblxyXG4gICAgICAgIC8vIOyxhO2MhSDrqZTsi5zsp4DqsIAg7JeG7Jy866m0IOuplOyLnOyngCDsoITshqEg7JWI7ZWoLlxyXG4gICAgICAgIGlmKCB0aGlzLmVtb3RpY29uSW5wdXQudmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoIHsgXHJcbiAgICAgICAgICAgIGFjdGlvbiA6ICdjaGF0JyxcclxuICAgICAgICAgICAgbXNnIDogdGhpcy5lbW90aWNvbklucHV0LnZhbHVlXHJcbiAgICAgICAgfSwgJyonIClcclxuICAgICAgICB0aGlzLmVtb3RpY29uT3V0cHV0LnNjcm9sbFRvcCA9IHRoaXMuZW1vdGljb25PdXRwdXQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyDstZzqt7zsgqzsmqkg7J2066qo7Yuw7L2YIOyggOyepSBcclxuICAgICAgICBpZiAoY2hhdEluZm8udmFsaWRhdGlvbkVtb3RpY29uKGVtb3RpY29ucykpIGNoYXRJbmZvLnNldFJlY2VudEVtb3RpY29uKGVtb3RpY29ucyk7XHJcblxyXG4gICAgICAgIC8vIOyxhO2MhSDrj5Qg7IOd7ISxIFxyXG4gICAgICAgIHRoaXMuZGlzcGxheUNoYXRNc2coKTtcclxuXHJcbiAgICAgICAgLy8g7J2066qo7Yuw7L2YIOumrOyKpO2KuCDsiKjquLDquLBcclxuICAgICAgICB0aGlzLmhpZGVFbW90aWNvbkxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDssYTtjIUg64+UIOyDneyEsSBcclxuICAgIGRpc3BsYXlDaGF0TXNnKCl7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIG91dHB1dERvbS5pbm5lclRleHQgPSB0aGlzLmVtb3RpY29uSW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5lbW90aWNvbk91dHB1dC5hcHBlbmRDaGlsZChvdXRwdXREb20pO1xyXG4gICAgICAgIHRoaXMuZW1vdGljb25JbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNldEVtb3RpY29uRGF0YSggbGlzdCApe1xyXG4gICAgICAgIHN3aXRjaCggbGlzdCApe1xyXG4gICAgICAgICAgICBjYXNlIFwicmVjZW50RW1vdGljb25cIjpcclxuICAgICAgICAgICAgICAgIGlmKCBjaGF0SW5mby5nZXRSZWNlbnRFbW90aWNvbigpLmxlbmd0aCA9PT0gMCApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOy1nOq3vOyCrOyaqSDsnbTrqqjti7DsvZjsnbQg7JeG7Iq164uI64ukLiBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtb3RpY29uTGlzdC5pbm5lckhUTUwgPSBg7LWc6re87IKs7JqpIOydtOuqqO2LsOy9mOydtCDsl4bsirXri4jri6QuYDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtb3RpY29uTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbW90aW9uTGlzdChbLi4uY2hhdEluZm8uZ2V0UmVjZW50RW1vdGljb24oKV0ucmV2ZXJzZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic21pbGV5cy1lbW90aW9uXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVtb3Rpb25MaXN0KGNoYXRJbmZvLmVtb3RpY29uTGlzdFNtaWxleXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0cmF2ZWwtcGxhY2VzXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVtb3Rpb25MaXN0KGNoYXRJbmZvLmVtb3RpY29uTGlzdFRyYXZlbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFuaW1hbHMtbmF0dXJlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVtb3Rpb25MaXN0KGNoYXRJbmZvLmVtb3RpY29uTGlzdEFuaW1hbHMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog7J2066qo7Yuw7L2YIOumrOyKpO2KuCDsg53shLEgXHJcbiAgICAqKi8gXHJcbiAgICBjcmVhdGVFbW90aW9uTGlzdChlbW90aWNvbnMpe1xyXG4gICAgICAgIHRoaXMuZW1vdGljb25MaXN0LmlubmVySFRNTCA9IGVtb3RpY29ucy5tYXAoIGVsZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggIWNoYXRJbmZvLmVycm9yRW1vdGljb25MaXN0LmluY2x1ZGVzKGVsZS5jaGFyYWN0ZXIgfHwgZWxlKSAgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICBgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2VsZS5jaGFyYWN0ZXIgfHwgZWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkuam9pbignJyk7XHJcbiAgICAgICAgdGhpcy5lbW90aWNvbkxpc3Quc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiXHJcbiAgICB9XHJcbiAgICAvKiogXHJcbiAgICAgKiDsnbTrqqjti7DsvZgg66as7Iqk7Yq4IOyIqOq4sOq4sCBcclxuICAgICovXHJcbiAgICBoaWRlRW1vdGljb25MaXN0KCl7XHJcbiAgICAgICAgdGhpcy5lbW90aWNvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib25cIik7XHJcbiAgICB9XHJcbiAgICAvKiogXHJcbiAgICAgKiDsnbTrqqjti7DsvZgg66as7Iqk7Yq4IOuztOydtOq4sCBcclxuICAgICovXHJcbiAgICBzaG93RW1vdGljb25MaXN0KCl7XHJcbiAgICAgICAgdGhpcy5lbW90aWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib25cIik7XHJcbiAgICAgICAgdGhpcy5zZXRFbW90aWNvbkRhdGEoIHRoaXMub25FbW90aWNvblRhcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVib3VuY2UgKGV2ZW50LCBmdW5jLCB3YWl0KSB7XHJcbiAgICAgICAgbGV0IHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmMuYmluZChzZWxmLCBldmVudCksIHdhaXQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtb3RpY29uO1xyXG4iLCJpbXBvcnQgRW1vdGljb24gZnJvbSAnLi9lbW90aWNvbidcclxuXHJcbndpbmRvdy5lbW90aWNvbiA9IG5ldyBFbW90aWNvbigpO1xyXG5cclxuIiwiY2xhc3MgVXRpbHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgLy8g7YG066a967O065OcIOuzteyCrCBcclxuICAgIHN0YXRpYyBjaWxwQ29weSggdmFsdWUgKXtcclxuICAgICAgICBsZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIHRleHRBcmVhLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoIHRleHRBcmVhICk7XHJcbiAgICAgICAgdGV4dEFyZWEuc2VsZWN0KCk7XHJcbiAgICAgICAgdGV4dEFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgMSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCggdGV4dEFyZWEgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWw7Il0sInNvdXJjZVJvb3QiOiIifQ==
