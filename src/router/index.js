import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LiShikai from '@/components/LiShikai'
import SunShengze from '@/components/SunShengze'
import YuanXingliang from '@/components/YuanXingliang'
import Table from '../components/lishikai/Table.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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

    }
  ]
})
