<template>
<div>
  <r-app id="app" v-cloak>
      <div slot="header" align-items="center" class="demo-header">
        <div id="test">
        <h1 style="color: #f4615c"> <span>C</span><i>lass.193</i></h1>
        </div>
        <div id="log">
        <r-icon type="paper-airplane"></r-icon>
        <r-dropdown label="viavia" style="margin-left: 4px">
          <r-dropdown-item>个人信息</r-dropdown-item>
          <r-dropdown-item>登出</r-dropdown-item>
        </r-dropdown>
        </div>
      </div>
  </r-app>
  <div id="left">
  <r-menu style="width:200px" mode="vertical" v-model="activeMenu">
  <r-menu-item name="1">
    <r-icon type="ios-paper"></r-icon>内容管理
  </r-menu-item>
  <r-menu-item name="2">
    <r-icon type="ios-people"></r-icon>用户管理
  </r-menu-item>
  <r-sub-menu name="3">
    <template slot="title">
      <r-icon type="stats-bars"></r-icon>统计分析
    </template>
    <r-menu-group title="使用">
      <r-menu-item name="3-1" href="http://baidu.com" target="_blank">新增和启动</r-menu-item>
      <r-menu-item name="3-2">活跃分期</r-menu-item>
      <r-menu-item name="3-3">时段分析</r-menu-item>
    </r-menu-group>
    <r-menu-group title="留存">
      <r-menu-item name="3-4">用户留存</r-menu-item>
      <r-menu-item name="3-5">流失用户</r-menu-item>
    </r-menu-group>
  </r-sub-menu>
  <r-menu-item name="4" href="http://baidu.com">
    <r-icon type="settings"></r-icon>综合设置
  </r-menu-item>
</r-menu>
  </div>
</div>
</template>

<script>
export default {
  name: 'LiShikai',
  data () {
    return {
      msg: 'Welcome You, Lishikai!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
#test {
    margin-top: 9px;
    float:left;
}
#log {
    margin-right: 30px;
    margin-top: 40px;
    float: right;
}
</style>
