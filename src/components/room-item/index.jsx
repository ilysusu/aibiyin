import React, {useRef, useState} from 'react';
import {RoomItemWrapper} from "@/components/room-item/style";
import {Rating} from "@mui/material";
import {Carousel} from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";

// 每个房间
const RoomItem = ({itemData, itemWidth="25%"}) => {
  const [selectIndex, setSelectIndex] = useState(0)
  const [isAutoPlay, setAutoPlay] = useState(false)
  const sliderRef = useRef()

  // 切换图片事件处理逻辑
  const handleBtnClick = (isRight=true) => {
    let newIndex; // 最新索引
    if(isRight) {
      newIndex = selectIndex + 1
      sliderRef.current.next()
    }else {
      newIndex = selectIndex - 1
      sliderRef.current.prev()
    }

    // 处理边界问题
    if(newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if(newIndex > itemData.picture_urls.length - 1) newIndex = 0

    setSelectIndex(newIndex)
  };


  return (
    // 从服务器拿颜色动态设置文本颜色,和宽度
    <RoomItemWrapper
      verifycolor={itemData.verify_info?.text_color || "#39576a"}
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
          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {
                itemData.picture_urls?.map((item, index) => {
                  return (
                    <div className="dot-item" key={index}>
                      <span className={`dot ${selectIndex === index ? 'active' : ''}`}></span>
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
          <Carousel autoplay={isAutoPlay} dots={false} ref={sliderRef}>
            {
              itemData?.picture_urls?.map(pic => {
                return (
                  <div className="cover" key={itemData.id}>
                    <img src={pic} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="desc">
          <span>{itemData.verify_info.messages.join(' · ')}</span>
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/晚</div>
        <div className="bottom">
          <Rating
            name="simple-controlled"
            value={itemData.star_rating ?? 5}
            precision={0.1} // 控制半星、精准度
            sx={{fontSize: 13, color: '#358c88'}}
            readOnly
          />
          <span className="count">{itemData.reviews_count}</span>·
          <span className="extra">{itemData.bottom_info?.content ?? '未知房东'}</span>
        </div>
      </div>
    </RoomItemWrapper>
  );
};

export default RoomItem;
