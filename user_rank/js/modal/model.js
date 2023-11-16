class Model {
	constructor(data) {
		this.data = [...data];

		this.totalCount = 0;
		this.data.forEach( ({count}) => {
			this.totalCount = this.totalCount + count;
		})
	}
}

class ViewModel extends Model {
	constructor(data){
		super(data)	
	}

	add(addVal, type){
		let check = false;

		this.data = this.data.map( (val) => {
			if (val.userId === addVal.userId) {
				check = true;
				
				if( type === 'IN'){
					return {
						...val,
						viewTime: val.viewTime,
						InTimeStamp: new Date(),
						OutTimeStamp: null,
						inOutCount: val.inOutCount + 1
					}
				}else if( type === 'OUT'){
					
					return {
						...val,
						viewTime: val.viewTime + (new Date()  - val.InTimeStamp),
						OutTimeStamp: new Date()
					}
				}
			}
			return val;
		})

		if (check === false && type === 'IN') {
			this.data.push({
				...addVal,
				viewTime: 0,
				InTimeStamp: new Date(),
				inOutCount : 1
			});
		}

		this.data.sort( (a, b) => {
			return  b.viewTime - a.viewTime; 
		})

		localStorage.setItem(`${window.broadNumber || 0}_view`, JSON.stringify(this.data));
	}
}


class SupportModal extends Model {
	constructor(data) {
		super(data);
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

class ChatModal extends Model {
	constructor(data) {
		super(data);
	}

	add(addVal) {
		let check = false;
		let hateWordCount = 0;
		let goodWordCount = 0;
		if( this.hateWord ){
			hateWordCount = this.hateWord.reduce( (prev, curr) => {
				if( addVal.message.includes(curr) ) {
					return 1
				}else {
					return 0
				}
			}, 0)
		}

		if( this.goodWord ){
			goodWordCount = this.goodWord.reduce( (prev, curr) => {
				if( addVal.message.includes(curr) ) {
					return 1
				}else {
					return 0
				}
			}, 0)
		}

		this.data = this.data.map((val) => {
			if (val.userId === addVal.userId) {
				check = true;
				return {
					...val,
					sendCount: val.sendCount + 1,
					hateWordCount: val.hateWordCount + hateWordCount,
					goodWordCount: val.goodWordCount + goodWordCount,
				};
			}
			return val;
		});

		if (check === false) {
			this.data.push({
				...addVal,
				sendCount: 1,
				hateWordCount: hateWordCount,
				goodWordCount: goodWordCount,
			});
		}

		this.data.sort( (a, b) => {
			return  b.sendCount - a.sendCount; 
		})

		localStorage.setItem(`${window.broadNumber || 0}_chat`, JSON.stringify(this.data));
	}

	setHateWord(word){
		this.hateWord = word || [];
	}

	setGoodWord(word){
		this.goodWord = word || [];
	}
}