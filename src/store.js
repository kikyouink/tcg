import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
        gameDraw(getters) {
            getters.enemy.draw(4);
            getters.self.draw(4);
        },
        draw(state, e) {
            var [target, num] = [e.target, e.num];
            console.log(target.name + ' 摸了 ' + e.num + ' 张牌');
        },
        damage(state, e) {
            console.log(e);
            var [source, target] = [e.source, e.target];
            console.log(source.name + '对' + target.name + '造成了' + 'e.num' + '点伤害');
        },

    },
    actions: {
        setApp({
            commit
        }, platform) {
            commit('SET_APP', platform);
        },
    },
    getters: {
        enemy: (state) => state.players.enemy,
        self: (state) => state.players.self,

        getApp: (state) => state.platform,
        doneTodos: state => {
            return state.xxxxxx;
        }
    }
})
