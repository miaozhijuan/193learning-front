<template>
  <div class="pie">
    <div id="pie1">
      <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
      <div id="main1" style="float:left;width:1100px;height: 1000px"></div>
    </div>
  </div>
</template>

<script>
var echarts = require('echarts')
export default {
  name: 'basecharts',
  data () {
    return {
      data1: []
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData: function () {
      this.requested = true
      var url = this.global_request_url.requestMapData
      this.$axios.post(url).then(resp => {
        console.log('-----------进入echarts加载数据')
        // 动态数据
        this.data1 = resp.data
        console.log(this.data1.length)
        // 问题遍历数据并赋值？？？？？？？？？？？？？未解决
        var jsondataName = []
        var jsondata = []
        for (var i = 0; i < this.data1.length; i++) {
          jsondataName.push(this.data1[i].key)
          jsondata.push({
            name: this.data1[i].key,
            value: this.data1[i].doc_count
          })
        }
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main1'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '隐患数据类型统计',
            subtext: '白山',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 150,
            top: 200,
            bottom: 20,
            data: jsondataName
          },
          series: [
            {
              name: '故障类型',
              type: 'pie',
              radius: '40%',
              center: ['40%', '30%'],
              data: jsondata,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      })
    },
    async funB () {
      // this.$axios.defaults.headers = {'Access-Control-Allow-Origin': 'localhost:8888'}
      this.$axios.defaults.headers = {
        'access-control-allow-headers': 'Origin,Accept,Xrequestedwith,Contenttype',
        'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'access-control-allow-origin': '*'
        // 'access-control-expose-headers': 'Authorization'
      }
      // todo为什么post请求可以get请求不行，需要处理
      this.$axios.defaults.headers = {'Content-Type': 'application/json'}
      var res = await this.$axios.post('http://127.0.0.1:8000/statisticForEcharts/') // 这里的res就是axios请求回来的结果
      console.log(res.data[0])
      console.log(res.data[0].key)
      console.log(res.data[0].doc_count)
    }
  },
  created: function () {
    console.log(999999999999999)
    // this.funB()
  }
}
</script>
<style>
</style>
