class Model {
	constructor(data) {
		this.data = [...data];
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
					sendPercent: [(val.count + addVal.count) / this.totalCount],
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

		this.data.sort( (a, b) => {
			return  b.count - a.count; 
		})
	}
}

class BalloonModal extends Model {
	constructor(data) {
		super(data);

	}

	add(addVal){
		super.add(addVal);

		localStorage.setItem(`${window.broadNumber || 0}_balloon`, JSON.stringify(this.data));
	}
	
}

class AdballoonModal extends Model {
	constructor(data) {
		super(data);
	}

	add(addVal) {
		super.add(addVal);

		localStorage.setItem(`${window.broadNumber || 0}_adballoon`, JSON.stringify(this.data));
	}
}

class BattleMissionModal extends Model {
	constructor(data) {
		super(data);
	}

	add(addVal) {
		super.add(addVal);

		localStorage.setItem(`${window.broadNumber || 0}_battleMission`, JSON.stringify(this.data));
	}
}

class ChallengeMissionModal extends Model {
	constructor(data) {
		super(data);
		this.totalCount = 0;
	}

	add(addVal) {
		super.add(addVal);

		localStorage.setItem(`${window.broadNumber || 0}_challengeMission`, JSON.stringify(this.data));
	}
}


class TopThreeModal extends Model {
	constructor(data) {
		super(data);
	}

	add(addVal) {
		super.add(addVal);

		localStorage.setItem(`${window.broadNumber || 0}_topThreeModal`, JSON.stringify(this.data));
	}

	createUI(){
		document.querySelector("#userRank div").innerHTML = `
		${ this.data.slice(0,3).map( (ele, idx) => {
			if( idx === 0 ){
				return`<span id="first"> 🥇${ele.userNickname} </span>`
			}else if(idx === 1){ 
				return`<span id="second"> 🥈${ele.userNickname} </span>`
			}else if(idx === 2){
				return`<span id="third"> 🥉${ele.userNickname} </span>`
			}
		}).join('')}
	`
	}
}
