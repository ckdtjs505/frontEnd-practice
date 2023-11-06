class User {
	constructor() {
		console.log('create user');
		this.balloon = document.querySelector('#tab_button_balloon');
		this.adballoon = document.querySelector('#tab_button_adballoon');
		this.chatting = document.querySelector('#tab_button_chatting');
		this.viewTime = document.querySelector('#tab_button_viewTime');

		this.content = new Table();
		this.content.create();

		this.balloonModel = new BalloonModal([]);
		this.adballoonModel = new AdballoonModal([]);
		this.chatModel = new ChatModal([]);
		this.viewModel = new ViewModal([]);

		this.addEvent();
	}

	addEvent() {
		// 탭 클릭시 동작
		document.querySelectorAll('.subtab').forEach((ele) => {
			ele.addEventListener('click', () => {
				document.querySelectorAll('.subtab').forEach((_sub) => {
					_sub.classList.remove('active');
				});
				this.createContent(ele.id);
				ele.classList.add('active');
			});
		});
	}

	createContent(typeId) {
		switch (typeId) {
			case 'tab_button_balloon':
				this.content.setRowData(this.balloonModel.data);
				break;
			case 'tab_button_adballoon':
				this.content.setRowData();
				break;
			case 'tab_button_chatting':
				this.content.setRowData();
				break;
			case 'tab_button_viewTime':
				this.content.setRowData();
				break;
		}
	}

	receive(action, message) {
		// 데이터를 저장하고
		switch (action) {
			case 'BALLOON_GIFTED':
				this.balloonModel.set(message);
				this.content.setRowData(this.balloonModel.data);
				break;
			case 'ADBALLOON_GIFTED':
				break;
			case 'MESSAGE':
				break;
		}
	}
}
