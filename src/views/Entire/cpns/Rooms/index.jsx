import React from 'react';
import {RoomsWrapper} from "@/views/Entire/cpns/Rooms/style";
import RoomItem from "@/components/room-item";

const Rooms = ({roomList, totalCount}) => {
  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="room-list">
        {
          roomList.map(item => {
            return (
              <RoomItem item={item} itemWidth="20%" key={item.id} />
            )
          })
        }
      </div>
    </RoomsWrapper>
  );
};

export default Rooms;
