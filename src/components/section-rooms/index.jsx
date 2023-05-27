import React from 'react';
import RoomItem from "@/components/room-item";
import {RoomsWrapper} from "@/components/section-rooms/style";

// 封装每个房源列表信息组件
const SectionRooms = (props) => {
  const {roomList, itemWidth} = props

  return (
    <RoomsWrapper className="room-list">
      {
        roomList?.slice(0, 8).map((item) => <RoomItem key={item.id} item={item} itemWidth={itemWidth} />)
      }
    </RoomsWrapper>
  );
};

export default SectionRooms;
