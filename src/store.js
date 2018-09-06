import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const ui = {
    namespaced: true,
    state: {
        alert: {
            show:false,
            text: String,
            icon: String,
            type: String,
        }
    },
    mutations: {
        showAlert(state, status){
            console.log(status);
            for(var i in status){
                Vue.set(state.alert,i,status[i]);
            }
            console.log(state.alert.icon)
            Vue.set(state.alert,'show',true);
        },
        hideAlert(state, status){
            Vue.set(state.alert,'show',false);
        }
    },
}

const game = {
    namespaced: true,
    state: {
        players: {

        },
        //堆叠
        onlinePlayers: {

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
            console.log('发生错误' + status);
            state.connect = false;
        },
        // initPlayers(state, players) {
        //     state.players.enemy = players.enemy;
        //     state.players.slef = players.self;
        // },
    },
    actions: {
        // socket_list: ({ commit, state }, status) => {
        //     console.log('玩家列表');
        //     console.log(status);
        // },
    },
    getters: {

    }
}


const player = {
    namespaced: true,
    state: {
        haha: false,
    },
    mutations: {
    },
    actions: {
        draw: async function ({ commit, state }, e) {
            commit('cardPile/requireCard', e.num);
            var cards = state.cardPile.resultCards;
            console.log(cards);
            var [target, num] = [e.target, e.num];
            console.log(target.name + ' 摸了 ' + num + ' 张牌');
            return cards;
        },
        damage({ commit, state }, e) {
            console.log(e);
            var [source, target, num] = [e.source, e.target, e.num];
            console.log(source.name + '对' + target.name + '造成了' + num + '点伤害');
        },
        recover({ commit, state }, e) {
            console.log(e);
            var [target, num] = [e.target, e.num];
            console.log(target.name + '回复了' + num + '点体力');
        }
    },

    //嵌套模块
    modules: {
        // 每个用户私有的手牌
        handCard: {
            namespaced: true,
            state: {
                preview: false,
                previewCard: null,
            },
            mutations: {
                hidePreviewCard(state) {
                    state.preview = false;
                },
                setPreviewCard(state, card) {
                    state.previewCard = card;
                    state.preview = true;
                }
            },
            actions: {}
        },

        // 每个用户私有的牌堆
        cardPile: {
            namespaced: true,
            state: {
                resultCards: Array || Object,
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
                    // console.log(JSON.parse(JSON.stringify(state.cardPile)));
                    var cards = state.cardPile.splice(0, num);
                    state.resultCards = cards;
                },
            },
            actions: {}
        }
    }
}

const store = new Vuex.Store({
    modules: {
        ui:ui,
        game: game,
        player: player,
    }
})

export default store

