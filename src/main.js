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
// var game={
//     log(val){
//         console.log(JSON.parse(JSON.stringify(val)));
//     }
// }
/* eslint-disable no-new */

const vConsole = new VConsole()

// document.addEventListener('deviceready', function() {
    new Vue({
        el: '#app',
        router,
        store,
        components: { App },
        template: '<App/>'
    })
//     window.navigator.splashscreen.hide();
//     console.log(StatusBar);
//     StatusBar.hide();
// }, false);
