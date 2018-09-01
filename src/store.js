import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        previewCard:null,
        config: {
        },

    },
    mutations: {
        //卡牌预览
        showPreviewCard(state,params){
            if(params==null) state.previewCard=null;
            else state.previewCard=params;
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
        getApp: (state) => state.platform,
        doneTodos: state => {
            return state.xxxxxx;
        }
    }
})
