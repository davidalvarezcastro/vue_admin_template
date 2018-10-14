import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ path: '/404', component: () => import('@/views/404'), hidden: true },
		{
			path: '/',
			component: Layout,
			redirect: '/home',
			name: 'Home',
			hidden: true,
			children: [{
				path: 'home',
				component: () => import('@/views/Home')
			}]
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{ path: '*', redirect: '/404', hidden: true }
	]
})
