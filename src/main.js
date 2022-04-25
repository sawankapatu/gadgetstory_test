import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
// import Routes from './router/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(VueRouter)

// const router = new VueRouter ({
//   routes: Routes
// })

new Vue({
  render: h => h(App),
  // router: router
}).$mount('#app')
