import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home.vue'

Vue.use(VueRouter)

const routes = [
  // 与基座路由name对应
  {
    path: '/vue2-home',
    name: 'vue2-home',
    component: Home
  },
  {
    path: '/vue2-page2',
    name: 'vue2-page2',
    component: () => import(/* webpackChunkName: "page2" */ './pages/page2.vue')
  }
]

export default routes
