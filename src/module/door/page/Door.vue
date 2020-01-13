<template>
  <div>
    <el-container>
      <!--头部-->
      <el-header>
        <el-row type="flex" justify="center">
          <el-col :span="24">
            <head-menu></head-menu>
          </el-col>
        </el-row>
      </el-header>
      <!--主体-->
      <el-main>
        <!--1、轮播-->
        <el-row type="flex" class="el-row1" justify="center">
          <el-col :span="23">
            <page-preloading></page-preloading>
          </el-col>
        </el-row>
        <!--2、通知公告 + 登录-->
        <el-row type="flex" class="el-row2" :gutter="30" justify="left">
          <!--第1部分：公告展示区-->
          <!--<template slot-scope="scope">
             {{scope.row.title.length > 25 ? scope.row.title.substring(0,25)+"..." : scope.row.title}};
             {{scope.row.title}}
           </template>-->
          <el-col :span="15" class="grid-content1 bg-grid-content1">
           <!-- <ul :data="notices" style="margin-top: 13px">
              <li style="float: left" prop="noticeTitle"></li>
            </ul>-->
            <h1 style="align-items: center">公告展示区域区域</h1>
          </el-col>
          <!--第2部分：带角色登录 -->
          <el-col :span="9" class="grid-content1 bg-grid-content1">
            <h1 style="align-items: center">登录区域</h1>
            <!--<el-select v-model="value" placeholder="请选择" style="margin-top: 22px;float: left;margin-left: 80px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>-->
            <!--<el-form
              style="margin-top: 22px"
              :label-position="labelPosition"
              label-width="80px"
              :model="formLabelAlign">
              <el-form-item label="登录账号">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="登录密码">
                <el-input v-model="formLabelAlign.type"></el-input>
              </el-form-item>
            </el-form>-->
          </el-col>
        </el-row>
      </el-main>
      <!--底部-->
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import * as doorApi from '../api/door'
  import pagePreloading from '../components/pagePreloading'
  import headMenu from '../components/headMenu'

  export default {
    name: 'door',
    data () {
      return {
        notices: [],
        params: {
          page: 1,
          size: 5,
        },
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        options: [
          {value: '选项1', label: '用户'},
          {value: '选项2', label: '管理员'}
          ],
        value: ''
      }
    },
    methods: {
      getNotice () {
        doorApi.getNotices(this.params.page, this.params.size, this.params).then((res) => {
          this.notices = res.queryResult.list
          this.total = res.queryResult.total
        })
      },
      onSubmit () {
        console.log('submit!')
      }
    },
    components: {
      pagePreloading,
      headMenu,
    },
    mounted () {
      this.getNotice()
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #f3f4f6;
    padding: 0;
    margin-bottom: 2px;
    color: black;
    display: inline;
    text-align: center;
  }
  .address {
    float: left;
  }
  .el-main {
    background-color: #f9fafc;
    color: #333;
    text-align: center;
    line-height: 80%;
  }

  /*.calendar {
    height: 400px;
  }*/
  body > .el-container {
    margin-bottom: 40px;
    width: 100%;
    line-height: 100%;
    background-color: #f9fafc;
  }

  .el-carousel__container {
    padding-top: 15px;
  }

  .el-row {
    margin-bottom: 10px;

  &
  :last-child {
    margin-bottom: 0;
  }
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content1 {
    border-radius: 4px;
    min-height: 500px;
    margin-left: 15px;
  }

  .bg-grid-content1 {
    background-color: #c5cef6;
  }

  .grid-content2 {
    border-radius: 4px;
    min-height: 500px;
  }

  .bg-grid-content2 {
    background: #d098f2;
  }

  .el-row1 {
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 0;
    background-color: #c5cef6;
    height: 320px;
    line-height: 30px;
  }

  .el-row2 {
    padding: 5px;
    background-color: #f9fafc;
    /*line-height: 10px;*/
    margin-top: 10px;
  }

  h3 {
    color: #d3dce6;
    font-size: 14px;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item {
    background-color: #d3dce6;
  }

  .linkBox {
    margin-top: 25px;
    margin-left: 10px;
  }

  .el-link1 {
    text-align: left;
  }

  .el-link2 {
    float: right;
  }
</style>
