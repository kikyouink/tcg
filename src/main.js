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
// const URL = 'http://localhost:3000';
Vue.use(VueSocketio, io(URL), store);
Vue.use(VueAxios, axios);
Vue.use(alert);
Vue.use(storage);

Vue.config.productionTip = false

//判断是否是移动端
if (/Android|iPhone|iPod/i.test(navigator.userAgent)) {
	document.addEventListener('deviceready', function () {
		//打开控制台
		const vConsole = new VConsole();

		//开始同步代码
		codePush.notifyApplicationReady();
		var text;
		codePush.sync(function (status) {
			switch (status) {
				case SyncStatus.CHECKING_FOR_UPDATE:
					text = '正在搜寻可用更新...';
					break;
				case SyncStatus.DOWNLOADING_PACKAGE:
					text = '正在努力下载更新，请稍等...';
					break;
				case SyncStatus.INSTALLING_UPDATE:
					text = '下载完毕，安装中...';
					break;
				case SyncStatus.UPDATE_INSTALLED:
					text = '安装完毕，请重新启动靴靴QAQ...';
					break;
			}
			document.querySelector('span').innerHTML=text;
		}, null, function (downloadProgress) {
			if (downloadProgress) {
				var precent = downloadProgress.receivedBytes / downloadProgress.totalBytes;
				document.querySelector('.inner').style.width = (12 * precent) + 'rem';
			}
		});

		// 隐藏状态栏
		setTimeout(function () {
			try {
				if (StatusBar.isVisible) {
					StatusBar.hide();
				}
			} catch (e) { }
		}, 500);

	}, false);
}

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
