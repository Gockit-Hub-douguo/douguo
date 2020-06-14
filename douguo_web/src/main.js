import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import elenmentUI from 'element-ui'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import 'css/public.less'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(elenmentUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
