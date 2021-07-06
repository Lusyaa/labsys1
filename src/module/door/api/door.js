import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('../../../../config/sysConfig')
let apiUrl = sysConfig.onlineApiUrlPre;

//【获取新闻列表信息】 http://10.0.42.4:8888 /lab/notice/all/1/6 page,size
export const getNotices = (page, size, params) => {
  // 将params对象数据拼装成key/value串  + queryString
  let queryString = querystring.stringify(params);
  return http.requestQuickGet(apiUrl+'/lab/notice/all/'+page+'/'+size +'?'+ queryString)
}
// 登录
export const loginsys = params =>{
  return http.requestPost(apiUrl+'/lab/user/login',params);
}
