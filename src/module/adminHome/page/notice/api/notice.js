import http from '../../../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('../../../../../../config/sysConfig')
let apiUrl = sysConfig.onlineApiUrlPre;

//【获取新闻列表信息】 http://10.0.42.4:8888 /lab/notice/all/1/6 page,size
export const getNotices = (page,size,params) => {
  // 将params对象数据拼装成key/value串  + queryString
  let queryString = querystring.stringify(params);
  return http.requestQuickGet(apiUrl+'/lab/notice/all/'+page+'/'+size +'?'+ queryString)
}
// 查询公告【id】
export const getNoticeById = (noticeId) => {
  return http.requestQuickGet(apiUrl+'/lab/notice/detail/'+ noticeId)
}
//【删除公告 列表信息()】http://10.0.42.4:8888/lab/notice/del/id
export const delNoList = (noticeId) => {
  return http.requestDelete(apiUrl+'/lab/notice/del/'+ noticeId)
}
//【新增公告】http://10.0.42.4:8888/lab/notice/add
export const addNoList = (params) => {
  return http.requestPost(apiUrl+'/lab/notice/add', params)
}
// 【修改公告】 /lab/notice/update
export const editNotice = (params) => {
  return http.requestPut(apiUrl+'/lab/notice/update',params)
}

