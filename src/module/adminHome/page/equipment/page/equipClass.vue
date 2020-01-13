<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>设备管理</el-breadcrumb-item>
      <el-breadcrumb-item>设备分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <el-row class="tac" :gutter="15">
        <el-col :span="4">
          <el-tree :data="categories" :props="defaultProps" @node-click="handleNodeClick">

          </el-tree>
          <!--<el-menu
            :router="true"
            class="el-menu-vertical-demo"
            unique-opened
            collapse-transition
            @open="handleOpen"
            style="overflow-x:hidden;">
            <el-submenu
              v-for="(category, index) in categories"
              :key="index"
              :index="String(index)"
              data="category">
              <template slot="title" >
                <i class="el-icon-folder"></i>
                {{category.categoryName}}
              </template>
              <el-menu-item  v-for="(type, index) in category.childs" :key="index" >
                <i class="el-icon-folder-opened"></i>{{type.typeName}}
              </el-menu-item>
            </el-submenu>-->
            <!--主机-->
           <!-- <el-submenu index="1">
              <template slot="title" >
                <i class="el-icon-folder"></i>主机类
              </template>
              <el-menu-item index="/eclass1">
                <i class="el-icon-folder-opened"></i>惠普主机
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-folder-opened"></i>联想主机
              </el-menu-item>
            </el-submenu>-->
            <!--显示屏-->
            <!--<el-submenu index="2">
              <template slot="title">
                <i class="el-icon-folder"></i>显示屏类
              </template>
              <el-menu-item index="2-1">
                <i class="el-icon-folder-opened"></i>惠普显示屏
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-folder-opened"></i>联想显示屏
              </el-menu-item>
            </el-submenu>-->
            <!--鼠标-->
            <!--<el-submenu index="3">
              <template slot="title">
                <i class="el-icon-folder"></i>鼠标类
              </template>
              <el-menu-item index="3-1">
                <i class="el-icon-folder-opened"></i>惠普鼠标
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-folder-opened"></i>联想鼠标
              </el-menu-item>
            </el-submenu>-->
            <!--键盘-->
            <!--<el-submenu index="4">
              <template slot="title">
                <i class="el-icon-folder"></i>键盘类
              </template>
              <el-menu-item index="4-1">
                <i class="el-icon-folder-opened"></i>惠普键盘
              </el-menu-item>
              <el-menu-item index="4-2">
                <i class="el-icon-folder-opened"></i>联想键盘
              </el-menu-item>
            </el-submenu>-->
            <!--其他-->
            <!--<el-submenu index="5">
              <template slot="title">
                <i class="el-icon-folder"></i>其他类
              </template>
              <el-menu-item index="5-1">
                <i class="el-icon-folder-opened"></i>打印机
              </el-menu-item>
              <el-menu-item index="5-2">
                <i class="el-icon-folder-opened"></i>投影仪
              </el-menu-item>
              <el-menu-item index="5-3">
                <i class="el-icon-folder-opened"></i>饮水机
              </el-menu-item>
            </el-submenu>
          </el-menu>-->
        </el-col>
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import * as equipApi from '../api/equipment'

  export default {
    name: 'Users',
    data() {
      return {
        // 获取用户列表的参数对象
        params: {
          query: '', // 查询参数
          page: 1, // 当前页码
          size: 2  // 每页显示条数
        },
        // 设备分类 category
        categories: [{
          categoryName: '',
          categoryId: '',
          children: [{
            typeId: '',
            typeName: '',
            content: '',
            categoryId: ''
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'categoryName'
        },
        list: [{}],
        total: 0,

      }
    },
    methods: {
      /*查询category*/
      getData(){
        // 获取菜单 category
        equipApi.check_category_type().then((res)=>{
          this.categories = res.queryResult.list;
        })
        // 获取菜单 list
         /* equipApi.check_list(this.params.page, this.params.size, this.params.typeId, this.params).then((res)=>{
          this.types = res.queryResult.list
        })*/
        // this.id=this.$route.categories.categoryId;
      },
      handleNodeClick(data) {
        console.log(data);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      // 监听 size 改变的事件
      handleSizeChange (newSize) {
        console.log(`每页 ${newSize} 条`)
        this.params.size = newSize
      },
      // 监听 页码值 改变的事件
      handleCurrentChange (newSize) {
        console.log(`当前页: ${newSize}`)
        this.params.page = newSize
      }
    },
    mounted () {
      this.getData()
    },
    components: {
      // classComponent
    }
  }
</script>

<style lang="less" scoped>

</style>
