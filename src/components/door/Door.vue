<template>
  <div>
    <el-container>
      <!--头部-->
      <el-header>
        <el-menu :default-active="activeIndex"
                 class="head"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="/door" style="margin-left: 30%;">首页</el-menu-item>
          <el-menu-item index="/users" style="margin-left: 40px;">用户信息</el-menu-item>
          <el-menu-item index="3" style="margin-left: 50px;">设备信息</el-menu-item>
          <el-menu-item index="4" style="margin-left: 50px;">签到信息</el-menu-item>
          <!--<el-menu-item index="5" style="margin-left: 50px;float: right;">-->
            <router-link tag="span" :to="{path:'/login'}" style="margin-left: 50px; margin-top: 20px;float: right;">
              <el-link icon="el-icon-user" :underline="false">登录</el-link>
            </router-link>
          <!--</el-menu-item>-->
        </el-menu>
      </el-header>
      <!--主体-->
      <el-main>
        <!--轮播图-->
        <el-row type="flex" class="el-row1" justify="center">
          <el-col :span="23">
            <el-carousel :interval="4000" type="card">
              <!-- <el-carousel-item v-for="item in notices" :key="item.noticeId">-->
              <el-carousel-item v-for="item in 4" :key="item">
                <div>
                  <span style="position: center">
                    {{item}}
                    <!-- {{item.noticeTitle + item.content + item.userCount + item.createTime}}-->
                  </span>
                  <!-- <span>{{item.content}}</span>
                   <span>{{item.userCount}}</span>
                   <span>{{item.createTime}}</span>-->
                </div>
              </el-carousel-item>
            </el-carousel>
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
            <div class="grid-content2 bg-grid-content2">
              <div class="calendar">
                <el-calendar v-model="value"></el-calendar>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import $ from 'jquery'

  $(function () {
    $('#test').click(function () {
      alert('11111111111');
    })
  })

  export default {
    name: 'door',
    data () {
      return {
        activeIndex: '/door',
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
        ]
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer, .head {
    background-color: #f9fafc;
    color: black;
    text-align: center;
    line-height: 15%;
  }

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
    background-color: #d098f2;
  }

  .bg-grid-content2 {
    background: #d098f2;
  }

  .el-row1 { /* row-bg */
    padding: 0;
    margin-top: 0;
    background-color: #f9fafc;
    height: 150px;
    line-height: 30px;
  }

  .el-row2 {
    padding: 10px 0;
    background-color: #f9fafc;
    line-height: 10px;
    margin-top: 220px;
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
