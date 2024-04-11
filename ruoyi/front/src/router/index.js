import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/2',
        component: Layout,
    },
    {
        path: '',
        component: () => import('@/views/login.vue'),
    }
]

export const dynamicRoutes = [
  {

  }

]

export default new Router({
    mode: 'history', // 去掉url中的#
    routes: constantRoutes
})


