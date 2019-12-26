<template>
  <div>
    <el-container>
      <!--头部-->
      <el-header>
        <el-row type="flex" justify="center">
          <el-col :span="24">
            <!--<el-menu class="head" mode="horizontal">
              <el-menu-item><img src="./assets/img/logoright.png" alt="图片加载失败！"></el-menu-item>
              <el-menu-item><span style="color: #6c7685; font-size: 22px">实验室综合管理系统</span></el-menu-item>
              <el-menu-item style="float: right;">
                <div class="block1">
                  <el-dropdown>
                    &lt;!&ndash;头像&ndash;&gt;
                    <div class="el-dropdown-link">
                      <el-avatar :size="40" :src="circleUrl"></el-avatar>
                      <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
                    </div>
                    &lt;!&ndash;下拉框内容&ndash;&gt;
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>
                        <router-link tag="span" :to="{path:'/login'}">登录</router-link>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <router-link tag="span" :to="{path:'/login'}">注册</router-link>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </el-menu-item>
            </el-menu>-->
             <head-menu></head-menu>
          </el-col>
        </el-row>
      </el-header>
      <!--主体-->
      <el-main>
        <el-row type="flex" class="el-row1" justify="center">
          <el-col :span="23">
            <!--轮播图-->
            <page-preloading></page-preloading>
          </el-col>
        </el-row>
        <!--通知公告-->
        <el-row type="flex" class="el-row2" :gutter="20" justify="center">
          <el-col :span="9" class="grid-content1 bg-grid-content1">
            <div class="linkBox">
              <el-button id="test">点击</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content2 bg-grid-content2">
              <div class="calendar">
                <el-calendar v-model="value"></el-calendar>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <el-button type="success" @click="dialogVisible = true">点击</el-button>
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="50%">
              <el-form ref="form" :model="form" :rules="formRule" label-width="80px">
                <el-form-item label="活动时间">
                  <!--开始时间-->
                  <el-col :span="11">
                    <!--<el-date-picker type="date"
                                    placeholder="开始日期"
                                    v-model="form.date1"
                                    :picker-options="pickerOptions0"
                                    style="width: 100%;"></el-date-picker>-->
                    <el-date-picker
                      v-model="form.value1"
                      type="datetime"
                      placeholder="开始日期"
                      :picker-options="pickerOptions0">
                    </el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <!--结束时间-->
                  <el-col :span="11">
                    <el-date-picker
                      v-model="form.value2"
                      type="datetime"
                      placeholder="结束日期"
                      :picker-options="pickerOptions1">
                    </el-date-picker>
                    <!--<el-date-picker type="date"
                                    placeholder="结束日期"
                                    v-model="form.date2"
                                    :picker-options="pickerOptions0"
                                    style="width: 100%;"></el-date-picker>-->
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="dialogVisible = false">立即创建</el-button>
                  <el-button @click="dialogVisible = false">取消</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import $ from 'jquery'
  import pagePreloading from '../components/pagePreloading'
  import headMenu from '../components/headMenu'

  $(function () {
    $('#test').click(function () {
      alert('11111111111')
    })
  })

  export default {
    name: 'door',
    data () {
      return {
        dialogVisible: false,
        value: new Date(),
        notices: [
          {
            noticeId: '20190801',
            noticeTitle: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            createTime: '2019-12-01',
            userCount: '林春杰'
          },
          {
            noticeId: '20190802',
            noticeTitle: 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
            content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
            createTime: '2019-12-01',
            userCount: '林春杰'
          },
          {
            noticeId: '20190803',
            noticeTitle: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
            content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
            createTime: '2019-12-01',
            userCount: '林春杰'
          },
          {
            noticeId: '20190804',
            noticeTitle: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
            content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
            createTime: '2019-12-01',
            userCount: '林春杰'
          },
          {
            noticeId: '20190805',
            noticeTitle: 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
            content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
            createTime: '2019-12-01',
            userCount: '林春杰'
          }
        ],
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        form: {
          date1: '',
          date2: '',
          value1: '', // 开始时间
          value2: '', // 结束时间
        },
        // 日期设置对象
        pickerOptions0: {
          disabledDate: (time) => {// disabledDate 为true表示不可选,false表示可选
            if (this.form.value2 != '') {
              // 如果 结束日期不为空  开始日期 小于现在 且 大于 结束日期
              return time.getTime() < (Date.now() - 8.64e7) && time.getTime() > this.form.value2
            } else {
              // 如果 结束日期为空 开始日期要大于等于今天
              return time.getTime() < Date.now() - 8.64e7
            }
          }
        },
        pickerOptions1: {// disabledDate 为true表示不可选,false表示可选
          disabledDate: (time) => {
            /* if (this.form.value1 != '') {
               // 如果 开始日期不为空  结束日期大于结束日期 并且 小于等于今天 && (time.getTime() < Date.now()- 8.64e7)
               return  time.getTime() > this.form.value2 - 8.64e7;
             } else {
               // 如果 开始日期为空 结束日期要小于今天
               // return time.getTime() < Date.now();
               return false;

              }*/
            if (this.form.value1 != '') {
              // 如果开始日期不为空 结束日期要 小于 开始日期
              return time.getTime() < this.form.value1
            } else {
              // 如果 开始日期为空 结束日期要 小于 现在时刻
              return this.form.value2 < Date.now() - 8.64e7
            }
          }
        },
        formRule: {
          value2: [{message: '请先输入开始日期', trigger: blur}]
        },
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
    },
    components: {
      pagePreloading,
      headMenu,
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #c5cef6;
    padding: 0;
    color: black;
    display: inline;
    text-align: center;
  }
  /*.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }*/
  .el-main {
    background-color: #f9fafc;
    color: #333;
    text-align: center;
    line-height: 80%;
  }

  body > .el-container {
    margin-bottom: 40px;
    width: 100%;
    line-height: 100%;
    background-color: #f9fafc;
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
    min-height: 300px;
  }

  .grid-content2 {
    border-radius: 4px;
    min-height: 300px;
  }

  /* 背景颜色*/
  .bg-grid-content1 {
    background-color: #c5cef6;
  }

  .bg-grid-content2 {
    background: #d098f2;
  }

  .el-row1 { /* row-bg */
    padding: 0;
    margin-top: 0;
    background-color: #c5cef6;
    height: 320px;
    line-height: 30px;
  }

  .el-row2 {
    padding: 10px 0;
    background-color: #f9fafc;
    line-height: 10px;
    /*margin-top: 20px;*/
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
