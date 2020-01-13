<template>
  <!--门户 头部信息-->
  <el-menu class="head" mode="horizontal">
    <el-menu-item>
      <img src="../assets/img/logoright.png" alt="logo加载失败！"></el-menu-item>
    <el-menu-item>
      <span style="color: #6c7685; font-size: 22px">实验室综合管理系统</span>
    </el-menu-item>
    <!--登录注册-->
    <div class="loginhead">
      <el-dropdown>
      <span class="el-dropdown-link">
        <el-image style="width: 40px; height: 40px;" :src="circleUrl"></el-image>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link tag="span" :to="{path:'/login'}">登录</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link tag="span" :to="{path:'/login01'}">注册</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link tag="span" :to="{path: '/home'}">管理员</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link tag="span" :to="{path: '/home1'}">用户</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>


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
    },
    components: {}
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

  .loginhead {
    /*float: right;*/
    /*margin-right: 20px;*/
    /*margin-top: 5px;*/
    margin-left: 94%;
    margin-top: 0.55%;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
