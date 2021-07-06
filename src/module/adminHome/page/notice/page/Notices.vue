<template>
  <div>
    <!--弹框: 添加公告-->
    <el-dialog
      title="请添加公告信息"
      style="font-size: 12px"
      :visible.sync="isShow"
      center>
      <!--内容区域-->
      <el-form
        :model="notice"
        :rules="noticeRule"
        label-width="100px"
        class="demo-ruleForm"
        ref="noticeList">
        <el-form-item label="公告标题" prop="noticeTitle">
          <el-input v-model="notice.noticeTitle"></el-input>
        </el-form-item>
        <el-form-item label="添加人" prop="userCount">
          <el-input v-model="notice.userCount"></el-input>
        </el-form-item>
        <el-form-item label="公告内容" prop="content">
          <el-input type="textarea" v-model="notice.content"></el-input>
        </el-form-item>
      </el-form>
      <!--弹窗底部-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('noticeList')">重置</el-button>
        <el-button type="primary" @click="addSubmit('noticeList')">确 定</el-button>
      </span>
    </el-dialog>
    <!--弹窗：修改公告-->
    <el-dialog
      title="请添加公告信息"
      style="font-size: 12px"
      :visible.sync="show"
      center>
      <!--内容区域-->
      <el-form
        :model="oldNotice"
        ref="editList"
        label-width="100px"
        class="demo-ruleForm">
        <el-form-item label="公告标题" prop="noticeTitle">
          <el-input v-model="oldNotice.noticeTitle"></el-input>
        </el-form-item>
        <el-form-item label="添加人" prop="userCount">
          <el-input v-model="oldNotice.userCount"></el-input>
        </el-form-item>
        <el-form-item label="公告内容" prop="content">
          <el-input type="textarea" v-model="oldNotice.content"></el-input>
        </el-form-item>
      </el-form>
      <!--操作-->
      <span slot="footer" class="dialog-footer">
        <!--重置-->
        <el-button @click="clear">重 置</el-button>
        <!--提交-->
        <el-button
          type="primary"
          @click="editSubmit('editList')">确定修改
        </el-button>
      </span>
    </el-dialog>

    <!--面包屑导航区域-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>公告栏管理</el-breadcrumb-item>
      <el-breadcrumb-item>公告栏列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片视图区域-->
    <el-card>
      <!--搜索 添加-->
      <el-row :gutter="10" type="flex" justify="right" :model="params">
        <el-col :span="7">
          <el-input clearable
                    v-model="params.noticeId"
                    style="width:200px"
                    size="medium"
                    placeholder="请输入公告Id">
          </el-input>
          <el-button @click="getNotices" icon="el-icon-search" size="medium" style="margin-left: 20px" round>查 询
          </el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="primary"  size="medium" @click="isShow = true">添加公告</el-button>
        </el-col>
      </el-row>
      <!--列表信息-->
      <el-table
        :data="noticeList"
        border
        stripe
        fixed>
        <el-table-column
          type="index"
          label="#"></el-table-column>
        <el-table-column
          label="公告ID"
          prop="noticeId"></el-table-column>
        <el-table-column
          label="公告标题"
          prop="noticeTitle"></el-table-column>
        <el-table-column
          label="公告内容"
          prop="content">
          <template slot-scope="scope">
            {{scope.row.content.length > 20 ? scope.row.content.substring(0,20)+'.....' : scope.row.content}}
            <!--{{scope.row.content}}show-overflow-tooltip-->
          </template>
        </el-table-column>
        <el-table-column
          label="发布者"
          prop="userCount"
          width="100"></el-table-column>
        <el-table-column
          label="发布时间"
          prop="createTime"
          :formatter="dateFormat"></el-table-column>
        <!--操作-->
        <el-table-column
          label="操作"
          width="190px">
          <template slot-scope="scope">
            <!--修改按钮-->
            <el-button
              @click.native="edit(scope.row)"
              type="primary"
              size="mini"
              icon="el-icon-edit"></el-button>
            <!--删除按钮-->
            <el-button
              @click="delNotice(scope.row.noticeId)"
              type="danger"
              size="mini"
              icon="el-icon-delete"></el-button>
            <!--分配角色按钮-->
            <el-tooltip
              class="item"
              effect="dark"
              content="分配角色" placement="top">
              <el-button
                type="warning"
                size="mini"
                icon="el-icon-setting"></el-button>
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
  </div>
</template>

