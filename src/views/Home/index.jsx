import React, {memo, useEffect} from 'react'
import HomeBanner from "@/views/Home/cpns/Banner";
import {HomeWrapper} from "@/views/Home/style";
import {useDispatch, useSelector} from "react-redux";
import {fetchHomeDataAction} from "@/store/modules/home";
import HomeSectionV1 from "src/views/Home/cpns/Section-v1";
import HomeSectionV2 from "@/views/Home/cpns/Section-v2";
import HomeSectionV3 from "@/views/Home/cpns/Section-v3";
import LongFor from "@/views/Home/cpns/LongFor";
import AppHeader from "@/components/app-header";
import {changeHeaderConfigAction} from "@/store/modules/main";

const Home = memo(() => {
  // 从redux中获取房源数据
  const {goodPriceInfo, highScoreInfo, discountInfo, hotplaceInfo, longforInfo, plusInfo} = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotplaceInfo: state.home.hotplaceInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo,
  }))
  // console.log(goodPriceInfo, highScoreInfo, discountInfo, plusInfo, '房源信息')

  // 页面加载完成，发送请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed: true}))
  }, [dispatch])


  return (
    <HomeWrapper>
      {/* header区域 */}
      {/* <AppHeader /> */}
      {/* 轮播图 */}
      <HomeBanner />
      {/* 房源信息区域 */}
      <div className="container">
        {/* 热门目的地,折扣优惠房源 */}   {/* 通过判断让组件第一次渲染的时候就可以获取到值 */}
        {Object.keys(discountInfo).length > 0 && <HomeSectionV2 infoData={discountInfo} />}
        {/* 精彩之地展示 */}
        {Object.keys(hotplaceInfo).length > 0 && <HomeSectionV2 infoData={hotplaceInfo} />}
        {/* 你可能想去的地方 */}
        {Object.keys(longforInfo).length > 0 && <LongFor infoData={longforInfo} />}
        {/* 高性价比房源 */}
        {Object.keys(goodPriceInfo).length > 0 && <HomeSectionV1 infoData={goodPriceInfo} />}
        {/* 高分好评房源 */}
        {Object.keys(highScoreInfo).length > 0 && <HomeSectionV1 infoData={highScoreInfo} />}
        {/* 品质和设计经过验证的房源 */}
        {Object.keys(plusInfo).length > 0 && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
