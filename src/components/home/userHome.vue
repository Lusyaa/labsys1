<template>
  <el-container class="home_container">
    <!--头部区域-->
    <el-header>
      <div>
        <img src="../../assets/logoright.png" alt="" class="img">
        <span style="margin-left: 10px">实验室综合管理信息系统</span>
      </div>
      <el-button type="info" size="medium" @click="logout">退出</el-button>
    </el-header>
    <!--主体区域-->
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-user-solid"></i>
            <span slot="title">用户信息管理</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">考勤信息管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">设备信息管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">公告栏管理 </span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!--侧边栏内容区域-->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      // 退出
      logout () {
        // 清空sessionStorage中的token数据
        window.sessionStorage.clear()
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped lang="less">
  .home_container {
    height: 100%;
    width: 100%;
  }

  .el-header {
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between; // 左右贴边对齐
    padding-left: 0;
    align-items: center;
    color: #000000;
    font-size: 20px;
    > div {
      display: flex;
      align-items: center;
      margin-left: 15px;
    }
  }

  .img {
    margin-left: 30px;
  }

  .el-aside {
    background-color: #FFFFFF;
  }

  .el-main {
    background-color: #FFFFFF;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
  }
</style>
