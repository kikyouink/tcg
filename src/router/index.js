import Vue from 'vue'
import Router from 'vue-router'
import online from '@/page/online'
import game from '@/page/game'
import design from '@/page/design'
import gallery from '@/page/gallery'
import user from '@/page/user'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/', 
			redirect: 'gallery',
		},{
			path: '/online',
			name: 'online',
			component: online
		},{
			path: '/game',
			name: 'game',
			component: game
		},{
			path: '/design',
			name: 'design',
			component: design
		},{
			path: '/gallery',
			name: 'gallery',
			component: gallery
		},{
			path: '/user',
			name: 'user',
			component: user
		}
	],
})
