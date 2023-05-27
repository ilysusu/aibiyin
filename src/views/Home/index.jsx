import React, { memo, useEffect } from 'react'
import Banner from "@/views/Home/cpns/Banner";
import SectionHeader from "@/components/section-header";
import {HomeWrapper} from "@/views/Home/style";
import {useDispatch, useSelector} from "react-redux";
import {fetchHomeDataAction} from "@/store/modules/home";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {

  const {goodPriceInfo} = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo
  }))
  // console.log(goodPriceInfo, '房源信息')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <Banner />
      <div className="container">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo?.title} subtitle={goodPriceInfo?.subtitle} />
          <SectionRooms roomList={goodPriceInfo?.list} />

        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
