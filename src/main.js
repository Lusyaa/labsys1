// 入口文件（全局）
import Vue from 'vue'
import App from './App'
import router from './router' // 导入路由依赖
import ElementUI from 'element-ui' // 导入elementui依赖
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import './assets/css/global.css'// 引入全局样式
import('./assets/icon/iconfont.css') // 引入第三方阿里图标
import axios from 'axios'// 引入 axios
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://10.0.42.4:8007' // 配置请求根路径http://10.0.42.4:8007
// 在Vue中全局使用
Vue.use(ElementUI) // 使用element-ui

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
