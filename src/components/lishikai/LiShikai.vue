<template>
<div style="height:100%">
  <r-app id="app" v-cloak style="height: 100%">
      <div slot="header" align-items="center" class="demo-header">
        <div id="test">
        <h1 style="color: #f4615c"><b><span>C</span></b><i>lass.193</i></h1>
        </div>
        <div id="log">
        <r-icon type="paper-airplane"></r-icon>
        <r-dropdown label="李仕凯" style="margin-left: 8px">
          <r-dropdown-item>个人信息</r-dropdown-item>
          <r-dropdown-item>登出</r-dropdown-item>
        </r-dropdown>
        </div>
      </div>
  <div slot="aside">
  <r-menu value="-1" style="width:200px" mode="vertical" slot="aside" expand>
  <r-menu-item name="0" ><r-icon type="paper-airplane"></r-icon>操作菜单</r-menu-item>
  <r-menu-item name="1">
    <r-icon type="ios-paper"></r-icon><router-link to="/lishikai/sunshengze">内容管理</router-link>
  </r-menu-item>
  <r-sub-menu name="2" >
          <template slot="title"><span id="title"><r-icon type="stats-bars"></r-icon>&nbsp;&nbsp;&nbsp;Basic</span></template>
          <r-menu-item name="2-1" >
            <r-icon type="ios-grid-view-outline"></r-icon>请期待...
          </r-menu-item>
          <r-menu-item name="2-2" >
            <r-icon type="ios-grid-view-outline"></r-icon>请期待...
          </r-menu-item>
          <r-menu-item name="2-3" >
            <r-icon type="ios-grid-view-outline"></r-icon>请期待...
          </r-menu-item>
          <r-menu-item name="2-4" >
            <r-icon type="ios-grid-view-outline"></r-icon>请期待...
          </r-menu-item>
          <!-- <r-menu-item name="2-2" href="app.html">
            <r-icon type="ios-browsers-outline"></r-icon>App 布局
          </r-menu-item>
          <r-menu-item name="2-3" href="button.html">
            <r-icon type="social-youtube-outline"></r-icon>Button 按钮
          </r-menu-item>
          <r-menu-item name="2-4" href="icon.html">
            <r-icon type="ios-heart-outline"></r-icon>Icon 图标
          </r-menu-item> -->
        </r-sub-menu>
  <r-menu-item name="2">
    <r-icon type="ios-people"></r-icon><router-link to="/lishikai/yuanxingliang">用户管理</router-link>
  </r-menu-item>
  <r-sub-menu name="3">
    <template slot="title">
      <span id="title2"><r-icon type="stats-bars"></r-icon>&nbsp;&nbsp;&nbsp;开发人员</span>
    </template>
    <r-menu-group title="">
      <r-menu-item name="3-1"><r-icon type="ios-browsers-outline"></r-icon><router-link to="/lishikai/sunshengze">孙圣泽</router-link></r-menu-item>
      <r-menu-item name="3-2"><r-icon type="ios-browsers-outline"></r-icon><router-link to="/lishikai/yuanxingliang">袁星亮</router-link></r-menu-item>
      <r-menu-item name="3-3"><r-icon type="ios-browsers-outline"></r-icon>李仕凯</r-menu-item>
    </r-menu-group>
    <!-- <r-menu-group title="">
      <r-menu-item name="3-4"><r-icon type="ios-browsers-outline"></r-icon>用户留存</r-menu-item>
      <r-menu-item name="3-5"><r-icon type="ios-browsers-outline"></r-icon>流失用户</r-menu-item>
    </r-menu-group> -->
  </r-sub-menu>
  <r-menu-item name="4" href="http://baidu.com">
    <r-icon type="settings"></r-icon>综合设置
  </r-menu-item>
</r-menu>
</div>
<div slot="main">
  <router-view></router-view>
</div>
  </r-app>
</div>
</template>

<script>
import 'vue'
export default {
  name: 'LiShikai',
  data () {
    return {
      msg: 'Welcome You, Lishikai!',
      valuekey: '1'
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
    margin-top: 35px;
    float: right;
}
#title {
     margin-left: -103px;
    }
#title2 {
     margin-left: -86px;
    }
.r-menu-group-title {
    text-align: left;
}
#test {

    font-family: STHupo ;}
.demo-header span {
    font-size: 120%;
}
</style>
