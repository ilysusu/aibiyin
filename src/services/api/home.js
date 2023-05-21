// 获取性价比房源数据
import hyRequest from "@/services";

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: '/home/goodprice'
  })

}
