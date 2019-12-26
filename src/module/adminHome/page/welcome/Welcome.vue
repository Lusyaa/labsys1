<template>
  <div class="htmleaf-container">
    <h1 class="welcometext">
      Welcome back！
    </h1>
    <section class="main">
      <div class="wrap wrap--1">
        <div class="container container--1">
          <p>Nothing</p>
        </div>
      </div>
      <div class="wrap wrap--2">
        <div class="container container--2">
          <p>for</p>
        </div>
      </div>

      <div class="wrap wrap--3">
        <div class="container container--3">
          <p>Nothing</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import('../../../../assets/js/script')
  export default {
    name: 'Welcome'
  }
</script>

<style scoped>
  @import url("../../../../assets/css/normalize.css");
  @import url("../../../../assets/css/htmleaf-demo.css");
  @import url("../../../../assets/css/style.css");

  .el-main {
    background-color: rgba(160, 163, 169, 0.73) !important;
  }

  .welcometext {
    font: caption;
    text-align: center;
    font-family: "Times New Roman",Georgia,Serif;
    font-size: 50px;
    font-style: oblique;
    font-weight: bolder;
    margin: 10px;
    padding: 0;
  }

</style>
