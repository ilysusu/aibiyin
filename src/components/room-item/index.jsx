import React, {useRef, useState} from 'react';
import {RoomItemWrapper} from "@/components/room-item/style";
import {Rating} from "@mui/material";
import {Carousel} from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

// 每个房间
const RoomItem = ({item, itemWidth="25%"}) => {
  const [isAutoPlay, setAutoPlay] = useState(false)
  const sliderRef = useRef()

  // 切换图片事件处理逻辑
  const handleBtnClick = (isRight=true) => {
    if(isRight) {
      sliderRef.current.next()
    }else {
      sliderRef.current.prev()
    }
  };


  return (
    // 从服务器拿颜色动态设置文本颜色,和宽度
    <RoomItemWrapper
      verifycolor={item.verify_info?.text_color || "#39576a"}
      itemwidth={itemWidth}
    >
      {/* inner内部的 */}
      <div className="inner">
        {/* <div className="cover"> */}
        {/*   <img src={item.picture_url} alt="" /> */}
        {/* </div> */}
        <div className="swiper" onMouseEnter={e => setAutoPlay(true)}  onMouseLeave={e => setAutoPlay(false)}>
          <div className="control">
            <div className="btn left" onClick={e => handleBtnClick(false)}>
              <IconArrowLeft width={20} height={20} />
            </div>
            <div className="btn right" onClick={e => handleBtnClick(true)}>
              <IconArrowRight width={20} height={20} />
            </div>
          </div>
          <Carousel autoplay={isAutoPlay} dots={false} ref={sliderRef}>
            {
              item?.picture_urls?.map(pic => {
                return (
                  <div className="cover" key={item.id}>
                    <img src={pic} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
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
