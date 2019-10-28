<template>
<div class="container">
  <div id="app">
<nav class="navbar navbar-expand-sm bg-light">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link to="/">HOME</router-link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link to="/lishikai">李仕凯</router-link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link to="/sunshengze">孙盛泽</router-link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link to="/yuanxingliang">袁星亮</router-link></a>
    </li>
  </ul>
</nav>
    <img src="./assets/logo.png"/>

    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
