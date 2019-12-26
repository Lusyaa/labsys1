<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片视图区域-->
    <el-card>
      <!--搜索与添加区域-->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" clearable @clear="getUserList">
            <!--p51-->
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>
      <!--用户列表区域-->
      <el-table :data="userlist" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="编号" prop="userCount"></el-table-column>
        <el-table-column label="姓名" prop="userName"></el-table-column>
        <el-table-column label="性别" prop="gender"></el-table-column>
        <el-table-column label="角色" prop="role"></el-table-column>
        <el-table-column label="班级" prop="class"></el-table-column>
        <el-table-column label="出生日期" prop="date"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <!--{{scope.row}} 获取一行数据-->
            <el-switch v-model="scope.row.state" @change="userStateChanged(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <!--修改按钮-->
            <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
            <!--删除按钮-->
            <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
            <!--详情按钮-->
            <el-tooltip class="item" effect="dark" content="详情" placement="top">
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
    <!--添加用户 对话框-->
    <el-dialog title="提示" :visible.sync="addDialogVisible" width="50%" append-to-body center>
      <!-- 内容主体区域 -->
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select v-model="ruleForm.role" placeholder="请选择角色">
            <el-option label="管理员" value="0"></el-option>
            <el-option label="学生" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户状态" prop="state">
          <el-switch v-model="ruleForm.state"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">创建</el-button>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <!--<span slot="footer" class="dialog-footer">
         <el-button @click="addDialogVisible = false">取 消</el-button>
         <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
      </span>-->
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Users',
    data () {
      return {
        // 获取用户列表的参数对象
        queryInfo: {
          query: '', // 查询参数
          pagenum: 1, // 当前页数
          pagesize: 5  // 当前每页显示多少条数据
        },
        // 用户数据
        userlist: [
          {userCount: '1607001',class: '16级 移动一班', userName: '王虎化', gender: '男', state: 1, date: '2016-08-02', role: '用户'},
          {userCount: '1607002',class: '16级 移动二班', userName: '王小化', gender: '男', state: 0, date: '2016-05-02', role: '管理员'},
          {userCount: '1607003',class: '16级 移动三班', userName: '王化虎', gender: '女', state: 1, date: '2016-01-02', role: '用户'},
          {userCount: '004', class: '', userName: '王化小', gender: '男', state: 0, date: '2016-04-02', role: '管理员'},
          {userCount: '1607005',class: '16级 嵌入一班', userName: '王小强', gender: '男', state: 0, date: '2016-06-02', role: '用户'},
        ],
        // 数据总条数
        total: 10,
        // 控制 添加用户 对话框的显示与隐藏
        addDialogVisible: false,
        ruleForm: {
          userCount: '',
          userName: '',
          gender: '',
          role: '',
          state: '',

          class: '',
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          userName: [{required: true, message: '请输入正确的用户名', trigger: 'blur'}],
          role: [{required: true, message: '请选择活动区域', trigger: 'change'}],
          type: [{type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}],
          resource: [{required: true, message: '请选择活动资源', trigger: 'change'}],
          desc: [{required: true, message: '请填写活动形式', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      // 获取用户信息
      async getUserList () {
        /*const {data: res} = await this.$http.get('users', {
          params: this.queryInfo
        })
        if (res.meta.status !== 200) {
          return this.$message.error('获取用户列表失败')
        }
        this.userlist = res.data.users
        this.total = res.data.total*/

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
      // 监听 switch 开关 状态 的改变 简化Promise操作 使用async await
      async userStateChanged (userInfo) {
        console.log(userInfo)
        /*users/:uid/state/:type*/
        const {data: res} = await this.$http.put(`users/${userInfo.id}/state/${userInfo.state}`) // 拼接多项参数使用 ` `
        if (res.meta.states !== 200) {
          userInfo.state = !userInfo.state // 更新失败用户状态返还原来状态
          return this.$message.error('更新用户状态失败！')
        }
        this.$message.success('更新用户状态成功！')
      },
      // 提交添加表单信息
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      // 重置表单信息
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
    },
    created () {
      this.getUserList()
    }
  }
</script>

<style lang="less" scoped>

</style>
