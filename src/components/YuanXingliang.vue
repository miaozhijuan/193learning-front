<template>
<div>
<img src="../assets/logo.png"/>
  <h1>
{{msg}}
  </h1>
</div>
</template>

<script>
export default {
  name: 'YuanXingliang',
  data () {
    return {
      msg: 'Welcome You, lishikai!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
