class Model {
	constructor(data) {
		this.data = [...data];
	}
}

class BalloonModal extends Model {
	constructor(data) {
		super(data);
		this.totalCount = 0;
	}

	add(addVal) {
		let check = false;
		this.totalCount = this.totalCount + addVal.count;

		this.data = this.data.map((val) => {
			if (val.userId === addVal.userId) {
				check = true;
				return {
					...val,
					count: val.count + addVal.count,
					sendCount: val.sendCount + 1,
					sendPercent: [val.count + addVal.count / this.totalCount],
				};
			}
			return val;
		});

		if (check === false) {
			this.data.push({
				...addVal,
				sendCount: 1,
				sendPercent: [addVal.count / this.totalCount],
			});
		}

		localStorage.setItem('balloon', JSON.stringify(this.data));
	}
}

class AdballoonModal extends Model {
	constructor(data) {
		super(data);
		this.totalCount = 0;
	}

	add(addVal) {
		let check = false;
		this.totalCount = this.totalCount + addVal.count;

		this.data = this.data.map((val) => {
			if (val.userId === addVal.userId) {
				check = true;
				return {
					...val,
					count: val.count + addVal.count,
					sendCount: val.sendCount + 1,
					sendPercent: [val.count + addVal.count / this.totalCount],
				};
			}
			return val;
		});

		if (check === false) {
			this.data.push({
				...addVal,
				sendCount: 1,
				sendPercent: [addVal.count / this.totalCount],
			});
		}

		localStorage.setItem('adballoon', JSON.stringify(this.data));
	}
}

// class ChatModal extends Model {
// 	constructor(data) {
// 		super(data);
// 	}

// 	add(addVal) {
// 		let check = false;

// 		this.data = this.data.map((val) => {
// 			if (val.userId === addVal.userId) {
// 				check = true;
// 				return {
// 					...val,
// 					sendCount: val.sendCount + 1,
// 				};
// 			}
// 			return val;
// 		});

// 		if (check === false) {
// 			this.data.push({
// 				...addVal,
// 				sendCount: 1,
// 			});
// 		}

// 		localStorage.setItem('chat', JSON.stringify(this.data));
// 	}
// }

class ViewModal extends Model {
	constructor(data) {
		super(data);
	}

	add(addVal) {
		let check = false;

		this.data = this.data.map((val) => {
			if (val.userId === addVal.userId) {
				check = true;
				return {
					...addVal,
				};
			}
			return val;
		});

		if (check === false) {
			this.data.push({
				...addVal,
			});
		}

		localStorage.setItem('view', JSON.stringify(this.data));
	}
}

class BattleMissionModal extends Model {
	constructor(data) {
		super(data);
		this.totalCount = 0;
	}

	add(addVal) {
		let check = false;
		this.totalCount = this.totalCount + addVal.count;

		this.data = this.data.map((val) => {
			if (val.userId === addVal.userId) {
				check = true;
				return {
					...val,
					count: val.count + addVal.count,
					sendCount: val.sendCount + 1,
					sendPercent: [val.count + addVal.count / this.totalCount],
				};
			}
			return val;
		});

		if (check === false) {
			this.data.push({
				...addVal,
				sendCount: 1,
				sendPercent: [addVal.count / this.totalCount],
			});
		}

		localStorage.setItem('battleMission', JSON.stringify(this.data));
	}
}

class ChallengeMissionModal extends Model {
	constructor(data) {
		super(data);
		this.totalCount = 0;
	}

	add(addVal) {
		let check = false;
		this.totalCount = this.totalCount + addVal.count;

		this.data = this.data.map((val) => {
			if (val.userId === addVal.userId) {
				check = true;
				return {
					...val,
					count: val.count + addVal.count,
					sendCount: val.sendCount + 1,
					sendPercent: [val.count + addVal.count / this.totalCount],
				};
			}
			return val;
		});

		if (check === false) {
			this.data.push({
				...addVal,
				sendCount: 1,
				sendPercent: [addVal.count / this.totalCount],
			});
		}

		localStorage.setItem('challengeMission', JSON.stringify(this.data));
	}
}
