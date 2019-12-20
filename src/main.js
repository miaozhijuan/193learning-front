// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line no-unused-vars
import $ from '../node_modules/jquery/dist/jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import Rainbow from 'rainbow-nash'
import 'rainbow-nash/dist/rainbow-nash.css'
import axios from 'axios'
axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
Vue.use(Rainbow)

let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use({vm})
