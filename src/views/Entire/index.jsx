import React, {memo, useEffect} from 'react'
import {EntireWrapper} from "@/views/Entire/style";
import EntireFilter from "src/views/Entire/cpns/Filter";
import EntireRooms from "src/views/Entire/cpns/Rooms";
import EntirePagination from "src/views/Entire/cpns/Pagination";
import {fetchEntireDataAction} from "@/store/modules/entire";
import {useDispatch, useSelector} from "react-redux";

// 查看全部 的页面
const Entire = memo(() => {

  // 从redux中获取数据
  const {roomList, totalCount} = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
  }))

  // 发送请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireDataAction())
  }, [dispatch])


  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms roomList={roomList} totalCount={totalCount} />
      <EntirePagination totalCount={totalCount} />
    </EntireWrapper>
  )
})

export default Entire
