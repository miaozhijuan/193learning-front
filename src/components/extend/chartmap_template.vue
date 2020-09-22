<template>
  <div class="pie">
    <div id="pie1">
      <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
      <div id="main1" style="float:left;width:100%;height: 800px"></div>
    </div>
  </div>
</template>

<script>
var echarts = require('echarts')
export default {
  name: 'chartmap',
  // 1、数据域
  data () {
    return {
      data1: [],
      jsondata:[]
    }
  },
  mounted () {
    //2、数据获取

    this.getAsync()
    this.initData()
  },
  methods: {
    async getAsync () {
      try {

      //解决异步问题，只能在一个异步请求里处理所有操作


      } catch (err) {

      }
    },
    initData: function () {
      this.requested = true
      var url = this.global_request_url.ifZLcomplete
      this.$axios.get(url).then(resp => {
        console.log('-----------进入echarts加载数据')
        // 动态数据
        if(resp.data.length==1){

          this.data1.push(resp.data[0])
        }else{
          this.data1 = resp.data
        }
        console.log(this.data1.length)
        // 3、作用域--数据处理之后放到这里，一般为数组结构放置
        var jsondataName = []
        for (var i = 0; i < this.data1.length; i++) {
          if (this.data1[i].key=="是"){

            jsondataName.push("已治理");
            this.jsondata.push({
              name: "已治理",
              value: this.data1[i].doc_count
            })
          }else{
            jsondataName.push("未治理");
            this.jsondata.push({
              name: "未治理",
              value: this.data1[i].doc_count
            })
          }


        }
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main1'))


        // 绘制图表
        myChart.setOption( {
          title: {
            text: '是否已治理统计',
            subtext: '白山',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x:'right',

            data: jsondataName
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: this.jsondata
            }
          ]
        })
      })
    }
  },
  created: function () {
    // console.log(999999999999999)
    // // this.funB()
  }
}
</script>
<style>
</style>
