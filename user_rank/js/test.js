setTimeout( () => {
    window.user.receive('IN', { 
        userList : [ {
        userId: "jsp021",
        userNickname: "jsp021(2)"
        }]
    })
}, 100)

setTimeout(() => {
    window.user.receive('BALLOON_GIFTED', {
        userId: 'jsp021',
        userNickname: '귀요미',
        count: 10
    })

    window.user.receive('BALLOON_GIFTED', {
        userId: 'y1026',
        userNickname: '짭구형2↑',
        count: 7
    })
    window.user.receive('BALLOON_GIFTED', {
        userId: 'y1026',
        userNickname: '짭구형2↑',
        count: 7
    })

    window.user.receive('BALLOON_GIFTED', {
        userId: 'y1026',
        userNickname: '짭구형2↑',
        count: 7
    })

    window.user.receive('BALLOON_GIFTED', {
        userId: 'rkdakstlr911',
        userNickname: '강만식',
        count: 7
    })

    window.user.receive('BALLOON_GIFTED', {
        userId: 'ywlee141',
        userNickname: '찹살맛딸기떡',
        count: 7
    })

    window.user.receive('CHALLENGE_MISSION_GIFTED', {
        userId: 'qwerybs',
        userNickname: '꼴데꼴데꼴데',
        count: 8
    })

    window.user.receive('CHALLENGE_MISSION_GIFTED', {
        userId: 'doro0111',
        userNickname: '세찬',
        count: 8
    })

    window.user.receive('CHALLENGE_MISSION_GIFTED', {
        userId: 'vlfvlf789',
        userNickname: '빵훈이',
        count: 8
    })
    
    

    window.user.receive('CHALLENGE_MISSION_GIFTED', {
        userId: 'ckdtjs505',
        userNickname: 'sonia',
        count: 8
    })



    // window.user.receive('MESSAGE', {
    //     userId: 'ckdtjs505',
    //     userNickname: 'sonia',
    //     message: '하이염'
    // })


    // window.user.receive('MESSAGE', {
    //     userId: 'ckdtjs505',
    //     userNickname: 'sonia',
    //     message: '하이염2'
    // })


    // window.user.receive('OUT', {
    //     userList : [ {
    //     userId: "jsp021",
    //     userNickname: "jsp021(2)"
    //     }]
    // })
}, 5000)

setTimeout( () => {
    window.user.receive('IN', {
        userList : [ {
        userId: "jsp021",
        userNickname: "jsp021(2)"
        }]
    })
}, 6000)

setTimeout( () => {
    window.user.receive('OUT', {
        userList : [ {
        userId: "jsp021",
        userNickname: "jsp021(2)"
        }]
    })
}, 8000)