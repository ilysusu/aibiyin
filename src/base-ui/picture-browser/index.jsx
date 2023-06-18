import React, {useEffect, useState} from 'react';
import {BrowserWrapper} from "@/base-ui/picture-browser/style";
import {Button} from "antd";
import PropTypes from "prop-types";
import {CSSTransition, SwitchTransition} from "react-transition-group"
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";

// 图片浏览器
const PictureBrowser = (props) => {
  const {pictures, setShowPicture, closeClick} = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [showPicList, setShowPicList] = useState(true)

  // 当图片浏览器展示出来的时候， 滚动条消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // 图片切换逻辑
  const handleClick = (isNext = true) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if(newIndex < 0) newIndex = pictures.length-1
    if(newIndex > pictures.length-1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  return (
    <BrowserWrapper isNext={isNext} showList={showPicList}>
      <div className="top">
        {/* <Button className="closeBtn" onClick={e => setShowPicture(false)}>×关闭</Button> */}
        <Button className="closeBtn" onClick={closeClick && closeClick}>×关闭×</Button>
      </div>

      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => handleClick(false)}>
            <IconArrowLeft width={72} height={72} />
          </div>
          <div className="btn right" onClick={e => handleClick(true)}>
            <IconArrowRight width={72} height={72} />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictures[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictures[currentIndex]} alt=""/>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      <div className="indicator">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex+1}/{pictures.length}：</span>
              <span>room apartment图片{currentIndex+1}</span>
            </div>
            <div className="toggle" onClick={e => setShowPicList(!showPicList)}>
              <span>{showPicList ? '隐藏' : '显示'}图片列表</span>
            </div>
          </div>
        </div>

        <div className="list">
          <Indicator selectIndex={currentIndex}>
            {
              pictures.map((item, index) => {
                return (
                  <div
                    className={`item ${currentIndex === index ? "active" : ""}`}
                    key={index}
                    onClick={e => setCurrentIndex(index)}
                  >
                    <img src={item} alt=""/>
                  </div>
                )
              })
            }
          </Indicator>
        </div>

        {/* { */}
        {/*   showPicList && ( */}
        {/*     <div className="list"> */}
        {/*       <Indicator selectIndex={currentIndex}> */}
        {/*         { */}
        {/*           pictures.map((item, index) => { */}
        {/*             return ( */}
        {/*               <div */}
        {/*                 className={`item ${currentIndex === index ? "active" : ""}`} */}
        {/*                 key={index} */}
        {/*                 onClick={e => setCurrentIndex(index)} */}
        {/*               > */}
        {/*                 <img src={item} alt=""/> */}
        {/*               </div> */}
        {/*             ) */}
        {/*           }) */}
        {/*         } */}
        {/*       </Indicator> */}
        {/*     </div> */}
        {/*   ) */}
        {/* } */}
      </div>
    </BrowserWrapper>
  );


};

PictureBrowser.propTypes = {
  pictures: PropTypes.array,
  setShowPicture: PropTypes.func
}

export default React.memo(PictureBrowser);
