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
// [VeLine, VeMap].forEach(comp => {
//    Vue.component(comp.name, comp)
// })
// eslint-disable-next-line no-unexpected-multiline,no-sequences
[VeLine, VeMap].forEach(comp => {
  Vue.component(comp.name, comp)
})
axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
Vue.use(Rainbow)
Vue.use(ElementUI)
Vue.use(Print)
let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use({vm})
