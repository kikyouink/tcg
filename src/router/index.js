import Vue from 'vue'
import Router from 'vue-router'
import online from '@/page/online'
import single from '@/page/single'
import design from '@/page/design'
import gallery from '@/page/gallery'

Vue.use(Router)

export default new Router({
	linkActiveClass:'active',
	routes: [{
			path: '/', 
			redirect: 'gallery',
		},
		{
			path: '/online',
			name: 'online',
			component: online
		},
		{
			path: '/single',
			name: 'single',
			component: single
		},
		{
			path: '/design',
			name: 'design',
			component: design
		},
		{
			path: '/gallery',
			name: 'gallery',
			component: gallery
		}
	],
	mode: 'history',
})
