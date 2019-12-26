<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>设备管理</el-breadcrumb-item>
      <el-breadcrumb-item>设备列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片视图区域 class="box-card"-->
    <el-card>
      <!--搜索与添加区域-->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <!--用户列表区域-->
      <el-table :data="userlist" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="姓名" prop="userName"></el-table-column>
        <el-table-column label="角色" prop="role"></el-table-column>
        <el-table-column label="出生日期" prop="date"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <!--{{scope.row}}-->
            <el-switch v-model="scope.row.state"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!--修改按钮-->
            <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
            <!--删除按钮-->
            <el-button type="danger"  size="mini" icon="el-icon-delete"></el-button>
            <!--分配角色按钮-->
            <el-tooltip class="item" effect="dark" content="分配角色" placement="top">
              <el-button type="warning" size="mini" icon="el-icon-setting"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!--页码-->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-sizes="[1, 5, 10, 15]"
          :page-size="queryInfo.pagesize"
          layout="total, sizes, prev, pager, next, jumper" :total="total">
          <!--
          layout: 指定页面上展示的分页布局结构(功能组件)；
          page-sizes: 规定一页要显示的数据个数；
          -->
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'Users',
    data() {
      return {
        // 获取用户列表的参数对象
        queryInfo: {
          query: '', // 查询参数
          pagenum: 1, // 当前页码
          pagesize: 2  // 每页显示条数
        },
        userlist: [
          {date: '2016-08-02', userName: '王', role: '用户', state: false},
          {date: '2016-05-02', userName: '王小', role: '管理员', state: true},
          {date: '2016-01-02', userName: '王虎', role: '用户', state: false},
          {date: '2016-04-02', userName: '王小虎', role: '管理员', state: true},

        ],
        total: 5
      }
    },
    methods: {
      async getUserList() {
        const { data: res} = await this.$http.get('users',{
          params: this.queryInfo
        })
        if(res.meta.status !== 200) {
          return this.$message.error('获取用户列表失败')
        }
        this.userlist = res.data.users
        this.total = res.data.total

      },
      // 监听 pagesize 改变的事件
      handleSizeChange (newSize) {
        console.log(`每页 ${newSize} 条`)
        this.queryInfo.pagesize = newSize
        this.getUserList() // 重新获取数据
      },
      // 监听 页码值 改变的事件
      handleCurrentChange (newSize) {
        console.log(`当前页: ${newSize}`)
        this.queryInfo.pagenum = newSize
        this.getUserList() // 重新获取数据
      },
    },
    created () {
      this.getUserList()
    }
  }
</script>

<style lang="less" scoped>

</style>
