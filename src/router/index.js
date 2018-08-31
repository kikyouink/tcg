import Vue from 'vue'
import Router from 'vue-router'
import online from '@/page/online'
import single from '@/page/single'
import design from '@/page/design'

Vue.use(Router)

export default new Router({
  routes: [
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
  ],
  mode: 'history',
})
