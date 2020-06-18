import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import elenmentUI from 'element-ui'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import 'css/public.less'
import 'css/common.less'
import SlideVerify from 'vue-monoplasty-slide-verify'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(elenmentUI)
Vue.use(SlideVerify)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
