import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LiShikai from '@/components/LiShikai'
import SunShengze from '@/components/SunShengze'
import YuanXingliang from '@/components/YuanXingliang'
import Table from '../components/lishikai/Table.vue'
import Login from '@/components/page/Login.vue'
import User from '../components/lishikai/user.vue'
import BaseCharts from '../components/lishikai/BaseCharts'
import map from '../components/lishikai/chartmap'
import tmpmeasure from '../components/lishikai/tmpmeasure'
import regulations from '../components/lishikai/regulations'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/lishikai',
      name: 'LiShikai',
      component: LiShikai,
      children: [{
        path: 'sunshengze',
        name: 'SunShengze',
        component: SunShengze
      },
      {
        path: 'yuanxingliang',
        name: 'YuanXingliang',
        component: YuanXingliang
      },
      {
        path: 'table',
        name: 'Table',
        component: Table
      },
      {
        path: 'user',
        name: 'user',
        component: User
      },
      {
        path: 'charts',
        name: 'charts',
        component: BaseCharts
      },
      {
        path: 'map',
        name: 'map',
        component: map
      },
      {
        path: 'tmpmeasure',
        name: 'tmpmeasure',
        component: tmpmeasure
      },
      {
        path: 'regulations',
        name: 'regulations',
        component: regulations
      }
      ]
    },
    {
      path: '/sunshengze',
      name: 'SunShengze',
      component: SunShengze

    },
    {
      path: '/yuanxingliang',
      name: 'YuanXingliang',
      component: YuanXingliang

    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
      meta: { title: '登录' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
