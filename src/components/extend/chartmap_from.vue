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
      var url = this.global_request_url.hiddenFrom
      this.$axios.get(url).then(resp => {
        // 动态数据

          this.data1 = resp.data


        // 3、作用域--数据处理之后放到这里，一般为数组结构放置
        var jsondataName = ['score', 'amount', 'product']
        var sourcepush = []
        sourcepush.push(jsondataName)
        for (var i = 0; i < this.data1.length; i++) {
            jsondataName = []
            jsondataName.push(this.data1[i].doc_count);
            jsondataName.push(this.data1[i].doc_count);
            jsondataName.push(this.data1[i].key);

            sourcepush.push(jsondataName)

        }
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main1'))


        // 绘制图表
        myChart.setOption( {
          dataset: {
            source: sourcepush
          },
          grid: {containLabel: true},
          xAxis: {name: 'amount'},
          yAxis: {type: 'category'},
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 1,
            max: 100,
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: ['#D7DA8B', '#E15457']
            }
          },
          series: [
            {
              type: 'bar',
              encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
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
