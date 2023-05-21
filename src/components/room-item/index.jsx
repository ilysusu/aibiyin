import React from 'react';
import {RoomItemWrapper} from "@/components/room-item/style";

// 每个房间
const RoomItem = ({item}) => {
  console.log(item)

  return (
    // 从服务器拿颜色动态设置文本颜色
    <RoomItemWrapper verifyColor={item.verify_info?.text_color || "#39576a"}>
      {/* inner内部的 */}
      <div className="inner">
        <div className="cover">
          <img src={item.picture_url} alt="" />
        </div>
        <div className="desc">
          <span>{item.verify_info.messages.join('·')}</span>
        </div>
        <div className="name">{item.name}</div>
        <div className="price">{item.price_format}/晚</div>
      </div>
    </RoomItemWrapper>
  );
};

export default RoomItem;
