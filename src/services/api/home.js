import hyRequest from "@/services";

// 获取性价比房源数据
export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: '/home/goodprice'
  })
}
