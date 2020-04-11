<template>
  <div class="Workbench">
    1111111111Workbench
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Workbench',
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
