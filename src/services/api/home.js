import hyRequest from "@/services";

// 获取高性价比房源数据
export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: '/home/goodprice'
  })
}


// 获取高评分房源数据
export function getHomeHeightScoreData() {
  return hyRequest.request({
    method: 'get',
    url: '/home/highscore'
  })
}


// 获取折扣 房源数据
export function getHomeDiscountData() {
  return hyRequest.get({
    url: '/home/discount'
  })
}
