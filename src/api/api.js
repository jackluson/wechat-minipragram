/*
 * @Author: Jack Lu
 * @Date: 2018-05-15 10:54:52
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-05-22 15:38:53
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
// todo 4.商品详情
const getGoodsDetail = params => {
  return wxRequest('goods/detail', params).then(res => res.data)
}
// todo 5.微信登录换取token
const postUserWxLogin = params => {
  return wxRequest('users/wxlogin', params).then(res => res.data)
}
// todo .-----以下API都要登录才能使用-----需要在header里面添加"Authorization" : token
// todo 6创建订单
const postMyOrdersCreate = params => {
  return wxRequest('my/orders/create', params).then(res => res.data)
}
// todo 支付订单
const postMyOrdersPay = params => {
  return wxRequest('my/orders/req_unifiedorder', params).then(res => res.data)
}
// TODO 判断支付成功
const postMyOrdersChkOrder = params => {
  return wxRequest('my/orders/chkOrder', params).then(res => res.data)
}
// TODO 订单页面
const postMyOrdersAll = params => {
  return wxRequest('my/orders/all', params).then(res => res.data)
}

// 整体导出
export default {
  getHomeSwiper,
  getHomeCatitems,
  getHomeFloor,
  getGoodsDetail,
  postUserWxLogin,
  postMyOrdersCreate,
  postMyOrdersPay,
  postMyOrdersChkOrder,
  postMyOrdersAll
}
