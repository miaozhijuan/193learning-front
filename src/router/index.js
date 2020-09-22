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
import chartmap from '../components/lishikai/chartmap'
import tmpmeasure from '../components/lishikai/tmpmeasure'
import regulations from '../components/lishikai/regulations'
import accidentManager from '../components/lishikai/accidentManager'
import fileupload from '../components/lishikai/fileupload'
import fileupload2 from '../components/lishikai/fileupload2'
import knowledgeGraph from '../components/knowlegeGraph/knowledgeGraph'
import knowledgeGraphReason from '../components/knowlegeGraph/knowledgeGraph-reason'
import lineStack from '../components/knowlegeGraph/lineStack'
import barLabelRotation from '../components/knowlegeGraph/barLabelRotation'
import pieCustom from '../components/knowlegeGraph/pieCustom'
import datasetEncode0 from '../components/knowlegeGraph/datasetEncode0'
import barStack from '../components/knowlegeGraph/barStack'
import XCSearch from '../components/extend/XCSearch'
import XCSearchChartmap from '../components/extend/chartmap_template'
import chartmap_unitStatistics from '../components/extend/chartmap_unitStatistics_'
import history_trend from '../components/extend/chartmap_history_trend'
import hidden_reason from '../components/extend/chartmap_reason_'
import chartmap_from_ from '../components/extend/chartmap_from'
import hiddenOfficeFrom from '../components/extend/chartmap_hiddenOfficeFrom'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      // path: '/lishikai',
      path: '/knowclient',
      name: 'LiShikai',
      component: LiShikai,
      children: [{
        path: 'sunshengze',
        name: 'SunShengze',
        component: SunShengze
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
        path: 'chartmap',
        name: 'chartmap',
        component: chartmap
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
      },
      {
        path: 'accidentManager',
        name: 'accidentManager',
        component: accidentManager
      },
      {
        path: 'fileupload',
        name: 'fileupload',
        component: fileupload
      },
      {
        path: 'fileupload2',
        name: 'fileupload2',
        component: fileupload2
      },
      {
        path: 'knowledgeGraph',
        name: 'knowledgeGraph',
        component: knowledgeGraph
      },
      {
        path: 'knowledgeGraphReason',
        name: 'knowledgeGraphReason',
        component: knowledgeGraphReason
      },
      {
        path: 'lineStack',
        name: 'lineStack',
        component: history_trend
      },
      {
        path: 'barLabelRotation',
        name: 'barLabelRotation',
        component: barLabelRotation
      },
      {
        path: 'pieCustom',
        name: 'pieCustom',
        component: hidden_reason
      },
      {
        path: 'datasetEncode0',
        name: 'datasetEncode0',
        component: chartmap_from_
      },
      {
        path: 'barStack',
        name: 'barStack',
        component: hiddenOfficeFrom
      },
      {
        path: 'XCSearch',
        name: 'XCSearch',
        component: XCSearch
      },
      {
        path: 'XCSearchChartmap',
        name: 'XCSearchChartmap',
        component: XCSearchChartmap
      },
      {
        path: 'chartmap_unitStatistics',
        name: 'chartmap_unitStatistics',
        component: chartmap_unitStatistics
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
