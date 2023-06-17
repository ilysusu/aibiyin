import React, {useState} from 'react';
import {PicturesWrapper} from "@/views/Detail/cpns/detail-pictures/style";
import {useSelector} from "react-redux";
import PictureBrowser from "@/base-ui/picture-browser";
import {Button} from "antd";

const DetailPictures = () => {
  const [showPicture, setShowPicture] = useState(false)
  // 从redux中获取详情数据
  const detailInfo = useSelector(state => state.detail.detailInfo)
  console.log(detailInfo, 'info')
  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls[0]} alt=""/>
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo.picture_urls.slice(1, 5).map(item => {
              return (
                <div className="item">
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
      { showPicture && <PictureBrowser setShowPicture={setShowPicture} /> }
    </PicturesWrapper>
  );
};

export default React.memo(DetailPictures);
