class Table {
	constructor() {}

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

class BalloonTable extends Table {
	constructor() {
		super();
		this.target = document.getElementById('balloonTable');
		this.gridOptions = {
			// each entry here represents one column
			columnDefs: [
				{
					lockPosition: 'left',
					valueGetter: 'node.rowIndex+1',
					cellClass: 'locked-col',
					minWidth: 40,
					maxWidth: 40,
					suppressNavigable: true,
					sortable: false,
				},
				{
					field: 'broadcastStation',
					headerName: '',
					maxWidth: 49,
					sortable: false,
					cellRenderer: ({ data: { userId } }) => {
						return `<img style="width:25px; height:25px; border-radius: 50%;" src="//profile.img.afreecatv.com/LOGO/${userId.substring(
							0,
							2
						)}/${userId}/${userId}.jpg" onclick="window.open('https://bj.afreecatv.com/${userId}')" alt="">`;
					},
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
			paginationPageSize: 10,
			// rowSelection: 'multiple', // al paginationPageSize: 10, low rows to be selected
			// animateRows: true, // have rows animate to new positions when sorted
			// onCellClicked: (params) => {
			// 	console.log('cell was clicked', params);
			// },
		};
	}
}

class AdballoonTable extends Table {
	constructor() {
		super();
		this.target = document.getElementById('adballoonTable');
		this.gridOptions = {
			// each entry here represents one column
			columnDefs: [
				{
					lockPosition: 'left',
					valueGetter: 'node.rowIndex+1',
					cellClass: 'locked-col',
					minWidth: 40,
					maxWidth: 40,
					suppressNavigable: true,
					sortable: false,
				},
				{
					field: 'broadcastStation',
					headerName: '',
					maxWidth: 49,
					sortable: false,
					cellRenderer: ({ data: { userId } }) => {
						return `<img style="width:25px; height:25px; border-radius: 50%;" src="//profile.img.afreecatv.com/LOGO/${userId.substring(
							0,
							2
						)}/${userId}/${userId}.jpg" onclick="window.open('https://bj.afreecatv.com/${userId}')" alt="">`;
					},
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
			paginationPageSize: 10,
			// rowSelection: 'multiple', // al paginationPageSize: 10, low rows to be selected
			// animateRows: true, // have rows animate to new positions when sorted
			// onCellClicked: (params) => {
			// 	console.log('cell was clicked', params);
			// },
		};
	}
}

class ChatTable extends Table {
	constructor() {
		super();
		this.target = document.getElementById('chatTable');
		this.gridOptions = {
			// each entry here represents one column
			columnDefs: [
				{
					lockPosition: 'left',
					valueGetter: 'node.rowIndex+1',
					cellClass: 'locked-col',
					minWidth: 40,
					maxWidth: 40,
					suppressNavigable: true,
					sortable: false,
				},
				{
					field: 'broadcastStation',
					headerName: '',
					maxWidth: 49,
					sortable: false,
					cellRenderer: ({ data: { userId } }) => {
						return `<img style="width:25px; height:25px; border-radius: 50%;" src="//profile.img.afreecatv.com/LOGO/${userId.substring(
							0,
							2
						)}/${userId}/${userId}.jpg" onclick="window.open('https://bj.afreecatv.com/${userId}')" alt="">`;
					},
				},
				{ field: 'nickName', headerName: '닉네임', maxWidth: 100 },
				{ field: 'ChatSendCount', headerName: '채팅수', maxWidth: 90 },
			],

			// default col def properties get applied to all columns
			defaultColDef: { sortable: true, resizable: true },
			paginationPageSize: 10,
			// rowSelection: 'multiple', // al paginationPageSize: 10, low rows to be selected
			// animateRows: true, // have rows animate to new positions when sorted
			// onCellClicked: (params) => {
			// 	console.log('cell was clicked', params);
			// },
		};
	}
}

class ViewTable extends Table {
	constructor() {
		super();
		this.target = document.getElementById('ViewTable');
		this.gridOptions = {
			// each entry here represents one column
			columnDefs: [
				{
					lockPosition: 'left',
					valueGetter: 'node.rowIndex+1',
					cellClass: 'locked-col',
					minWidth: 40,
					maxWidth: 40,
					suppressNavigable: true,
					sortable: false,
				},
				{
					field: 'broadcastStation',
					headerName: '',
					maxWidth: 49,
					sortable: false,
					cellRenderer: ({ data: { userId } }) => {
						return `<img style="width:25px; height:25px; border-radius: 50%;" src="//profile.img.afreecatv.com/LOGO/${userId.substring(
							0,
							2
						)}/${userId}/${userId}.jpg" onclick="window.open('https://bj.afreecatv.com/${userId}')" alt="">`;
					},
				},
				{ field: 'nickName', headerName: '닉네임', maxWidth: 100 },
				{ field: 'viewTime', headerName: '시청시간', maxWidth: 90 },
			],

			// default col def properties get applied to all columns
			defaultColDef: { sortable: true, resizable: true },
			paginationPageSize: 10,
			// rowSelection: 'multiple', // al paginationPageSize: 10, low rows to be selected
			// animateRows: true, // have rows animate to new positions when sorted
			// onCellClicked: (params) => {
			// 	console.log('cell was clicked', params);
			// },
		};
	}
}
