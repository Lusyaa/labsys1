import http from '../../../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('../../../../../../config/sysConfig')
let apiUrl = sysConfig.onlineApiUrlPre;

//【查询所有用户信息】  /lab/user/getAllUserVos/1/6
export const getAllUsers = (page, size, params) =>{
  let queryString = querystring.stringify(params);
  return http.requestQuickGet(apiUrl+'/lab/user/getAllUserVos/' + page + '/' + size + '?' + queryString)
}



/* 用户信息 */
//1、页面查询 userid username role_id 查询所有Vo用户信息
/*export const user_list = (page,size, params) =>{
  // 将params对象数据拼装成key/value串  + queryString
  let queryString = querystring.stringify(params);
  // 请求服务端的页面查询接口 通过ajax调用接口来请求数据
  return http.requestQuickGet(apiUrl+'/lab/user/getAllUserVos/'+page+'/'+size +'?'+ queryString);
}*/
/*
//2、删除用户信息
export const user_del= (id)=>{
  //  /member/user/delete/
  return http.requestDelete(apiUrl+'/member/user/delete/'+ id);
}
//3、添加用戶信息
export const user_addSub = params =>{
  return http.requestPost(apiUrl+'/member/user/insert',params);
}
//4、 //POST /member/user/insert user_get
export const user_edit = params =>{
  return http.requestPost(apiUrl+'/member/user/insert',params);
}
// GET /member/user/getUserById/{user_id}
export const user_get = (id) =>{
  return http.requestPost(apiUrl+'/member/user/getUserById/' + id);
}

/!* 会员卡(没有列表删除) *!/
//1、页面查询(会员卡信息)
export const cards_list = (page,size,params) =>{
  let queryString = querystring.stringify(params);
  return http.requestQuickGet(apiUrl+'/member/card/getAllCards/'+page+'/'+size+'?'+ queryString);
}
//2、DELETE /member/card/delete/userId/{user_id}
export const cards_del= (id)=>{
  return http.requestDelete(apiUrl+'/member/card/delete/userId/'+ id);
}

/!* free会员等级 *!/
//1、页面查询
export const user_grade = (page, size, params) =>{
  // 将params对象数据拼装成key/value串
  let queryString = querystring.stringify(params);
  // 请求服务端的页面查询接口 通过ajax调用接口来请求数据  /member/freegrade/find/all/{page}/{size}
  return http.requestQuickGet(apiUrl+'/member/freegrade/find/all/'+page+'/'+size+'?'+ queryString);
}
//2、添加普通会员信息
export const userGrade_addSub = params =>{
  return http.requestPost(apiUrl+'/member/freegrade/insert',params);
}
//3、删除普通会员信息
export const userGrade_del= (id)=>{
  return http.requestDelete(apiUrl+'/member/freegrade/delete/'+ id);
}

/!* Vip会员等级 *!/
//1、页面查询(VIP会员等级)
export const userVip_grade = (page, size, params) =>{
  let queryString = querystring.stringify(params);
  return http.requestQuickGet(apiUrl+'/member/paygrade/find/all/'+page+'/'+size+'?'+ queryString);
}
//2、添加付费会员信息 POST /member/paygrade/insert
export const userGraVip_addSub = params =>{
  return http.requestPost(apiUrl+'/member/paygrade/insert',params);
}
//3、删除普通会员信息 {id}
export const userGraVip_del= (id)=>{
  return http.requestDelete(apiUrl+'/member/paygrade/delete/'+ id);
}

/!* 会员积分 *!/
//1、页面查询(会员积分)
export const user_integral = (page,size,params) =>{
  // 将params对象数据拼装成key/value串 /member/point/getAllPoints/1/2
  let queryString = querystring.stringify(params);
  // 请求服务端的页面查询接口 通过ajax调用接口来请求数据
  return http.requestQuickGet(apiUrl+'/member/point/getAllPoints/'+page+'/'+size+'?'+ queryString);
}
//2、添加积分信息   /member/point/insert
export const integral_addSub = params =>{
  return http.requestPost(apiUrl+'/member/point/insert',params);
}
//3、删除积分信息 {id}
export const integral_del= (id)=>{
  return http.requestDelete(apiUrl+'/member/paygrade/delete/'+ id);
}

/!* 会员签到 *!/
//1、页面查询(签到) GET /member/checkin/getAllCheckin/{page}/{size}
export const user_sign = (page,size,params) =>{
  // 将params对象数据拼装成key/value串
  let queryString = querystring.stringify(params);
  // 请求服务端的页面查询接口 通过ajax调用接口来请求数据
  return http.requestQuickGet(apiUrl+'/member/checkin/getAllCheckin/'+page+'/'+size+'?'+ queryString);
}
//2、添加签到信息  POST /member/checkin/insert
export const sign_addSub = params =>{
  return http.requestPost(apiUrl+'/member/checkin/insert',params);
}
//3、删除签到信息（check_id） DELETE /member/checkin/deleteByCheckId/{check_id/user_id}
export const sign_del= (id)=>{
  return http.requestDelete(apiUrl+'/member/checkin/deleteByCheckId/'+ id);
}

//!*------------------------------------------------------------*!/

//删除页面（）
/!*export const page_del= (id)=>{
  return http.requestDelete(apiUrl+'/member/user/delete/id/'+id);
}*!/
//新增页面
/!*export const page_add = params =>{
  return http.requestPost(apiUrl+'/member/user/insert',params);
}*!/
//根据id查询页面(用户)
/!*export const page_get= id =>{
  return http.requestQuickGet(apiUrl+'/member/user/getAllUserVos/'+id);
}*!/
//修改页面提交
export const page_edit= (id,params) =>{
  return http.requestPut(apiUrl+'/member/user/page/edit/'+id,params);
}
//发布页面@
/!*export const page_postPage= id => {
  return http.requestPost(apiUrl+'/member/user/page/postPage/'+id)
}*!/
*/



