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

// 获取好玩地方的数据
export function getHomeHotplaceData() {
  return hyRequest.get({
    url: '/home/hotrecommenddest'
  })
}

// 获取可能想去的地方数据
export function getHomeLongForData() {
  return hyRequest.get({
    url: '/home/longfor'
  })
}

// 品质和设计经过验证的房源
export function getHomePlusData() {
  return hyRequest.get({
    url: "/home/plus"
  })
}
