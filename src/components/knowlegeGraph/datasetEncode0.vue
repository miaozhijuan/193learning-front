<template>
<!--  <div id="home">-->
<!--    我是首页组件-->

<!--    <el-button type="success">成功按钮</el-button>-->
<!--    <el-button type="warning">警告按钮</el-button>-->
<!--    <el-button type="danger">危险按钮</el-button>-->

<!--    <br>-->

<!--    <i style="font-size:40px;" class="el-icon-menu"></i>-->

<!--    <el-rate v-model="value1"></el-rate>-->
  <div id="knowledge">
    <iframe :src='imageSource' scrolling="no" style="margin-left:-100px;width: 1500px;height: 800px;" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'knowledgeGraph-reason',
  data () {
    return {
      msg: 'Welcome You, lishikai!',
      imageSource: '../../../static/dataset-encode0.html'
    }
  },
  methods: {
    getTheKGData () {
      // 对数据进行ltp抽取三元组this.lists = JSON.parse(localStorage.getItem('lists'))
      let param = JSON.parse(localStorage.getItem('queryReturnData'))
      console.log(param + 'paramType' + typeof param)
      var url = this.global_request_url.requestDjango
      // this.$axios.post('http://127.0.0.1:8000/kgprocess/', param).then(resp => {
      this.$axios.post(url, param).then(resp => {
      // 处理完成之后的json数据
        let returnData = resp.data
        console.log('returndata=================' + returnData)
        console.log(returnData)
        returnData = JSON.stringify(returnData)
        localStorage.setItem('knowledgeData', returnData)
      })
    }
  },
  mounted: function () {
    this.getTheKGData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
