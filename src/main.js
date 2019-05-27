import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import VueProgressBar from 'vue-progressbar'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import Axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(VueProgressBar, {
  color: 'green',
  failedColor: '#ffffff',
  height: '5px'
})
// Vue.filter('filterProducts', function (value) {})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
  App},
  template: '<App/>'
})
