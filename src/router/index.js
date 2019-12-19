import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/Home'
import Login from '../components/door/Login'
import Login01 from '../components/door/Login01'
import Login02 from '../components/door/Login02'
import Door from '../components/door/Door'
import Users from '../components/views/Users'
import userHome from '../components/home/userHome'
import Equipments from '../components/views/Equipments'
import Signs from '../components/views/Signs'
import Notices from '../components/views/Notices'
import Welcome from '../components/views/Welcome'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/door'},
    {path: '/door', component: Door},
    {path: '/login', component: Login},
    {path: '/login01', component: Login01},
    {path: '/login02', component: Login02},
    /* 管理员登录界面 home*/
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        /* 管理员——管理项 */
        {path: '/users', component: Users, hidden: false},
        {path: '/equipments', component: Equipments, hidden: false},
        {path: '/signs', component: Signs, hidden: false},
        {path: '/notices', component: Notices, hidden: false},
        {path: '/welcome', component: Welcome, hidden: false}
      ]
    },
    /* 用户登录界面 userHome*/
    {
      path: 'userhome',
      components: userHome,
      children: [
        {path: '/users', component: Users, hidden: false},
        {path: '/equipments', component: Equipments, hidden: false},
        {path: '/signs', component: Signs, hidden: false},
        {path: '/welcome', component: Welcome, hidden: false},
      ]
    }
  ]
})
// 挂载路由导航守卫 -- 控制页面访问权限
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
