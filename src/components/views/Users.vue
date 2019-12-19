<template>
    <div>
      <!--面包屑导航区域-->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
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
      total: 0
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

   }
  },
  created () {
    this.getUserList()
  }
}
</script>

<style lang="less" scoped>

</style>
