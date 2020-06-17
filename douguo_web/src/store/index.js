import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: 1
  },
  mutations: {
    // 登录跳转传值
    clik (h, b) {
      // var a= this.state.a
      this.state.a = b
      console.log(this.state.a)
    }
  },
  actions: {
  },
  modules: {
  }
})
