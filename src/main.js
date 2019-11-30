// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 导入路由依赖
import ElementUI from 'element-ui' //导入elementui依赖
import 'element-ui/lib/theme-chalk/index.css'


// 在Vue中全局使用
Vue.use(ElementUI) // 使用element-ui
Vue.use(router)  // 使用路由


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
