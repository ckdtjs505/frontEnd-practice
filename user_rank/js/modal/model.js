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
