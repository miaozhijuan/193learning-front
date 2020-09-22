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
      var url = this.global_request_url.historyTrend
      this.$axios.get(url).then(resp => {
        // 动态数据

          this.data1 = resp.data


        // 3、作用域--数据处理之后放到这里，一般为数组结构放置
        var jsondataName = []
        var timeRange = []
        var series_local = []
        var time = []
        for (var i = 0; i < this.data1.length; i++) {

            jsondataName.push(this.data1[i].key);
            timeRange = []
            time  = []
            for(var j = 0 ;j<this.data1[i].test.buckets.length;j++) {

              timeRange.push(resp.data[i].test.buckets[j].doc_count)
              time.push(resp.data[i].test.buckets[j].key_as_string)
            }

          series_local.push({
              name: this.data1[i].key,
              type:'line',
              stack:'总量',
              data: timeRange
            })


        }
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main1'))


        // 绘制图表
        myChart.setOption(  {
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            // '检修公司','集安市供电公司','柳河县供电公司','通化市城郊供电公司','信息通信分公司','检修分公司','辉南县供电公司','梅河口市供电公司','长春市城郊供电分公司','松原市城郊供电公司',
            data: jsondataName
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: time
          },
          yAxis: {
            type: 'value'
          },
          series: series_local
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
