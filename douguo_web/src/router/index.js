import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'comp/home'
import admin from 'bk/backstoreApp'
import qianduan from '@/qianduan'
import Shop from '@/components/Shop'
import Caipu from '@/components/Caipu'
import innn from '@/components/CaipuList/index-jx'
import demo from '@/components/CaipuList/demo'
import fenlei from '@/components/CaipuList/fenlei'
import goods from '@/components/Shop/goods'
import zuir from '@/components/CaipuList/zuir'
import zuixin from '@/components/CaipuList/zuixin'
import caidanzxzr from '@/components/CaipuList/caidanzxzr'
import caipinxianqi from '@/components/Caipu/caipinxianqi'
// import { component } from 'vue/types/umd'
import cscp from '@/components/Caipu/cscp'
import mofu from '@/components/menu/zuixin'
import FoodNews from '@/components/FoodNews'
import Foodarticle from '@/components/FoodNews/Allarticle'
import Foodartheme from '@/components/FoodNews/theme'
import Menu from '@/components/menu'
import Menusive from '@/components/menu/comprehensive'
import Menuuser from '@/components/menu/user'
import Menumost from '@/components/menu/most'
import Menumaxmoust from '@/components/menu/maxmost'
import login from 'comp/loginAndRegister/login'
import register from 'comp/loginAndRegister/register'
import start from 'comp/start/drink'
import biji from '@/components/yth/biji'
import bijixq from '@/components/yth/bijixq'
import cuangj from '@/components/yth/cuangj'
import fabu from '@/components/yth/fabu'
import Personer from '@/components/Personer/w-login'
import suggest from '@/components/Suggest'
import dis from '@/components/Discuss/dis'
import shou from '@/components/Discuss/shoucang'

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
        path: '/shop', // 商城
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
            path: '/jx', // 菜谱=》精选
            component: demo
          },
          {
            path: '/ijx', // 菜谱=》最新
            component: innn
          },
          {
            path: '/fenlei', // 分类
            component: fenlei
          },
          {
            path: '/caidanzxzr',// 采单
            component: caidanzxzr,
            redirect: '/zuixin',
            children: [
              {
                path: '/zuixin', // 最新
                component: zuixin
              },
              {
                path: '/zuir', // 最热
                component: zuir
              }
            ]
          }
        ]
      },
      {
        path: '/goods', // 商品详情
        component: goods
      },
      {
        path: '/caipinxianqi', // 菜品详情
        component: caipinxianqi
      },
      {
        path: '/cscp', // 上传菜品
        component: cscp
      },
      {
        path: '/login', // 登录
        component: login
      },
      {
        path: '/register', // 注册
        component: register
      },
      {
        path: '/start', // 星巴克
        component: start
      },
      {
        path: '/biji',
        component: biji
      },
      {
        path: '/bijixq',
        component: bijixq
      },
      {
        path: '/cuangj',
        component: cuangj
      },
      {
        path: '/fabu',
        component: fabu
      },
      {
        path: '/FoodNews',
        component: FoodNews,
        redirect: '/Foodarticle',
        children: [{
          path: '/Foodarticle',
          component: Foodarticle
        }, {
          path: '/Foodartheme',
          component: Foodartheme
        }]
      },{
        path: '/Menu',
        component: Menu,
        redirect: '/Menusive',
        children: [{
          path: '/Menusive',
          component: Menusive
        }, {
          path: '/Menuuser',
          component: Menuuser
        }, {
          path: '/Menumost',
          component: Menumost
        }, {
          path: '/Menumaxmoust',
          component: Menumaxmoust
        },
        {
          path: '/mofu',
          component: mofu
        }]
      },
      {
        path: '/suggest',// 关于豆果
        component: suggest
      },
      {
        path: '/Personer', // 账号设置
        component: Personer
      },
      {
        path: '/discuss', // 评论及回复
        component: dis
      },
      {
        path: '/Discuss', // 评论及回复
        component: shou
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

// 解决elementui中重复点击事件的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}