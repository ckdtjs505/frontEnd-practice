class Main {
	constructor(extensionSDK) {
		this.extensionSDK = extensionSDK;
		console.log('create user');
		this.support = document.querySelector('#tab_button_support')
		this.viewTime = document.querySelector('#tab_button_viewTime');
		
		this.supportModel = new SupportModal(JSON.parse(localStorage.getItem(`${window.broadNumber || 0}_support`)) || []);
		this.viewModel = new ViewModel([]); // localstroage로 재구현
		this.chatModel = new ChatModal([]);

		this.supportTable = new SupportTable(this.supportModel);
		this.viewTable = new ViewTable(this.viewModel);
		this.chatTable = new ChatTable(this.chatModel);

		this.supportTable.create();
		this.viewTable.create();
		this.chatTable.create();

		this.supportModel.createUI()
		this.addEvent();
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


class UserScreen extends Main {
	constructor() { 
		super();
	}

	receiveUser(action, message){
		console.log(action, message)
		this.supportModel = new SupportModal(message.data || []);
		this.supportTable.setRowData(this.supportModel.data);
		this.supportModel.createUI()
	}
}

class BJscreen extends Main {
	constructor(sdk) { 
		super(sdk);
		// this.sendUser();
	}

	sendUser(){
		if(this.timer) clearInterval(this.timer);
		this.timer = setInterval( (() => {
			this.extensionSDK.broadcast.send('USER_RANK', {
				...this.supportModel
			})
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
				this.viewModel.add(message.userList[0], action);
				this.viewTable.setRowData(this.viewModel.data);
				break;
			case 'MESSAGE':
				this.chatModel.add(message);
				this.chatTable.setRowData(this.chatModel.data);
		}

		// this.topThreeModel.createUI()
	}
}


