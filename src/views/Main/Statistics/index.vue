<template>
  <div class="Statistics">
    Statistics
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  mounted() {
    this.$http.get('/pcapi/v2/dictionary/locallanguage').then((data) => {
      console.log(data)
    })
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./index.less";
</style>
