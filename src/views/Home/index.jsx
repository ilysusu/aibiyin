import React, { memo, useEffect, useState } from 'react'
import Banner from "@/views/Home/cpns/Banner";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import {HomeWrapper} from "@/views/Home/style";
import {useDispatch, useSelector} from "react-redux";
import {fetchHomeDataAction} from "@/store/modules/home";

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
          <SectionHeader title={goodPriceInfo.title} subtitle={goodPriceInfo?.subtitle} />
          <ul className="room-list ">
            {
              goodPriceInfo.list?.slice(0, 8).map((item) => <RoomItem key={item.id} item={item} />)
            }
          </ul>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
