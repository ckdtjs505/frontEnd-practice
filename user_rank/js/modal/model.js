class Model {
	constructor(data) {
		this.data = [...data];
	}

	set(val) {
		this.data.push(val);
	}

	sort() {
		// this.data.sort( )
	}
}

class BalloonModal extends Model {
	constructor(data) {
		super(data);
	}

	set(val) {
		super.set(val);
		localStorage.setItem('balloon', JSON.stringify(this.data));
	}

	add(addVal) {
		let check = false;
		this.data = this.data.map((val) => {
			if (val.userId === addVal.userId) {
				check = true;

				return {
					...val,
					balloonCount: val.balloonCount + addVal.balloonCount,
					balloonSendCount: ++val.balloonSendCount,
				};
			}
			return val;
		});

		if (check === false) {
			this.data.push(addVal);
		}
	}
}

class AdballoonModal extends Model {
	constructor(data) {
		super(data);
	}

	set(val) {
		super.set(val);
		localStorage.setItem('adballoon', JSON.stringify(this.data));
	}
}

class ChatModal extends Model {
	constructor(data) {
		super(data);
	}

	set(val) {
		super.set(val);
		localStorage.setItem('chat', JSON.stringify(this.data));
	}
}

class ViewModal extends Model {
	constructor(data) {
		super(data);
	}

	set(val) {
		super.set(val);
		localStorage.setItem('view', JSON.stringify(this.data));
	}
}