<script>
  import * as noticeApi from '../api/notice'
  import moment from 'moment'  // moment是JavaScript的日期处理类库
  // import utils from '../../../../../common/utils'

  export default {
    name: 'Notices',
    data () {
      return {
        // userCount: utils.getCookie('userCount'),
        isShow: false,// 添加弹窗 显示状态
        show: false, //  修改弹窗 显示状态
        isEdit: false, // 修改弹窗 是否可编辑
        // 获取用户列表的参数对象
        params: {
          page: 1, // 当前页码
          size: 5, // 每页显示条数
        },
        // 公告列表
        noticeList: [],
        // 添加列表
        notice: {},
        // 修改列表 修改前数据
        oldNotice: {
          userCount: '19003'
        },
        // 公告新增规则
        noticeRule: {
          // 公告标题添加规则
          noticeTitle: [
            {required: true, message: '请输入公告标题', trigger: 'blur'},
            {min: 3, max: 20, message: '标题长度应该在 3 到 20 个字符之间', trigger: 'blur'}
          ],
          userCount: [
            {required: true, message: '请输入公告标题', trigger: 'blur'},
          ],
          // 公告内容添加规则
          content: [
            {required: true, message: '请填写公告内容', trigger: 'blur'}
          ]
        },
        total: 6, // 公告列表条数
      }
    },
    methods: {
      // 获取 公告信息-
      getNotices () {
        noticeApi.getNotices(this.params.page, this.params.size, this.params).then((res) => {
          this.noticeList = res.queryResult.list
          this.total = res.queryResult.total
          console.log(this.params.page+"===="+this.params.size)
        })
      },
      searchNotice () {
        noticeApi.getNoticeById(this.params.noticeId).then((res) => {
          this.params.noticeId = res.queryResult.noticeId
        })
      },
      // 添加 公告信息-
      addSubmit () {
        this.$refs['noticeList'].validate((valid) => {
          if (valid) {
            this.$confirm('确定要提交吗？', '提示', {}).then(() => {
              // 调用addNoList方法请求服务端的新增接口
              noticeApi.addNoList(this.notice).then((res) => {
                //  解析服务端的相应内容
                if (res.success) {
                  this.$message.success('提交成功！')
                  //  获取提交表单的ref 调用resetField()方法 将提交表单清空
                  this.$refs['noticeList'].resetFields()
                } else if (res.message) {
                  this.$message.error(res.message)
                } else {
                  this.message.error('提交失败！')
                }
              })
            })
          }
        })
      },
      // 重置 公告信息-
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      // 删除 公告信息-
      delNotice (noticeId) {
        this.$confirm('确定要删除吗？', '提示', {}).then(() => {
          //  调用服务端接口
          noticeApi.delNoList(noticeId).then((res) => {
            if (res.success) {
              this.$message.success('删除成功！')
              this.getNotices()
            } else {
              this.$message.error('删除失败！')
            }
          })
        })
      },
      // 修改 点击事件-
      edit (oldNotice) {
        this.show = true // 展示 修改弹窗
        this.isEdit = true // 修改标记
        this.oldNotice = oldNotice
      },
      // 提交 修改后的公告信息
      editSubmit () {
        if (!this.isEdit) {
          //确认提示
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            noticeApi.addNoList(this.oldNotice).then((res) => {
              //    解析响应内容
              if (res.success) {
                this.show = false
                this.$emit('close')//关闭dialog --父子组件
                this.$message.success('提交成功！')
                //进行下一步，添加问题和选项
              } else {
                this.$message.error(res.message)
              }
            })
          })
        } else {
          //确认提示
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            noticeApi.editNotice(this.oldNotice).then((res) => {
              //    解析响应内容
              if (res.success) {
                this.$emit('close')
                this.$message.success('提交成功！')
                //进行下一步，添加问题和选项
              } else {
                this.$message.error(res.message)
              }
            })
          })
        }
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
      //  格式化日期
      dateFormat (row, column) {
        const date = row[column.property]
        if (date == undefined) {
          return ''
        }
        return moment(date).format('YYYY-MM-DD  HH:mm:ss')
      }
    },
    created () {
      // alert(this.userCount)
      // this.params.page = Number.parseInt(this.$route.query.page || 1);
    },
    mounted () {
      this.getNotices()
    },
    // 监听查询信息
    watch: {
      params: { // 监视pagination属性的变化
        deep: true, // deep为true，会监视pagination的属性及属性中的对象属性变化
        handler () {// 变化后的回调函数，这里我们再次调用query即可
          this.getNotices()
        }
      },
      show: {}
    }
  }
</script>

<style lang="less" scoped>


</style>
