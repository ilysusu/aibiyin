import React, { memo, useEffect } from 'react'
import Banner from "@/views/Home/cpns/Banner";
import {HomeWrapper} from "@/views/Home/style";
import {useDispatch, useSelector} from "react-redux";
import {fetchHomeDataAction} from "@/store/modules/home";
import HomeSection from "src/views/Home/cpns/Section";

const Home = memo(() => {
  // 从redux中获取房源数据
  const {goodPriceInfo, highScoreInfo} = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }))
  // console.log(goodPriceInfo, highScoreInfo, '房源信息')

  // 页面加载完成，发送请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      {/* 轮播图 */}
      <Banner />
      {/* 房源类容区域 */}
      <div className="container">
        <HomeSection infoData={goodPriceInfo} />
        <HomeSection infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home
