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
		this.target = document.getElementById('supportTable');
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
					pinned: true
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
					pinned: true
				},
				{ field: 'userNickname', headerName: '닉네임', maxWidth: 100},
				{ field: 'count', headerName: '총개수', maxWidth: 70},
				{ field: 'balloonCount',  headerName: '별풍선', maxWidth: 70,  
					cellRenderer: ( ({data: {balloonCount  }}) => {  return balloonCount ? balloonCount : 0 })  },
				{ field: 'adBalloonCount', headerName: '애드벌룬', maxWidth: 70,
					cellRenderer: ( ({data: {adBalloonCount  }}) => {  return adBalloonCount ? adBalloonCount : 0 })  },
				{ field: 'battleMissionCount', headerName: '도전미션', maxWidth: 70,	
					cellRenderer: ( ({data: {battleMissionCount  }}) => {  return battleMissionCount ? battleMissionCount : 0 })  },
				{ field: 'challengeMissionCount', headerName: '대결미션', maxWidth: 70,
					cellRenderer: ( ({data: {challengeMissionCount  }}) => {  return challengeMissionCount ? challengeMissionCount : 0 })  },
				{ field: 'sendCount', headerName: '총횟수', maxWidth: 70 },
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
			// defaultValue: 0,
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
				"BJ를 후원하여 유저 랭킹에 들어보아요! <br> BJ가 프로그램을 실행중에만 집계가 되어요!"
			}
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
					pinned: true

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
					pinned: true,
				},
				{ field: 'userNickname', headerName: '닉네임', maxWidth: 100},
				{ field: 'sendCount', headerName: '채팅수', maxWidth: 90 },
				{ field: 'goodWordCount', headerName: '긍정채팅', maxWidth: 90 },
				{ field: 'hateWordCount', headerName: '부정채팅', maxWidth: 90 },
			],

			defaultColDef: { sortable: true, resizable: true },
			paginationPageSize: 10,

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
				"BJ에게 채팅을 입력해보세요! <br> BJ가 프로그램을 실행중에만 집계가 되어요!"
			}
		};
	}
}


class ViewTable extends Table {
	constructor() {
		super()
		this.target = document.getElementById('viewTable');
		this.gridOptions = {
			columnDefs: [
				{
					lockPosition: 'left',
					valueGetter: 'node.rowIndex+1',
					cellClass: 'locked-col',
					minWidth: 40,
					maxWidth: 40,
					suppressNavigable: true,
					sortable: false,
					pinned: true
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
					pinned: true
				},
				{ field: 'userNickname', headerName: '닉네임', maxWidth: 100},
				{
					field: 'isView',  headerName: '시청중', maxWidth: 60,  
					cellRenderer: ({ data: { InTimeStamp, OutTimeStamp } }) => {
						// 현재 시간을 가져옵니다.
						if( InTimeStamp &&  !OutTimeStamp ){
							return `YES`;
						}else {
							return 'NO';
						}
					},
				},

				{ field: 'intTimeStamp',  headerName: '입장시간', maxWidth: 100,  
					cellRenderer: ({ data: { InTimeStamp } }) => {
						if( InTimeStamp ){
							InTimeStamp = new Date(InTimeStamp);
							const seconds = InTimeStamp.getSeconds();
							const minutes = InTimeStamp.getMinutes();
							const hours = InTimeStamp.getHours();

							if(hours){
								return `${hours}시${minutes}분${seconds}초`
							}else if(minutes ){
								return `${minutes}분${seconds}초`; // 2시간 03분 45초
							}else {
								return `${seconds}초`; // 2시간 03분 45초
							}
							
						}
						return `-`;
					}, 
				},
				{ field: 'intTimeStamp',  headerName: '퇴장시간', maxWidth: 100,  
					cellRenderer: ({ data: { OutTimeStamp } }) => {
						if( OutTimeStamp ){
							OutTimeStamp = new Date(OutTimeStamp);
							const seconds = OutTimeStamp.getSeconds();
							const minutes = OutTimeStamp.getMinutes();
							const hours = OutTimeStamp.getHours();

							if(hours){
								return `${hours}시${minutes}분${seconds}초`
							}else if(minutes ){
								return `${minutes}분${seconds}초`; // 2시간 03분 45초
							}else {
								return `${seconds}초`; // 2시간 03분 45초
							}
							
						}
						return `-`;
					}, 
				},
				{
					field: 'viewTime', headerName: '총시청시간', maxWidth:100,
					cellRenderer: ({ data: { viewTime } }) => {
						// 현재 시간을 가져옵니다.
						if( viewTime ){
							const millis = viewTime;
							const seconds = Math.round(millis / 1000);
							const minutes = Math.floor(seconds / 60);
							const hours = Math.floor(minutes / 60)

							if(hours){
								return `${hours}시${minutes}분${seconds}초`
							}else if(minutes ){
								return `${minutes}분${seconds}초`; // 2시간 03분 45초
							}else {
								return `${seconds}초`; // 2시간 03분 45초
							}
						}

						return '-';
					}, 
				},
				{
					field: 'inOutCount', headerName: '입장수', maxWidth:70,
				}

			],

			// default col def properties get applied to all columns
			defaultColDef: { sortable: true, resizable: true },
			// defaultValue: 0,
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
				"BJ가 프로그램을 실행중에만 집계가 되어요!"
			}
		};
	}
}