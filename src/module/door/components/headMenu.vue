<template>
  <!--门户 头部信息-->
  <el-menu class="head" mode="horizontal">
    <el-menu-item><img src="../assets/img/logoright.png" alt="图片加载失败！"></el-menu-item>
    <el-menu-item><span style="color: #6c7685; font-size: 22px">实验室综合管理系统</span></el-menu-item>
    <el-menu-item style="float: right;">
      <router-link tag="span" :to="{path:'/door/login'}">
        <el-avatar :size="40" :src="circleUrl" @click="$message.success('进入成功！')"></el-avatar>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>
<!--问题：登录注册下拉框实现不了-->
<script>
  export default {
    name: 'headMenu',
    data () {
      return {
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      }
    }
  }
</script>

<style scoped>
  .head {
    background-color: #c5cef6;
    padding: 0;
    color: black;
    display: inline;
    text-align: center;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
