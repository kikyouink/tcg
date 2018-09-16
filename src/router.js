import Vue from 'vue'
import Router from 'vue-router'
import online from '@/view/online'
import game from '@/view/game'
import design from '@/view/design'
import gallery from '@/view/gallery'
import user from '@/view/user'
// import update from '@/view/update'

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
		},
	],
})
