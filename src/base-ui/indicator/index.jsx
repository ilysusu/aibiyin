import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {IndicatorWrapper} from "@/base-ui/indicator/style";

// 轮播图下方圆点指示器
const Indicator = props => {
  const {selectIndex=0} = props
  const contentRef = useRef()

  useEffect(() => {
    // 1. 获取selectIndex 对应的item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemOffsetLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth

    // 2. 获取content的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth

    // 3. 计算selectIndex要滚动的距离
    let distance = itemOffsetLeft + itemWidth * 0.5 - contentWidth * 0.5
    // 4. 特殊情况处理
    if(distance < 0) distance = 0 // 左边的特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if(distance > totalDistance) distance = totalDistance // 右边的特殊情况处理

    // 5. 改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
};

Indicator.propTypes = {
  selectIndex: PropTypes.number
};

export default Indicator;
