class User {
	constructor() {
		console.log('create user');
		this.balloon = document.querySelector('#tab_button_balloon');
		this.adballoon = document.querySelector('#tab_button_adballoon');
		this.chatting = document.querySelector('#tab_button_chatting');
		this.viewTime = document.querySelector('#tab_button_viewTime');

		this.content = new Table();
		this.content.create();
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
				this.content.setRowData();
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
}
