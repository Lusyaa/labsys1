<template>
    <div>
      <!--面包屑导航区域-->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>主机</el-breadcrumb-item>
        <el-breadcrumb-item>惠普主机</el-breadcrumb-item>
        <el-breadcrumb-item>惠普主机详情</el-breadcrumb-item>
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
            <el-button type="primary" @click="getDataFromServer">111</el-button>
          </el-col>
        </el-row>
        <!--用户列表区域-->
        <el-table :data="category" border stripe>
          <el-table-column type="index" label="#"></el-table-column>
          <el-table-column label="categoryId"  prop="categoryId"></el-table-column>
          <el-table-column label="categoryName" prop="categoryName"></el-table-column>
          <el-table-column label="categoryName" prop="categoryName"></el-table-column>
          <el-table-column label="操作" width="200px">
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
          <el-pagination layout="total, prev, pager, next"
                         :total="total"
                         :current-page="params.page"
                         @current-change="changePage" style="float: right;">
          </el-pagination>
        </div>
      </el-card>
    </div>
</template>

<script>
  import * as equipApi from '../api/equipment'

  export default {
    name: 'eClass1',
    data() {
      return {
        // 获取用户列表的参数对象
        params: {
          query: '', // 查询参数
          page: 1, // 当前页码
          size: 5  // 每页显示条数
        },
        category: [
          {date: '2016-08-02', userName: '王', role: '用户', state: false},
          {date: '2016-05-02', userName: '王小', role: '管理员', state: true},
          {date: '2016-01-02', userName: '王虎', role: '用户', state: false},
          {date: '2016-04-02', userName: '王小虎', role: '管理员', state: true},
        ],
        total: 0
      }
    },
    methods: {
      getDataFromServer(){
        equipApi.check_category().then((res)=>{
          this.category = res.queryResult.list;
          this.params.size = res.queryResult.size;
          this.total = res.queryResult.total;
        })
      },
      //当前页码改变时触发的事件
      changePage: function (currentPage) {  // current ---> 当前页码
        this.params.page = currentPage;
        //调用query方法
        this.getDataFromServer();
      },
    },
    mounted () {
      this.getDataFromServer()
    }
  }
</script>

<style scoped>

</style>
