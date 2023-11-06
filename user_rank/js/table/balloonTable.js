class BalloonTable extends Table {
	constructor() {
		super();
	}

	create() {
		new agGrid.Grid(this.target, this.gridOptions);

		// load fetched data into grid
		this.gridOptions.api.setRowData(this.data);
	}
}
