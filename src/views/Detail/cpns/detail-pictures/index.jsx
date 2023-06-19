import React, {useState} from 'react';
import {PicturesWrapper} from "@/views/Detail/cpns/detail-pictures/style";
import {shallowEqual, useSelector} from "react-redux";
import PictureBrowser from "@/base-ui/picture-browser";
import {Button} from "antd";

const DetailPictures = () => {
  const [showPicture, setShowPicture] = useState(false)
  // 从redux中获取详情数据
  const detailInfo = useSelector(state => state.detail.detailInfo, shallowEqual)
  console.log(detailInfo, 'info')
  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={e => setShowPicture(true) }>
            <img src={detailInfo?.picture_urls[0]} alt=""/>
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo.picture_urls.slice(1, 5).map((item, index) => {
              return (
                <div className="item" key={index} onClick={e => setShowPicture(true) }>
                  <img src={item} alt=""/>
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>

      <Button className="showBtn" onClick={e => setShowPicture(true) }>显示图片</Button>
      {/* 图片浏览器 */}
      { showPicture && <PictureBrowser pictures={detailInfo?.picture_urls} handleClose={e => setShowPicture(false)} /> }
    </PicturesWrapper>
  );
};

export default React.memo(DetailPictures);
