import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const game = {
    namespaced: true,
    state: {
        mode: '',
        self: {},
        oppo: {},
        //堆叠
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
            state.reconnecting = false;
        },
        SOCKET_DISCONNECT: (state, status) => {
            console.log('已断开');
            state.connect = false;
        },
        SOCKET_ERROR: (state, status) => {
            console.log('发生错误' + status);
            state.connect = false;
        },
        setMode(state, mode) {
            state.mode = mode;
        },
        //注册玩家，并不是定义玩家
        setSelf(state, self) {
            state.self = self;
        },
        setOppo(state, oppo) {
            state.oppo = oppo;
        }
    },
    actions: {

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
        draw({ commit, state }, e) {
            var [target, num, cards] = [e.target, e.num, e.cards];
            console.log(target.name + ' 摸了 ' + num + ' 张牌:');
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
    actions: {

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
                cardPile: [],
            },
            mutations: {
                // requireCard(state, num) {
                //     var cards = state.cardPile.splice(0, num);
                //     state.resultCards = cards;
                // },
            },
            actions: {}
        }
    }
}

const ss = (store) => {
    // 当 store 初始化后调用
    store.subscribe((mutation, state) => {
        console.log(mutation);
    })
}

const store = new Vuex.Store({
    modules: {
        game: game,
        player: player,
        plugins: [ss]
    }
})

export default store

