import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from "vee-validate"
import Home from '../components/Home'
import Bvn from '../components/Bvn'
import PayForRide from '../components/PayForRide'
import Redirect from '../components/Redirect'

Vue.use(Router)
Vue.use(VeeValidate)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bvn',
      name: 'Bvn',
      component: Bvn
    }, 
    {
      path: '/pay-for-ride',
      name: 'PayForRide',
      component: PayForRide
    }
    ,
    {
      path: '/redirect',
      name: 'Redirect',
      component: Redirect
    }
  ]
})
