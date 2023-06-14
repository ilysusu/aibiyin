import React from 'react';
import {RoomsWrapper} from "@/views/Entire/cpns/Rooms/style";
import RoomItem from "@/components/room-item";
import {shallowEqual, useSelector} from "react-redux";

const Rooms = () => {
  // 从redux中获取数据
  const {roomList, totalCount, isLoading} = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="room-list">
        {
          roomList.map(item => {
            return (
              <RoomItem itemData={item} itemWidth="20%" key={item._id} />
            )
          })
        }
      </div>

      {isLoading && <div className="cover" />}
    </RoomsWrapper>
  );
};

export default Rooms;
