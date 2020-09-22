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
    unique(arr) { // 根据唯一标识orderId来对数组进行过滤
      const res = new Map();  //定义常量 res,值为一个Map对象实例
      //返回arr数组过滤后的结果，结果为一个数组   过滤条件是，如果res中没有某个键，就设置这个键的值为1
      return arr.filter((arr) => !res.has(arr.OrderId) && res.set(arr.OrderId, 1))
    },
    initData: function () {
      this.requested = true
      var url = this.global_request_url.hiddenOfficeFrom

      this.$axios.get(url).then(resp => {
        // 动态数据

          this.data1 = resp.data


        // 3、作用域--数据处理之后放到这里，一般为数组结构放置
        var jsondataName = []
        var uniquearray = []
        var array_totals = []
        var count_array=[]
        for (var i = 0; i < this.data1.length; i++) {

            jsondataName.push(this.data1[i].key);
            count_array=[]
            uniquearray=[]
            for (var j = 0; j < resp.data[i].popular_colors.buckets.length; j++) {
              uniquearray.push(resp.data[i].popular_colors.buckets[j].key) //doc_count
              count_array.push(resp.data[i].popular_colors.buckets[j].doc_count)
            }
            array_totals.push(uniquearray)
            this.jsondata.push({
              name: this.data1[i].key,
              type: 'bar',
              data: count_array
            })
        }
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main1'))


        // 绘制图表
        myChart.setOption( {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: jsondataName
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: array_totals[0]
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: this.jsondata
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
