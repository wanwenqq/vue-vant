
import Vue from 'vue'
import VueRouter from 'vue-router'
// 解决两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


import Home from '../App.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/home',
    children: [
        {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
        },
        {
            path: '/apps',
            name: 'apps',
            component: () => import(/* webpackChunkName: "apps" */ '../views/Apps.vue')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
        }
    ]
  },
]


const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
})

export default router
