import React, { memo, useEffect } from 'react'
import Banner from "@/views/Home/cpns/Banner";
import {HomeWrapper} from "@/views/Home/style";
import {useDispatch, useSelector} from "react-redux";
import {fetchHomeDataAction} from "@/store/modules/home";
import HomeSectionV1 from "src/views/Home/cpns/Section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  // 从redux中获取房源数据
  const {goodPriceInfo, highScoreInfo, discountInfo} = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
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
      <Banner />
      {/* 房源信息区域 */}
      <div className="container">
        {/* 折扣优惠房源 */}
        <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionRooms roomList={discountInfo?.dest_list?.['成都']} itemWidth="33.33333%" />
        </div>

        {/* 高性价比房源 */}
        <HomeSectionV1 infoData={goodPriceInfo} />
        {/* 高分好评房源 */}
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home
