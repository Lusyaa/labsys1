import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('../../../../config/sysConfig')
let apiUrl = sysConfig.onlineApiUrlPre;


export const coupon_list = (pagination) => {
  //将params对象数据拼装成key/value串
  let queryString = querystring.stringify(pagination);
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/marketing/coupon/page?'+queryString);
}

export const coupon_detail = (id) => {
  return http.requestQuickGet(apiUrl + "/marketing/coupon/" + id);
}

export const coupon_del = (id) => {
  return http.requestDelete(apiUrl + "/marketing/coupon/" + id);
}
export const coupon_add = (coupon) => {
  return http.requestPost(apiUrl+"/marketing/coupon",coupon);
}

export const coupon_update = (coupon) => {
  return http.requestPut(apiUrl+"/marketing/coupon", coupon);
}

export const extension_add = (extension) => {
  return http.requestPost(apiUrl + "/marketing/extension", extension);
}

export const type_list = (usedFor) => {
  return http.requestQuickGet(apiUrl+"/marketing/type?usedFor="+usedFor)
}

export const activity_list = (pagination) => {
  //将params对象数据拼装成key/value串
  let queryString = querystring.stringify(pagination);
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/marketing/activity/page?'+queryString);
}

export const activity_del = (id) => {
  return http.requestDelete(apiUrl + "/marketing/activity/" + id);
}
// 所有量表分类
export const queryScaleType = () => {
  return http.requestQuickGet(apiUrl + '/marketing/other/scale/type/all');
}
// 根据id查询量表 page=1&size=5&scaleTypeId=1
export const queryScaleTypeById = (pagination) => {
  let queryString = querystring.stringify(pagination);
  return http.requestQuickGet(apiUrl + '/marketing/other/scale/type?' + queryString);
}



export const activity_detail = (id) => {
  return http.requestQuickGet(apiUrl + "/marketing/activity/" + id);
}
export const activity_rule = (id) => {
  return http.requestQuickGet(apiUrl + "/marketing/activity/info/rule/" + id);
}
export const activity_goods = (id) => {
  return http.requestQuickGet(apiUrl + "/marketing/activity/info/goods/" + id);
}
//POST /marketing/activity
export const activity_add = (activity) => {
  return http.requestPost(apiUrl + "/marketing/activity/", activity);
}
