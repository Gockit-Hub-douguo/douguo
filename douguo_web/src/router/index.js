import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'comp/home'
import admin from 'bk/backstoreApp'
Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    component: home
  },
  {
    path: '/admin',
    component: admin,
    children: [
       {
         path: '/admin/login'
       }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
