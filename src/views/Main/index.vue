<template>
  <a-layout class="components-layout">
    <a-layout-header class="header">
      <div class="logo" />
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" class="nav-menu" style="background: #fff">
        <a-menu
          mode="inline"
          :defaultSelectedKeys="['1']"
          :defaultOpenKeys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="appstore" />工作台
            </span>
            <a-menu-item key="1">首页</a-menu-item>
            <a-menu-item key="2">地图监测</a-menu-item>
            <a-menu-item key="3">实时数据</a-menu-item>
            <a-menu-item key="4">历史数据</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="laptop" />设备管理
            </span>
            <a-menu-item key="5">单位管理</a-menu-item>
            <a-menu-item key="6">线路管理</a-menu-item>
            <a-menu-item key="7">井盖管理</a-menu-item>
            <a-menu-item key="8">并盖功能管理</a-menu-item>
            <a-menu-item key="9">装置型号管理</a-menu-item>
            <a-menu-item key="10">报警设置</a-menu-item>
            <a-menu-item key="11">井盖参数设置</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title">
              <a-icon type="key" />智能锁管理
            </span>
            <a-menu-item key="31">井盖组</a-menu-item>
            <a-menu-item key="32">锁具管理</a-menu-item>
            <a-menu-item key="33">时间片</a-menu-item>
            <a-menu-item key="34">电子钥匙授权</a-menu-item>
            <a-menu-item key="35">远程开锁</a-menu-item>
            <a-menu-item key="36">钥匙管理</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title">
              <a-icon type="team" />用户管理
            </span>
            <a-menu-item key="41">人员管理</a-menu-item>
            <a-menu-item key="42">用户组管理</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub5">
            <span slot="title">
              <a-icon type="setting" />系统管理
            </span>
            <a-menu-item key="51">软件更新</a-menu-item>
            <a-menu-item key="52">软件设置</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 0 0 10px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          style="height: calc(100vh - 155px); background-color: #ffffff;overflow-y: auto; padding: 10px"
        >
          <!-- <div style="height: 10000px">1234</div> -->
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
.components-layout {
  height: 100%;
  .header {
    background-color: #435c71;
  }
  .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
  .nav-menu {
    height: calc(100vh - 70px);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .main-window {
    height: calc(100vh - 1000px);
    background-color: #ffffff;
    overflow-y: auto;
  }
}
</style>
