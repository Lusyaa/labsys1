import Vue from 'vue'
import Router from 'vue-router'
/*管理员home*/
import Home from '../../module/adminHome/Home'
/*学生 home*/
import userHome from '../../module/userHome/page/userHome'
import Login from '../../module/door/page/Login'
import Login01 from '../../module/door/page/Login01'
import Login02 from '../../module/door/page/Login02'
import Door from '../../module/door/page/Door'
import Users from '../../module/adminHome/page/user/page/Users'
import Equipments from '../../module/adminHome/page/equipment/page/Equipments'
import EquipClass from '../../module/adminHome/page/equipment/page/equipClass'
import EClass1 from '../../module/adminHome/page/equipment/page/eClass1'
import Signs from '../../module/adminHome/page/check/page/Signs'
import Check from '../../module/adminHome/page/check/page/Check'
import Notices from '../../module/adminHome/page/notice/page/Notices'
import Welcome from '../../module/adminHome/page/welcome/Welcome'

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
        {path: '/users', component: Users, hidden: false},
        {path: '/equipments', component: Equipments, hidden: false},
        {
          path: '/equipclass',
          component: EquipClass,
          hidden: false,
          children: [
            {path: '/eclass1', component: EClass1, hidden: false},
            // {path: '/eclass2', component: EClass2, hidden: false},
            // {path: '/eclass3', component: EClass3, hidden: false},
            // {path: '/eclass4', component: EClass4, hidden: false},
          ]
        },
        {path: '/check', component: Check, hidden: false},
        {path: '/signs', component: Signs, hidden: false},
        {path: '/notices', component: Notices, hidden: false},
        {path: '/welcome', component: Welcome, hidden: false}
      ]
    },
    /* 用户登录界面 userHome*/
    {
      path: '/home1',
      components: userHome,
      redirect: '/welcome',
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
/*router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // form 代表从哪个路径跳转而来
  // next 是一个函数 表示放行 1、next（）直接放行  2、next（‘/login’）强制跳转
  if (to.path === '/login') return next()
  //  获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})*/
export default router
