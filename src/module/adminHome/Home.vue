<template>
  <el-container class="home_container">
      <!--头部区域-->
      <el-header>
        <!--<img src="../../assets/logo.png" class="img">-->
        <div>
          <span>实验室综合管理信息系统</span>
        </div>
        <i @click="confirmFn" class="icon aliIcon-lab-yichu logoutstyle"></i>
      </el-header>
      <!--主体区域-->
      <el-container>
        <!--侧边栏-->
        <el-aside width="200px">
          <el-menu default-active="2" :router="true"
                   class="el-menu-vertical-demo">
            <!--用户管理-->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user"></i>用户管理
              </template>
              <el-menu-item index="/users">
                <i class="el-icon-menu"></i>用户列表
              </el-menu-item>
            </el-submenu>
            <!--设备管理-->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-operation"></i>设备管理
              </template>
              <el-menu-item index="/equipments">
                <i class="el-icon-menu"></i>设备列表
              </el-menu-item>
            </el-submenu>
            <!--考勤管理-->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-edit"></i>考勤管理
              </template>
              <el-menu-item index="/check">
                <i class="el-icon-menu"></i>考勤列表(管)
              </el-menu-item>
              <el-menu-item index="/signs">
                <i class="el-icon-menu"></i>签到列表(用)
              </el-menu-item>
            </el-submenu>
            <!--公告栏管理-->
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-postcard"></i>公告栏管理
              </template>
              <el-menu-item index="/notices">
                <i class="el-icon-menu"></i>公告栏列表
              </el-menu-item>
            </el-submenu>
          </el-menu>
          <!--:router="true" 开启路由-->
        </el-aside>
        <!--右侧内容主体-->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
  </el-container>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      // 头部区域
      // 退出提示框
      confirmFn(){
        this.$confirm('确定要退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.sessionStorage.clear()
          this.$router.push('/login')
        }).catch(() => {
          console.log("取消退出成功！")
        });
      },
      // 退出
      /*logout () {
        // 清空sessionStorage中的token数据
        window.sessionStorage.clear()
        this.$router.push('/login')
      },*/
      // 主体区域（aside）

      // 主体区域（main）
    }
  }
</script>

<style scoped lang="less">

  .home_container {
    height: 100%;
    width: 100%;
  }

  .el-header {
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between; // 左右贴边对齐
    padding-left: 0;
    align-items: center;
    color: #000000;
    font-size: 20px;
    .img {
      margin-left: 50px;
    }
    .logoutstyle {
      font-weight: bold;
      font-size: 23px;
    }
    > div {
      display: block;
      align-items: center;
      transform: translate(300%);
    }
  }

  .el-aside {
    background-color: #FFFFFF;
  }

  .el-main {
    background-color: #f7ffde;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 100%;
  }
</style>
