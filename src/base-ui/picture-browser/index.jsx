import React, {useEffect} from 'react';
import {BrowserWrapper} from "@/base-ui/picture-browser/style";
import {Button} from "antd";

// 图片浏览器
const PictureBrowser = ({setShowPicture}) => {

  // 当图片浏览器展示出来的时候， 滚动条消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  })

  return (
    <BrowserWrapper>
      <Button onClick={e => setShowPicture(false)}>×关闭</Button>
      PictureBrowser
    </BrowserWrapper>
  );


};

PictureBrowser.propTypes = {

}

export default PictureBrowser;
