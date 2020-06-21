import Vue from 'vue'
import Vuex from 'vuex'
import { getgoodslist } from 'ax/goodsdeal.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: 1,
    data: {},
    goodslist: []
  },
  mutations: {
    // 登录跳转传值
    clik (h, b) {
      // var a= this.state.a
      this.state.a = b
      console.log(this.state.a)
    },
    // 对豆果商城数据获取
    changdggoods(state, list){
      state.goodslist = list
    },
    // 对星巴克菜单数据存储 data(数据本身，接收的参数)
    data (data,obj) {
      this.state.data = obj
      console.log(this.state.data)
    }
  },
  actions: {
    getdggoods({ commit }){
      getgoodslist().then((data)=>{
        commit('changdggoods',data)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  modules: {
  }
})
