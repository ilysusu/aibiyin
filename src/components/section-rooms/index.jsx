import React from 'react';
import RoomItem from "@/components/room-item";
import {RoomsWrapper} from "@/components/section-rooms/style";


// 每个房间列表信息
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
