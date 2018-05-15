/*
 * @Author: Jack Lu
 * @Date: 2018-05-15 10:54:52
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-05-15 14:47:03
 */
import appConfig from '../utils/appConfig'
import wxRequest from '../utils/wxRequest'
// import 'wepy-async-function'
// 基准路径
// console.log(appConfig)
wxRequest.baseUrl = `${appConfig['HTTP.BAST_URL']}api/public/v1/`
// console.log(wxRequest.baseUrl)
// todo 1.请求轮播图数据
const getHomeSwiper = params => {
  return wxRequest('home/swiperdata', params).then(res => res.data)
}
// todo 2.请求导航栏数据
const getHomeCatitems = params => {
  return wxRequest('home/catitems', params).then(res => res.data)
}
// todo 3.请求楼层数据
const getHomeFloor = params => {
  return wxRequest('home/floordata', params).then(res => res.data)
}

// 整体导出
export default {
  getHomeSwiper,
  getHomeCatitems,
  getHomeFloor
}
