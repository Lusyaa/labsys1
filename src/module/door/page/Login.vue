<template>
  <!--登录界面组件-->
  <div class="login_container">
    <!--登录区域-->
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../../../assets/headPic.jpg" alt="">
      </div>
      <!-- 登录表单区域 ref loginFormRef表单实例对象 rules 绑定验证规则-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_form">
        <!-- 用户名 prop="usernam"通过prop来指定验证规则-->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-s-custom"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-s-goods" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--风车-->
    <div class="wmd1">
      <div class="blades">
        <div class="blade2"></div>
        <div class="blade1"></div>
        <div class="vane1"></div>
        <div class="blade3"></div>
        <div class="blade4"></div>
        <div class="vane2"></div>
      </div>
      <div class="base">
        <div class="bottom_base">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="wmd1">
        <div class="blades">
          <div class="blade2"></div>
          <div class="blade1"></div>
          <div class="vane1"></div>
          <div class="blade3"></div>
          <div class="blade4"></div>
          <div class="vane2"></div>
        </div>
        <div class="base">
          <div class="bottom_base">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="wmd1">
          <div class="blades">
            <div class="blade2"></div>
            <div class="blade1"></div>
            <div class="vane1"></div>
            <div class="blade3"></div>
            <div class="blade4"></div>
            <div class="vane2"></div>
          </div>
          <div class="base">
            <div class="bottom_base">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div class="wmd1">
            <div class="blades">
              <div class="blade2"></div>
              <div class="blade1"></div>
              <div class="vane1"></div>
              <div class="blade3"></div>
              <div class="blade4"></div>
              <div class="vane2"></div>
            </div>
            <div class="base">
              <div class="bottom_base">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ("../../../assets/js/prefixfree.min.js")
  import("../../../assets/js/jquery-1.11.0.min")
  import("../../../assets/lib/quietflow.min")
  import("../../../assets/demo/js")
  import("../../../assets/demo/js/prism")
  export default {
    data () {
      return {
        // 登录表单的数据绑定对象
        loginForm: {
          username: 'liusuyu',
          password: '123456'
        },
        // 登录表单的验证规则对象
        loginFormRules: {
          // 验证用户名是否合法  required 是否必填  trigger 触发的时机（blur失去焦点触发）
          username: [
            {required: true, message: '请输入登录名称', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
          ],
          // 验证密码是否合法
          password: [
            {required: true, message: '请输入登录密码', trigger: 'blur'},
            {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      // 重置方法
      resetLoginForm () {
        // resetFields()方法 对表单内容进行重置 loginFormRef：表单实例对象
        this.$refs.loginFormRef.resetFields()
        console.log(this)
        //  this-->组件实例 VueComponent
      },
      // 登录表单预验证方法
      login () {
        this.$refs.loginFormRef.validate(async valid => {
          if (!valid) return
          // 解构赋值 res = data
          const {data: res} = await this.$http.post('Login.vue', this.loginForm)
          if (res.meta.status !== 200) return this.$message.error('登录失败！')
          this.$message.success('登录成功')
          // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage  1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访 1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
          window.sessionStorage.setItem('token', res.data.token)
          // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
          this.$router.push('/home')
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  .login_container {
    background-color: rgba(236, 240, 241, 0.66);
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: #c2d3e9;
    border-radius: 3px;
    position: absolute;
    box-shadow: 0 0 10px #99a9bf;
    left: 40%;
    top: 30%;
    /* 头像 */

    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 8px;
      box-shadow: 0 0 10px #ffffff;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ffffff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #e8e8e8;
      }
    }
  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }

  /*------------------------------------------------------*/

  @keyframes sunrise {
    0% {
      top: -120px;
    }
    25% {
      top: 19px;
      right: 40px;
    }
    50% {
      top: 25px;
      right: 40px;
    }
    100% {
      top: 18px;
      right: 40px;
    }
  }

  .wmd1 {
    -webkit-transform: scale(.6);
    position: absolute;
    top: 120px;
    left: 200px;
    perspective: 1000px;
  }

  .base {
  }

  .blades {
    width: 350px;
    height: 350px;
    left: 10%;
    top: 10%;
    z-index: 2;
    border-radius: 50%;
    position: absolute;
    margin-top: -30px;
    margin-left: 50px;
    animation: spin 6s linear infinite;
  }

  .blade1 {
    background: white;
    position: absolute;
    width: 41px;
    height: 139px;
    top: -10px;
    left: 150.5px;
    transform: rotate(0deg);
    display: inline-block;
    background: linear-gradient(135deg, transparent 20px, white 0), linear-gradient(225deg, transparent 20px, white 0), linear-gradient(315deg, transparent 20px, white 0), linear-gradient(45deg, transparent 20px, white 0);
    background-position: top left, top right, bottom right, bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .blade2 {
    background: white;
    position: absolute;
    width: 41px;
    height: 139px;
    top: 105.5px;
    left: 41px;
    transform: rotate(-90deg);
    display: inline-block;
    background: linear-gradient(135deg, transparent 20px, white 0), linear-gradient(225deg, transparent 20px, white 0), linear-gradient(315deg, transparent 20px, white 0), linear-gradient(45deg, transparent 20px, white 0);
    background-position: top left, top right, bottom right, bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .blade3 {
    background: white;
    position: absolute;
    width: 41px;
    height: 139px;
    top: 105.5px;
    right: 41px;
    transform: rotate(-270deg);
    display: inline-block;
    background: linear-gradient(135deg, transparent 20px, white 0), linear-gradient(225deg, transparent 20px, white 0), linear-gradient(315deg, transparent 20px, white 0), linear-gradient(45deg, transparent 20px, white 0);
    background-position: top left, top right, bottom right, bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .blade4 {
    background: white;
    position: absolute;
    width: 41px;
    height: 139px;
    bottom: -10px;
    left: 150.5px;
    transform: rotate(180deg);
    display: inline-block;
    background: linear-gradient(135deg, transparent 20px, white 0), linear-gradient(225deg, transparent 20px, white 0), linear-gradient(315deg, transparent 20px, white 0), linear-gradient(45deg, transparent 20px, white 0);
    background-position: top left, top right, bottom right, bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }

  .vane1 {
    width: 1px;
    height: 350px;
    left: 175px;
    background: white;
    position: absolute;
    transform: rotate(90deg);
  }

  .vane2 {
    width: 1px;
    height: 350px;
    left: 171.5px;
    background: white;
    position: absolute;
    transform: rotate(180deg);
  }

  .base .bottom_base {
    position: absolute;
    width: 90px;
    height: 100px;
    left: 162px;
    border-right: 16px solid transparent;
    border-left: 16px solid transparent;
    border-bottom: 380px solid white;
    opacity: .8;
    z-index: -1;
    top: 42.5px;
  }

  ul {
    position: absolute;
    top: 180px;
    left: -30px;
  }

  li {
    width: 10px;
    height: 10px;
    background: white;
    padding: 2px;
    display: block;
    margin: 30px;
    box-shadow: inset 0px -2px 0px lightgray;
  }

  li:nth-child(2) {
    position: absolute;
    top: -45px;
    left: 20px;
  }

  li:nth-child(1) {
    position: absolute;
    top: 35px;
    left: 50px;
  }

  li:nth-child(3) {
    position: absolute;
    top: 75px;
    left: 50px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

</style>
