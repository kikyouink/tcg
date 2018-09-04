import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const game = {
    namespaced: true,
    state: {
        players: {

        },
        eventStack: {

        },
        // statusEvent: null,
        connect: false,
        config: {
        },
    },
    mutations: {
        SOCKET_CONNECT: (state, status) => {
            console.log('已连接');
            state.connect = true;
        },
        SOCKET_DISCONNECT: (state, status) => {
            console.log('已断开');
            state.connect = false;
        },
        SOCKET_ERROR: (state, status) => {
            console.log('发生错误'+status);
            state.connect = false;
        },
        SOCKET_LOG: (state, status) => {
            console.log(status);
        },
        initPlayers(state, players) {
            state.players.enemy = players.enemy;
            state.players.slef = players.self;
        },
    },
    actions: {},
    getters: {
        // enemy(state, getters, rootState){
        //     return state.players.enemy
        // },
        // self: (state) => state.players.self,
    }
}

const player = {
    namespaced: true,
    state: {
        a: 1,
    },
    mutations: {
        // draw(state, e) {
        //     var [target, num, cards] = [e.target, e.num, e.cards];
        //     console.log(target.name + ' 摸了 ' + num + ' 张牌：');
        // },
        SOCKET_CC: (state, msg) => {
            console.log(msg);
        },
    },
    actions: {
        draw: async function ({ commit }, e) {
            commit('cardPile/requireCard', e.num, { root: true });
            var cards = store.state.cardPile.statusCards;
            console.log(cards);
            var [target, num] = [e.target, e.num];
            console.log(target.name + ' 摸了 ' + num + ' 张牌');
            return cards;
        },
        damage(state, e) {
            console.log(e);
            var [source, target, num] = [e.source, e.target, e.num];
            console.log(source.name + '对' + target.name + '造成了' + num + '点伤害');
        },
        recover(state, e) {
            console.log(e);
            var [target, num] = [e.target, e.num];
            console.log(target.name + '回复了' + num + '点体力');
        }
    }
}

const handcard = {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {}
}

const cardPile = {
    namespaced: true,
    state: {
        statusCards: null,
        cardPile: [
            {
                id: '179',
                name: '魏领土',
                type: 'land',
                country: 'wei',
            }, {
                id: '180',
                name: '魏领土',
                type: 'land',
                country: 'wei',
            }, {
                id: '181',
                name: '蜀领土',
                type: 'land',
                country: 'shu',
            }, {
                id: '182',
                name: '蜀领土',
                type: 'land',
                country: 'shu',
            }, {
                id: '183',
                name: '吴领土',
                type: 'land',
                country: 'wu',
            }, {
                id: '185',
                name: '群领土',
                type: 'land',
                country: 'qun',
            }, {
                id: '022',
                name: '青州探马',
                type: 'person-chihou',
                country: 'wei-1',
                data: '1-2-2',
            }, {
                id: '156',
                name: '亡国哀民',
                type: 'person-baixing',
                country: 'qun-1',
                data: '3-1-4',
                skill: ['chongfeng'],
            }, {
                id: '056',
                name: '猛将一击',
                type: 'magic-basic',
                country: 'shu-1',
                cost: 5,
            }, {
                id: '077',
                name: '英勇无畏',
                type: 'buff',
                country: 'shu-1',
                cost: 2,
            }, {
                id: '023',
                name: '司隶步兵',
                type: 'person-bubing',
                country: 'wei',
                data: '3-3-3',
            }, {
                id: '086',
                name: '大雾',
                type: 'magic-instant',
                country: 'wu-1',
                cost: 1,
            }, {
                id: '050',
                name: '归隐杰女•黄月英',
                type: 'ws-famale:person-yinshi',
                country: 'shu-1',
                data: '2-1-3',
            }, {
                id: '178',
                name: '倚天剑',
                type: 'ws:equip-weapon',
                cost: 4,
            }
        ]
    },
    mutations: {
        requireCard(state, num) {
            var cards = state.cardPile.splice(0, num);
            state.statusCards = cards;
        },
        damage(state, e) {
            console.log(e);
            var [source, target] = [e.source, e.target];
            console.log(source.name + '对' + target.name + '造成了' + 'e.num' + '点伤害');
        },
    },
    actions: {}
}

const eventHander = store => {
    // 当 store 初始化后调用
    store.subscribe((mutation, state) => {
        console.log(mutation);
        // 每次 mutation 之后调用
        // mutation 的格式为 { type, payload }
    })
}

const store = new Vuex.Store({
    modules: {
        game: game,
        player: player,
        handCard: handcard,
        cardPile: cardPile,
        plugins: [eventHander]
    }
})

export default store

