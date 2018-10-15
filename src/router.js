import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout/Layout.vue'

Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/404', component: () => import('@/views/404'), hidden: true },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: 'Dasboard',
      hidden: true,
      children: [{
        path: 'dashboard',
        component: () => import('@/views/Home.vue')
      }]
    },
    {
      path: '/a',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'A',
          component: () => import('@/views/A/index'),
          meta: { title: 'A', icon: 'form' }
        }
      ]
    },
    {
      path: '/b',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'B',
          component: () => import('@/views/B/index'),
          meta: { title: 'B', icon: 'nested' }
        }
      ]
    },
    {
      path: '/c',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'C',
          component: () => import('@/views/C/index'),
          meta: { title: 'C', icon: 'eye' }
        }
      ]
    },
    {
      path: '/d',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'D',
          component: () => import('@/views/D/index'),
          meta: { title: 'D', icon: 'hamburguer' }
        }
      ]
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
