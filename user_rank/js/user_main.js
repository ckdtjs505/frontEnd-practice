class User {
	constructor() {
		console.log('create user');
		this.balloon = document.querySelector('#tab_button_balloon');
		this.adballoon = document.querySelector('#tab_button_adballoon');
		this.chatting = document.querySelector('#tab_button_chatting');
		this.viewTime = document.querySelector('#tab_button_viewTime');

		;
		this.balloonModel = new BalloonModal(JSON.parse(localStorage.getItem(`${window.broadNumber || 0}_balloon`)) || []);
		this.adballoonModel = new AdballoonModal(JSON.parse(localStorage.getItem(`${window.broadNumber || 0}_adballoon`)) || []);
		this.battleMissionModel = new BattleMissionModal(JSON.parse(localStorage.getItem(`${window.broadNumber || 0}_battleMission`)) || []);
		this.challengeMissionModel = new ChallengeMissionModal(JSON.parse(localStorage.getItem(`${window.broadNumber || 0}_challengeMission`)) || []);
		this.topThreeModel = new TopThreeModal(JSON.parse(localStorage.getItem(`${window.broadNumber || 0}_topThreeModal`)) || []);

		this.ballonTable = new BalloonTable(this.balloonModel);
		this.adballonTable = new AdballoonTable(this.adballoonModel);
		this.battleMissionTable = new BattleMissionTable(this.battleMissionModel)
		this.challengeMissionTable = new ChallengeMissionTable(this.challengeMissionModel)

		this.ballonTable.create();
		this.adballonTable.create();
		this.battleMissionTable.create();
		this.challengeMissionTable.create();

		this.topThreeModel.createUI()
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
			case 'tab_button_battleMission':
				document.querySelector('#battleMissionTable').style.display = 'block';
				this.battleMissionTable.setRowData(this.battleMissionModel.data);
				break;
			case 'tab_button_challengeMission':
				document.querySelector('#challengeMissionTable').style.display = 'block';
				this.challengeMissionTable.setRowData(this.challengeMissionModel.data);
				break;
		}
	}

	receive(action, message) {
		// 데이터를 저장하고
		switch (action) {
			case 'BALLOON_GIFTED':
				this.balloonModel.add(message);
				this.topThreeModel.add(message);
				this.ballonTable.setRowData(this.balloonModel.data);
				break;
			case 'ADBALLOON_GIFTED':
				this.adballoonModel.add(message);
				this.topThreeModel.add(message);
				this.adballonTable.setRowData(this.adballoonModel.data);
				break;
			case 'BATTLE_MISSION_GIFTED':
				this.battleMissionModel.add(message);
				this.topThreeModel.add(message);
				this.battleMissionTable.setRowData(this.battleMissionModel.data);
				break;
			case 'CHALLENGE_MISSION_GIFTED':
				this.challengeMissionModel.add(message);
				this.topThreeModel.add(message);
				this.challengeMissionTable.setRowData(this.challengeMissionModel.data);
				break;
		}
		this.topThreeModel.createUI()
	}
}
