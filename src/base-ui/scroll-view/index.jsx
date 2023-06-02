import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {ViewWrapper} from "@/base-ui/scroll-view/style";
import {Button} from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

// 封装 点击 左右按钮 滚动视图的组件
const ScrollView = props => {
  // 定义内部的状态
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [showRightBtn, setShowRightBtn] = useState(false)
  const [posIndex, setPosIndex] = useState(0)

  // 记录组件重新渲染 不可变的值
  const totalDistanceRef = useRef() // 总距离


  // 组件渲染完毕，判断是否显示右侧按钮
  const contentRef = useRef()
  useEffect(() => {
    const scrollWidth = contentRef.current.scrollWidth // 一共可滚动的宽度
    const clientWidth = contentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth // 总距离
    totalDistanceRef.current = totalDistance
    setShowRightBtn(totalDistance > 0)
  }, [props.children])

  // 点击按钮的事件处理逻辑
  const handleBtnClick = (isRight) => {
    // 获取下一个要偏移元素的索引
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    // 获取下一个城市按钮的item
    const newEl = contentRef.current.children[newIndex]
    // 获取向左测可以偏移的距离
    console.log(newEl.offsetLeft)
    const newOffsetLeft = newEl.offsetLeft
    contentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    // 设置最新的索引
    setPosIndex(newIndex)
    // 是否继续显示右侧按钮
    setShowRightBtn(totalDistanceRef.current > newOffsetLeft)
    // 左侧偏移量大于0， 显示左侧按钮
    setShowLeftBtn(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeftBtn && (
        <div className="btn left" onClick={e => handleBtnClick(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRightBtn && (
        <div className="btn right" onClick={e => handleBtnClick(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        {/* 中间的内容是不确定的，预留一个插槽 外面传递 */}
        <div className="content" ref={contentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
};

ScrollView.propTypes = {

};

export default ScrollView;
