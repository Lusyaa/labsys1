import http from '../../../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('../../../../../../config/sysConfig')
let apiUrl = sysConfig.onlineApiUrlPre;


//1、【category】http://10.0.42.4:8888/lab/equip/category/all?desc=false
export const check_category = () => {
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/lab/equip/category/all');
}
//2、【category目录】http://10.0.42.4:8888/lab/equip/category/all_and_its_type?desc=asc
export const check_category_type = () => {
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/lab/equip/category/all_and_its_type');
}
//1、【list】 http://10.0.42.4:8888/lab/equip/list/all?page=1&size=5&typeId=3
export const check_list = (page,size,typeId, params) =>{
  // 将params对象数据拼装成key/value串  + queryString
  let queryString = querystring.stringify(params);
  // 请求服务端的页面查询接口 通过ajax调用接口来请求数据
  return http.requestQuickGet(apiUrl+'/lab/equip/list/all'+'?'+page+'/'+size+'/'+typeId+'?'+ queryString);
}

