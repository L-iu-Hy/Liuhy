import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import '@/mock/index'
import '@/assets/styles/reset.css'
import '@/assets/icon/iconfont.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
