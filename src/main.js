// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import VConsole from 'vconsole'
import VueAlert from './plugins/alert/index'
import storage from './plugins/storage/storage'
import './api.js';

Vue.use(VueSocketio, socketio('http://172.81.224.195:3000'), store);
Vue.use(VueAlert);
Vue.use(storage)

Vue.config.productionTip = false

//判断是否是移动端
if(/Android|iPhone|iPod/i.test(navigator.userAgent)){
	document.addEventListener('deviceready', function() {
		//打开控制台
		 const vConsole = new VConsole();
	 
		 //开始同步代码
		 codePush.notifyApplicationReady();
		 codePush.sync(null, null,function(downloadProgress){
			 if (downloadProgress) {
				 var precent=downloadProgress.receivedBytes/downloadProgress.totalBytes;
				 document.querySelector('.inner').style.width=(12*precent)+'rem';
				 if(precent>=0.95) document.querySelector('span').innerHTML='下载完成，请重新启动...';
			 }
		 });
	 
		 //隐藏状态栏
		 setTimeout(function(){
			 try{
				 if (StatusBar.isVisible) {
					 StatusBar.hide();
				 }
			 }catch(e){}
		 },750);
		 
	 }, false);
}

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
