<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
console.log('App')
export default {
  name: 'App'
}
</script>
<style lang="less" rel="stylesheet/less">
@import './assets/styles/reset.less';
.app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
