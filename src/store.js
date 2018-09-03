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
    state: {},
    mutations: {
        draw(state, e) {

            var [target, num, cards] = [e.target, e.num, e.cards];
            console.log(target.name + ' 摸了 ' + num + ' 张牌：');
            console.log(cards);
        },
        damage(state, e) {
            console.log(e);
            var [source, target] = [e.source, e.target];
            console.log(source.name + '对' + target.name + '造成了' + 'e.num' + '点伤害');
        },
    },
    actions: {}
}

const card = {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {}
}

const store = new Vuex.Store({
    modules: {
        game: game,
        player: player,
        card: card
    }
})
export default store

