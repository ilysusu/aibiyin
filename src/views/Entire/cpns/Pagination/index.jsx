import React from 'react';
import {PaginationWrapper} from "@/views/Entire/cpns/Pagination/style";
import {Pagination} from "@mui/material";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {
  // changeCurrentPageAction,
  // changeRoomListAction,
  // changeTotalCountAction,
  fetchEntireDataAction
} from "@/store/modules/entire";

const EntirePagination = () => {
  // 从redux中获取数据
  const {totalCount, currentPage, roomList} = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)

  // 小算法
  const totalPage = Math.ceil(totalCount / 20) // 向上取整， 避免小数
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  // 修改redux中的数据
  const dispatch = useDispatch()
  // 处理页码更改逻辑
  const handlePageChange = (event, page) => {
    // 回到顶部
    window.scrollTo(0, 0)
    // 更新最新的页码 / 数据
    // dispatch(changeCurrentPageAction(page - 1))
    dispatch(fetchEntireDataAction(page - 1))
  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className="info">
            <Pagination count={totalPage} color="primary" onChange={handlePageChange} />
            <div className="desc">
              第 {startCount} - {endCount} 个房源，共超过 {totalCount} 个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  );
};

export default EntirePagination;
