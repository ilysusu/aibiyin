import React, {useCallback} from 'react';
import {RoomsWrapper} from "@/views/Entire/cpns/Rooms/style";
import RoomItem from "@/components/room-item";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {changeDetailInfoAction} from "@/store/modules/detail";

const Rooms = () => {
  // 从redux中获取数据
  const {roomList, totalCount, isLoading} = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleItemClick = useCallback((item) => {
    // console.log('itemClick', item)
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  }, [navigate, dispatch])

  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="room-list">
        {
          roomList.map(item => {
            return (
              <RoomItem itemClick={e => handleItemClick(item)} itemData={item} itemWidth="20%" key={item._id} />
            )
          })
        }
      </div>

      {isLoading && <div className="cover" />}
    </RoomsWrapper>
  );
};

export default Rooms;
