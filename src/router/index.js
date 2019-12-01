import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import home from '../components/home'

Vue.use(Router)

const router = new Router({
  routes: [
    // 重定向
    /* {path: '/', redirect: '/login'}, */
    {path: '/login', name: 'login', component: login},
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'home', component: home}
  ]
})
// 挂载路由导航守卫--控制页面访问权限
/*
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // form 代表从哪个路径跳转而来
  // next 是一个函数 表示放行 1、next（）直接放行  2、next（‘/login’）强制跳转
  if (to.path === '/login') return next()
  //  获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
*/

export default router
