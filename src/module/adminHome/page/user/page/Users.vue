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
      <el-row :gutter="10">
        <el-col :span="7">
          <el-input placeholder="请输入内容" clearable >
            <!--p51-->
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>
      <!--用户列表区域-->
      <el-table :data="userList" border stripe >
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="编号" prop="userCount"></el-table-column>
        <el-table-column label="姓名" prop="userName"></el-table-column>
        <el-table-column label="性别" prop="gender"></el-table-column>
        <el-table-column label="角色" prop="roleName"></el-table-column>
        <el-table-column label="班级" prop="userGrade"></el-table-column>
        <el-table-column label="出生日期" prop="birth"></el-table-column>
        <el-table-column label="座位号" prop="seatNum"></el-table-column>
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
      <el-pagination
        layout="total, prev, pager, next"
        :total="total"
        :page-size="params.size"
        :current-page="params.page"
        @current-change="changePage"
        style="float: right;">
      </el-pagination>
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
  import * as userApi from '../api/user'

  export default {
    name: 'Users',
    data () {
      return {// loading: true,
        // 获取用户列表的参数对象
        params: {
          page: 1, // 当前页数
          size: 5, // 当前每页显示多少条数据
          userCount: '',
          userName:'',
          roleId: ''
        },
        userList: [],// 用户数据
        total: 0,// 数据总条数
        addDialogVisible: false, // 控制 添加用户 对话框的显示与隐藏
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
      getAllUserData(){
        userApi.getAllUsers(this.params.page, this.params.size, this.params).then((res)=>{
          this.userList = res.queryResult.list
          this.total = res.queryResult.total
        })
      },
      // 修改 重置
      clear () {
        if (!this.isEdit) {
          // 重置表单
          this.$refs.editList.resetFields()
        } else {
          Object.assign(this.editList, this.oldNotice)
        }
      },
      // 页码改变触发事件
      changePage (currentPage) {  // current ---> 当前页码
        this.params.page = currentPage
        //调用getNotices方法
        this.getNotices()
      },
      // 监听 size 改变的事件
      handleSizeChange (newSize) {
        console.log(`每页 ${newSize} 条`)
        this.params.size = newSize
        // this.getUserList()  重新获取数据
      },
      // 监听 页码值 改变的事件
      handleCurrentChange (newSize) {
        console.log(`当前页: ${newSize}`)
        this.params.page = newSize
        // this.getUserList() 重新获取数据
      },
      // 监听 switch 开关 状态 的改变 简化Promise操作 使用async await
      async userStateChanged (userInfo) {
        /*console.log(userInfo)
        /!* users/:uid/state/:type *!/
        const {data: res} = await this.$http.put(`users/${userInfo.id}/state/${userInfo.state}`) // 拼接多项参数使用 ` `
        if (res.meta.states !== 200) {
          userInfo.state = !userInfo.state // 更新失败用户状态返还原来状态
          return this.$message.error('更新用户状态失败！')
        }
        this.$message.success('更新用户状态成功！')*/
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
    created () { // vm实例的data和methods初始化完毕后执行，发ajax要提前
      // this.getUserList()
    },
    mounted() { // 模板和HTML已经渲染出来
      /*当dom元素全部渲染完成后,自动调用query*/
      // this.query();
      this.getAllUserData();
    },// 监听查询信息
    watch: {
      params: { // 监视pagination属性的变化
        deep: true, // deep为true，会监视pagination的属性及属性中的对象属性变化
        handler() {
          // 变化后的回调函数，这里我们再次调用getDataFromServer即可
          this.getAllUserData();
        }
      },
      show: {}
    }
  }
</script>

<style lang="less" scoped>

</style>
