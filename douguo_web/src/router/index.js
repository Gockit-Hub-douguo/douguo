import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'comp/home'
import admin from 'bk/backstoreApp'
import qianduan from '@/qianduan'
import Shop from '@/components/Shop'
import Caipu from '@/components/Caipu'
import innn from '@/components/CaipuList/index-jx'
import demo from '@/components/CaipuList/demo'
import goods from '@/components/Shop/goods'

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    component: qianduan,
    redirect: (to)=>{
        return '/home'
    },
    children: [
      {
        path: '/home',
        component: home
      }, 
      {
        path: '/shop',
        component: Shop
      },
      {
        path: '/Caipu',
        component: Caipu,
        redirect: (to)=>{
            return '/ijx'
        },
        children: [
          {
            path: '/jx',
            component: demo
          },
          {
            path: '/ijx',
            component: innn
          }
        ]
      },
      {
        path: '/goods',
        component: goods
      }
    ]
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
