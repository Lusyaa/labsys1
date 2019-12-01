// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件（全局）
import Vue from 'vue'
import App from './App'
import router from './router' // 导入路由依赖
import ElementUI from 'element-ui' // 导入elementui依赖
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局样式
import './assets/css/global.css'
import axios from 'axios'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:8080/api/private/v1/' // 配置请求根路径
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
