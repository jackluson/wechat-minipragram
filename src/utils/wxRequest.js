/*
 * @Author: Jack Lu
 * @Date: 2018-05-15 10:22:57
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-05-17 09:09:37
 */
import wepy from 'wepy'
import 'wepy-async-function'
const wxRequest = (url, params = {}) => {
  return wepy.request({
    url: wxRequest.baseUrl + url, // 开发者服务器接口地址",
    data: params.data || {}, // 请求的参数",
    method: params.method || 'GET',
    dataType: params.dataType || 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
    header: params.header || {
      'Content-type': 'application/json'
    }
  })
}
// 基准路径
wxRequest.baseUrl = ''
export default wxRequest
