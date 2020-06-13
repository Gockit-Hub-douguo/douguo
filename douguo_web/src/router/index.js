import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from 'bk/backstoreApp'
Vue.use(VueRouter)

const routes = [
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
