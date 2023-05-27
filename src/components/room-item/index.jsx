import React from 'react';
import {RoomItemWrapper} from "@/components/room-item/style";
import {Rating} from "@mui/material";

// 每个房间
const RoomItem = ({item, itemWidth="25%"}) => {
  return (
    // 从服务器拿颜色动态设置文本颜色,和宽度
    <RoomItemWrapper
      verifycolor={item.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      {/* inner内部的 */}
      <div className="inner">
        <div className="cover">
          <img src={item.picture_url} alt="" />
        </div>
        <div className="desc">
          <span>{item.verify_info.messages.join(' · ')}</span>
        </div>
        <div className="name">{item.name}</div>
        <div className="price">{item.price_format}/晚</div>
        <div className="bottom">
          <Rating
            name="simple-controlled"
            value={item.star_rating ?? 5}
            precision={0.1} // 控制半星、精准度
            sx={{fontSize: 13, color: '#358c88'}}
            readOnly
          />
          <span className="count">{item.reviews_count}</span>·
          <span className="extra">{item.bottom_info?.content ?? '未知房东'}</span>
        </div>
      </div>
    </RoomItemWrapper>
  );
};

export default RoomItem;
