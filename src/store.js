import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const game = {
    namespaced: true,
    state: {
        players: {},
        config: {
        },
    },
    mutations: {
        initPlayers(state, players) {
            state.players.enemy = players.enemy;
            state.players.slef = players.self;
        },
        // gameDraw(state) {
        //     console.log(getters);
        //     console.log(getters.enemy);
        //     getters.enemy.draw(4);
        //     getters.self.draw(4);
        // },
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
        a:1,
    },
    mutations: {
        draw(state, e) {
            // var [target, num, cards] = [e.target, e.num, e.cards];
            console.log(target.name + ' 摸了 ' + num + ' 张牌：');
        },
        damage(state, e) {
            console.log(e);
            var [source, target] = [e.source, e.target];
            console.log(source.name + '对' + target.name + '造成了' + 'e.num' + '点伤害');
        },
    },
    actions: {
        draw({ commit }, e) {
            console.log(e);
            return new Promise((reslove, reject) => {
                commit('cardPile/requireCard', e, {root: true});

                // store.dispatch('requireCard', num).then((cards) => {
                //     // var [target, num, cards] = [e.target, e.num, e.cards];
                //     // console.log(target.name + ' 摸了 ' + num + ' 张牌：');
                //     console.log(cards);
                //     console.log(JSON.parse(JSON.stringify(cards)));
                //     reslove(cards);
                // });
            })
        },
        bb(context){
            console.log('1');
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
        requireCard(state, e) {
            var cards = state.cardPile.splice(0, e.num);
            console.log(cards);
            e.callback(cards);
        },
        damage(state, e) {
            console.log(e);
            var [source, target] = [e.source, e.target];
            console.log(source.name + '对' + target.name + '造成了' + 'e.num' + '点伤害');
        },
    },
    actions: {}
}

const store = new Vuex.Store({
    modules: {
        game: game,
        player: player,
        handCard: handcard,
        cardPile: cardPile
    }
})

export default store

