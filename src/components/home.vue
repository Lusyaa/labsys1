<template>
    <div>
      <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>

<script>
export default {
  methods: {
    // 退出
    logout() {
      // 清空sessionStorage中的token数据
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">

</style>
