import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
