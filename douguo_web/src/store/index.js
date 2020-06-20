import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: 1,
    data: {}
  },
  mutations: {
    // 登录跳转传值
    clik (h, b) {
      // var a= this.state.a
      this.state.a = b
      console.log(this.state.a)
    },
    // 对星巴克菜单数据存储 data(数据本身，接收的参数)
    data (data,obj) {
      this.state.data = obj
      console.log(this.state.data)
    }
  },
  actions: {
  },
  modules: {
  }
})
