import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        platform: '',
		xxxxxx:"xxxxxxxxxxxxxxxxxxxxx",
		count:'sdsds',
		test:'test'
    },
  	mutations: {
    	SET_APP(state, platform) {
      		state.platform = platform;
    	},
    	testChangex(state, temp){
        	state.xxxxxx = temp;
        },
        change(state,str){
            state.test=str;
        }
        
  	},
  	actions: {
    	setApp({commit}, platform) {
            commit('SET_APP', platform);
    	},
    	testChangex({commit}, xxxxxx){
			console.log(xxxxxx);
			commit('testChangex', "action change value:"+xxxxxx.a);        
    	}
  	},
  	getters: {
		getApp: (state) => state.platform,
		doneTodos: state => {
		return state.xxxxxx;
		}
  	}
})