class Model {
	constructor(data) {
		this.data = [...data];

		this.totalCount = 0;
		this.data.forEach( ({count}) => {
			this.totalCount = this.totalCount + count;
		})
	}

	add(addVal, type) {
		let check = false;
		this.totalCount = this.totalCount + addVal.count;
		this.data = this.data.map((val) => {
			if (val.userId === addVal.userId) {
				check = true;

				switch(type){
					case 'BALLOON_GIFTED':
						return {
							...val,
							count: val.count + addVal.count,
							balloonCount: val.balloonCount + addVal.count,
							sendCount: val.sendCount + 1,
							sendPercent: [(val.balloonCount + addVal.count) / this.totalCount],
						};
					case 'ADBALLOON_GIFTED':
						return {
							...val,
							count: val.count + addVal.count,
							adBalloonCount: val.adBalloonCount + addVal.count,
							sendCount: val.sendCount + 1,
							sendPercent: [(val.adBalloonCount + addVal.count) / this.totalCount],
						};
					case 'BATTLE_MISSION_GIFTED':
						return {
							...val,
							count: val.count + addVal.count,
							battleMissionCount: val.battleMissionCount + addVal.count,
							sendCount: val.sendCount + 1,
							sendPercent: [(val.battleMissionCount + addVal.count) / this.totalCount],
						};
					case 'CHALLENGE_MISSION_GIFTED':
						return {
							...val,
							count: val.count + addVal.count,
							challengeMissionCount: val.challengeMissionCount + addVal.count,
							sendCount: val.sendCount + 1,
							sendPercent: [(val.challengeMissionCount + addVal.count) / this.totalCount],
						};
				}
			}
			return val;
		});

		if (check === false) {
			switch(type){
				case 'BALLOON_GIFTED':
					this.data.push({
						...addVal,
						balloonCount : addVal.count,
						sendCount: 1,
						sendPercent: [addVal.count / this.totalCount],
					});
					break;
				case 'ADBALLOON_GIFTED':
					this.data.push({
						...addVal,
						adBalloonCount : addVal.count,
						sendCount: 1,
						sendPercent: [addVal.count / this.totalCount],
					});
					break;
				case 'BATTLE_MISSION_GIFTED':
					this.data.push({
						...addVal,
						battleMissionCount : addVal.count,
						sendCount: 1,
						sendPercent: [addVal.count / this.totalCount],
					});
					break;
				case 'CHALLENGE_MISSION_GIFTED':
					this.data.push({
						...addVal,
						challengeMissionCount : addVal.count,
						sendCount: 1,
						sendPercent: [addVal.count / this.totalCount],
					});
					break;
			}
		
		}

		this.data.sort( (a, b) => {
			return  b.count - a.count; 
		})
	}
}

class SupportModal extends Model {
	constructor(data) {
		super(data);

	}

	add(addVal, type){
		super.add(addVal, type);


		localStorage.setItem(`${window.broadNumber || 0}_support`, JSON.stringify(this.data));
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
