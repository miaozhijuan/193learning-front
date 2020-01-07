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
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import VeLine from 'v-charts/lib/line.common'
import VeMap from 'v-charts/lib/map.common'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markArea'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/title'
import 'zrender/lib/svg/svg'
import 'v-charts/lib/style.css'
import Print from 'vue-print-nb'
import store from './store/store'
import Vuex from 'vuex'
import 'default-passive-events'
import vueLocalStorage from 'vue-localstorage'
import uploader from 'vue-simple-uploader'
import global_ from './components/global/Global'// 引用文件
// [VeLine, VeMap].forEach(comp => {
//    Vue.component(comp.name, comp)
// })
// eslint-disable-next-line no-unexpected-multiline,no-sequences
[VeLine, VeMap].forEach(comp => {
  Vue.component(comp.name, comp)
})
Vue.prototype.global_request_url = global_ // 全局变量文件,挂载到Vue实例上面
axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 'Access-Control-Allow-Origin': 'localhost:8888'}

Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(Rainbow)
Vue.use(ElementUI)
Vue.use(Print)
Vue.use(Vuex)
Vue.use(vueLocalStorage)
Vue.use(uploader)
// todo放入预定义用户支持对用户的增删改查
let users = []
users.push(JSON.parse('{"username":"admin","password":"123"}'))
let parsed = JSON.stringify(users)
localStorage.setItem('users', parsed)
console.log(JSON.parse(localStorage.getItem('users'))[0].username)

let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.use({vm})
