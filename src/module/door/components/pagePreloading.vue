<template>
  <!--门户 跑马灯-->
  <el-carousel :interval="4000" type="card">
    <el-carousel-item v-for="(item, index) in pic" :key="index">
      <div>
        <img style="position: center" :src="item.url"/>
      </div>
    </el-carousel-item>
  </el-carousel>

</template>

<script>
  // 导入图片资源
  import img1 from '../assets/img/doorPic/m8.jpg'
  import img2 from '../assets/img/doorPic/m7.jpg'
  import img3 from '../assets/img/doorPic/m4.jpg'
  import img4 from '../assets/img/doorPic/m5.jpg'

  export default {
    name: 'pagePreloading',
    data () {
      return {
        pic: [
          {url: img1},
          {url: img2},
          {url: img3},
          {url: img4}
        ]
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item {
    /*background-color: #d3dce6;*/
    /*background: url("../assets/img/doorPic/m8.jpg");*/
  }
</style>
