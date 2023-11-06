class Table {
	constructor() {
		this.target = document.getElementById('table');

		this.gridOptions = {
			// each entry here represents one column
			columnDefs: [
				{
					lockPosition: 'left',
					valueGetter: 'node.rowIndex+1',
					cellClass: 'locked-col',
					maxWidth: 40,
					suppressNavigable: true,
				},
				{ field: 'nickName', headerName: '닉네임', maxWidth: 100 },
				{ field: 'balloonCount', headerName: '선물개수', maxWidth: 90 },
				{ field: 'balloonSendCount', headerName: '선물횟수', maxWidth: 90 },
				{
					field: 'balloonSendPercent',
					headerName: '선물개수비율',
					cellRenderer: 'agSparklineCellRenderer',
					cellRendererParams: {
						sparklineOptions: {
							type: 'bar',
							fill: '#5470c6',
							stroke: '#91cc75',
							highlightStyle: {
								fill: '#fac858',
							},
							valueAxisDomain: [0, 1],
							paddingOuter: 0,
							padding: {
								top: 0,
								bottom: 0,
							},
							axis: {
								strokeWidth: 0,
							},
						},
					},
					maxWidth: 115,
				},
			],

			// default col def properties get applied to all columns
			defaultColDef: { sortable: true, resizable: true },

			// rowSelection: 'multiple', // allow rows to be selected
			// animateRows: true, // have rows animate to new positions when sorted
			onCellClicked: (params) => {
				console.log('cell was clicked', params);
			},
		};
	}

	create() {
		new agGrid.Grid(this.target, this.gridOptions);
	}

	setRowData(data) {
		console.log(data);
		// this.data = [
		// 	{
		// 		nickName: 'sonia',
		// 		balloonCount: 20,
		// 		balloonSendCount: 2,
		// 		balloonSendPercent: [0.2],
		// 	},
		// 	{
		// 		nickName: 'love',
		// 		balloonCount: 100,
		// 		balloonSendCount: 2,
		// 		balloonSendPercent: [0.5],
		// 	},
		// 	{
		// 		nickName: 'test',
		// 		balloonCount: 30,
		// 		balloonSendCount: 2,
		// 		balloonSendPercent: [0.3],
		// 	},
		// ];

		this.gridOptions.api.setRowData(data);
	}
}
