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

    this.initData()
  },
  methods: {
    initData: function () {
      this.requested = true
      var url = this.global_request_url.hiddenReason
      this.$axios.get(url).then(resp => {
        // 动态数据

          this.data1 = resp.data


        // 3、作用域--数据处理之后放到这里，一般为数组结构放置
        var jsondataName = []
        for (var i = 0; i < this.data1.length; i++) {

            jsondataName.push(this.data1[i].key);
            this.jsondata.push({
              name: this.data1[i].key,
              value: this.data1[i].doc_count
            })


        }
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main1'))


        // 绘制图表
        myChart.setOption(  {
          title: {
            text: '隐患数量统计',
            subtext: '隐患原因',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: jsondataName, //data.legendData

            selected: this.jsondata //  data.selected
          },
          series: [
            {
              name: '隐患原因',
              type: 'pie',
              radius: '55%',
              center: ['40%', '50%'],
              data: this.jsondata,//data.seriesData this.jsondata
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      })
    }
  },
  created: function () {
  }
}
</script>
<style>


  .r-menu-vertical .r-menu-item a {
    width: 230px;
  }
</style>
