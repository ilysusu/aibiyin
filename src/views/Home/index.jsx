import React, {memo, useEffect} from 'react'
import HomeBanner from "@/views/Home/cpns/Banner";
import {HomeWrapper} from "@/views/Home/style";
import {useDispatch, useSelector} from "react-redux";
import {fetchHomeDataAction} from "@/store/modules/home";
import HomeSectionV1 from "src/views/Home/cpns/Section-v1";
import HomeSectionV2 from "@/views/Home/cpns/Section-v2";

const Home = memo(() => {
  // 从redux中获取房源数据
  const {goodPriceInfo, highScoreInfo, discountInfo, hotplaceInfo} = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotplaceInfo: state.home.hotplaceInfo
  }))
  // console.log(goodPriceInfo, highScoreInfo, discountInfo, '房源信息')

  // 页面加载完成，发送请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])


  return (
    <HomeWrapper>
      {/* 轮播图 */}
      <HomeBanner />
      {/* 房源信息区域 */}
      <div className="container">
        {/* 折扣优惠房源 */}
        {/* // 通过判断让组件第一次渲染的时候就可以获取到值 */}
        {Object.keys(discountInfo).length > 0 && <HomeSectionV2 infoData={discountInfo} />}

        {/* 精彩之地展示 */}
        {Object.keys(hotplaceInfo).length > 0 && <HomeSectionV2 infoData={hotplaceInfo} />}

        {/* 高性价比房源 */}
        <HomeSectionV1 infoData={goodPriceInfo} />
        {/* 高分好评房源 */}
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home
