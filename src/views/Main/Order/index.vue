<template>
  <div class="Order">
    Order
  </div>
</template>

<script>
export default {
  name: 'Order',
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
