// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueSocketio from 'vue-socket.io';
import io from 'socket.io-client';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VConsole from 'vconsole'
import alert from './plugins/alert/index'
import storage from './plugins/storage/index'
import './api.js';

const URL='http://loly.club:3000';
Vue.use(VueSocketio, io(URL), store);
Vue.use(VueAxios, axios);
Vue.use(alert);
Vue.use(storage);

Vue.config.productionTip = false

//判断是否是移动端
if (/Android|iPhone|iPod/i.test(navigator.userAgent)) {
	document.addEventListener('deviceready', function () {
		//打开控制台
		console.log('n');
		const vConsole = new VConsole();

		// 隐藏状态栏
		setTimeout(function () {
			if (StatusBar.isVisible) {
				StatusBar.hide();
			}
		}, 500);

	}, false);
}

new Vue({
	router,
	store,
	render: h => h(App)
  }).$mount("#app");