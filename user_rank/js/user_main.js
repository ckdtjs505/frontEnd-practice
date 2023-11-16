class Main {
	constructor(extensionSDK) {
		this.extensionSDK = extensionSDK;
		console.log('create user');
		this.support = document.querySelector('#tab_button_support')
		this.viewTime = document.querySelector('#tab_button_viewTime');
		
		this.supportModel = new SupportModal(JSON.parse(localStorage.getItem(`${window.broadNumber || 0}_support`)) || []);
		this.viewModel = new ViewModel(JSON.parse(localStorage.getItem(`${window.broadNumber || 0}_view`)) || []);
		this.chatModel = new ChatModal(JSON.parse(localStorage.getItem(`${window.broadNumber || 0}_chat`)) || []);

		this.supportTable = new SupportTable(this.supportModel);
		this.viewTable = new ViewTable(this.viewModel);
		this.chatTable = new ChatTable(this.chatModel);

		this.supportTable.create();
		this.viewTable.create();
		this.chatTable.create();

		this.addEvent();

		document.querySelector('#tab_button_support').click();
	}

	addEvent() {
		// 탭 클릭시 동작
		document.querySelectorAll('.subtab').forEach((ele) => {
			ele.addEventListener('click', () => {
				document.querySelectorAll('.subtab').forEach((_sub) => {
					_sub.classList.remove('active');
				});
				document.querySelectorAll('.subTable').forEach((_sub) => {
					_sub.style.display = 'none';
				});

				this.createContent(ele.id);
				ele.classList.add('active');
			});
		});
	}

	createContent(typeId) {
		switch (typeId) {
			case 'tab_button_support':
				document.querySelector('#supportTable').style.display = 'block';
				this.supportTable.setRowData(this.supportModel.data);
				break;
			case 'tab_button_viewTime':
				document.querySelector('#viewTable').style.display = 'block';
				this.viewTable.setRowData(this.viewModel.data);
				break;
			case 'tab_button_chatting':
				document.querySelector('#chatTable').style.display = 'block';
				this.chatTable.setRowData(this.chatModel.data);
				break;
		}
	}

}



class Noti {
	constructor(params) { 
		this.timer;
	}
	static alert(text){
		const alertBox = document.querySelector('.notification-container');
		alertBox.innerHTML = text;
		alertBox.classList.add('show');
		alertBox.style.display = 'block'

		if(this.timer) clearTimeout(this.timer)
		this.timer = setTimeout( () => {
			alertBox.classList.remove('show');
		alertBox.style.display = 'none'
			
		}, 2000)
	}
}

class UserScreen extends Main {
	constructor() { 
		super();
	}

	receiveUser(action, message){
		switch( action ){
			case 'SUPPORT':
				this.supportModel = new SupportModal(message|| []);
				this.supportTable.setRowData(this.supportModel.data);
				break;
			case 'CHAT':
				this.chatModel = new ChatModal(message || []);
				this.chatTable.setRowData(this.chatModel.data);
				break;

			case 'VIEW':
				this.viewModel = new ViewModel(message || []);
				this.viewTable.setRowData(this.viewModel.data);
				break;
		}
	}
}

class BJscreen extends Main {
	constructor(sdk) { 
		super(sdk);
		this.sendUser();
	}

	createContent(typeId) {
		switch (typeId) {
			case 'tab_button_support':
				document.querySelector('#supportTable').style.display = 'block';
				this.supportTable.setRowData(this.supportModel.data);
				break;
			case 'tab_button_viewTime':
				document.querySelector('#viewTable').style.display = 'block';
				this.viewTable.setRowData(this.viewModel.data);
				break;
			case 'tab_button_chatting':
				document.querySelector('#chatArea').style.display = 'block';
				this.chatTable.setRowData(this.chatModel.data);
				break;
		}
	}

	addEvent() {
		super.addEvent();
		// 탭 클릭시 동작
		document.querySelector('#hateWord').value = localStorage.getItem('hateWord')
		document.querySelector('#goodWord').value = localStorage.getItem('goodWord')
		
		document.querySelector('#hateWordBtn').addEventListener( 'click', ()=> {
			const hateWord = document.querySelector('#hateWord').value ;	

			if(!hateWord) {
				Noti.alert('부정 채팅 단어가 없습니다')
				return;
			} 
			if(typeof hateWord === "string"){
				localStorage.setItem('hateWord' , hateWord)
				Noti.alert('부정 채팅 단어가 저장되었습니다.')
				this.chatModel.setHateWord(hateWord)
			}
			
		})

		document.querySelector('#goodWordBtn').addEventListener( 'click', ()=> {
			const goodWord = document.querySelector('#goodWord').value ;
			if(!goodWord){
				Noti.alert('긍정 채팅 단어가 없습니다')
				return;
			}
			if(typeof goodWord === "string"){
				localStorage.setItem('goodWord' , goodWord);
				Noti.alert('긍정 채팅 단어가 저장되었습니다.')
				this.chatModel.setGoodWord(goodWord)
			}
		})

		this.chatModel.setHateWord( localStorage.getItem('hateWord'));
		this.chatModel.setGoodWord( localStorage.getItem('goodWord'));
	}

	sendUser(){
		if(this.timer) clearInterval(this.timer);
		this.timer = setInterval( (() => {
			this.extensionSDK.broadcast.send('SUPPORT', [
				...this.supportModel.data.slice(0,5)
			])

			setTimeout( () => {
				this.extensionSDK.broadcast.send('CHAT', [
					...this.chatModel.data.slice(0,5)
				])
			}, 1000)

			setTimeout( () => {
				this.extensionSDK.broadcast.send('VIEW', [
					...this.viewModel.data.slice(0,5)
				])
			}, 2000)

		}), 5000) 
	}

	receive(action, message) {
		// 데이터를 저장하고
		switch (action) {
			case 'BALLOON_GIFTED':
			case 'ADBALLOON_GIFTED':
			case 'BATTLE_MISSION_GIFTED':
			case 'CHALLENGE_MISSION_GIFTED':
				this.supportModel.add(message, action);
				this.supportTable.setRowData(this.supportModel.data);
				break;
			case 'IN':
			case 'OUT':
				this.viewModel.add({
					userId : message.userList[0].userId,
					userNickname : message.userList[0].userNickname
				}, action);
				this.viewTable.setRowData(this.viewModel.data);
				break;
			case 'MESSAGE':
				this.chatModel.add({
					userId : message.userId,
					message : message.message,
					userNickname : message.userNickname
				});
				this.chatTable.setRowData(this.chatModel.data);
		}

	}
}

