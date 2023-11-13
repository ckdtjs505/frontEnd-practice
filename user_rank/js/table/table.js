class Table {
	constructor() {}

	create() {
		new agGrid.Grid(this.target, this.gridOptions);
	}

	setRowData(data) {
		this.gridOptions.api.setRowData(data);
	}
}

class SupportTable extends Table {
	constructor() {
		super();
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
				{ field: 'userNickname', headerName: '닉네임', maxWidth: 100 },
				{ field: 'count', headerName: '선물개수', maxWidth: 90 },
				{ field: 'sendCount', headerName: '선물횟수', maxWidth: 90 },
				{
					field: 'sendPercent',
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
			animateRows: true, // have rows animate to new positions when sorted

			noRowsOverlayComponent: class {
				init(params) {
					this.eGui = document.createElement('div');
					this.eGui.innerHTML = `<div>
							<div>  ${params.noRowsMessageFunc()} </div>
						</div>`;
				}
				
				getGui() {
					return this.eGui;
				}
			
				refresh(params) {
					return false;
				}
			},
			noRowsOverlayComponentParams: {
			noRowsMessageFunc: () =>
				"BJ를 후원하여 유저 랭킹에 들어보아요!"
			}
		};
	}
}

class BalloonTable extends SupportTable {
	constructor() {
		super();
		this.target = document.getElementById('balloonTable');
	}
}

class AdballoonTable extends SupportTable {
	constructor() {
		super();
		this.target = document.getElementById('adballoonTable');
	}
}

class BattleMissionTable extends SupportTable {
	constructor() {
		super();
		this.target = document.getElementById('battleMissionTable');
	}
}

class ChallengeMissionTable extends SupportTable {
	constructor() {
		super();
		this.target = document.getElementById('challengeMissionTable');
	}
}