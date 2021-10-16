import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "about" */ '../views/demo.vue')
  },
  {
    path: '/Treecom',
    name: 'Treecom',
    component: () => import(/* webpackChunkName: "about" */ '../views/Treecom.vue')
  },
  {
    path: '/tablecom',
    name: 'tablecom',
    component: () => import(/* webpackChunkName: "about" */ '../views/tablecom.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
