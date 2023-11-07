class User {
	constructor() {
		console.log('create user');
		this.balloon = document.querySelector('#tab_button_balloon');
		this.adballoon = document.querySelector('#tab_button_adballoon');
		this.chatting = document.querySelector('#tab_button_chatting');
		this.viewTime = document.querySelector('#tab_button_viewTime');

		this.balloonModel = new BalloonModal([]);
		this.adballoonModel = new AdballoonModal([]);
		this.chatModel = new ChatModal([]);
		this.viewModel = new ViewModal([]);

		this.ballonTable = new BalloonTable(this.balloonModel);
		this.adballonTable = new AdballoonTable(this.adballoonModel);
		this.chatTable = new ChatTable(this.chatModel);
		this.viewTable = new ViewTable(this.viewModel);

		this.ballonTable.create();
		this.adballonTable.create();
		this.chatTable.create();
		this.viewTable.create();

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
			case 'tab_button_balloon':
				document.querySelector('#balloonTable').style.display = 'block';
				this.ballonTable.setRowData(this.balloonModel.data);
				break;
			case 'tab_button_adballoon':
				document.querySelector('#adballoonTable').style.display = 'block';
				this.adballonTable.setRowData(this.adballoonModel.data);
				break;
			case 'tab_button_chatting':
				document.querySelector('#chatTable').style.display = 'block';
				this.chatTable.setRowData(this.chatModel.data);
				break;
			case 'tab_button_viewTime':
				document.querySelector('#ViewTable').style.display = 'block';
				this.viewTable.setRowData(this.viewModel.data);
				break;
		}
	}

	receive(action, message) {
		// 데이터를 저장하고
		switch (action) {
			case 'BALLOON_GIFTED':
				this.balloonModel.add(message);
				this.ballonTable.setRowData(this.balloonModel.data);
				break;
			case 'ADBALLOON_GIFTED':
				this.adballoonModel.add(message);
				this.adballonTable.setRowData(this.adballoonModel.data);
				break;
			case 'MESSAGE':
				this.chatModel.add(message);
				this.chatTable.setRowData(this.chatModel.data);
				break;
			case 'VIEW_TIME':
				this.viewModel.add(message);
				this.viewTable.setRowData(this.viewModel.data);
				break;
		}
	}
}
