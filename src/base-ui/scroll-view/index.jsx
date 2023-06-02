import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {ViewWrapper} from "@/base-ui/scroll-view/style";
import {Button} from "antd";

// 封装 点击 左右按钮 滚动视图的组件
const ScrollView = props => {
  // 定义内部的状态
  const [showRightBtn, setShowRightBtn] = useState(false)
  const [posIndex, setPosIndex] = useState(0)

  // 记录总距离
  const totalDistanceRef = useRef()


  // 组件渲染完毕，判断是否显示右侧按钮
  const contentRef = useRef()
  useEffect(() => {
    const scrollWidth = contentRef.current.scrollWidth // 一共可滚动的宽度
    const clientWidth = contentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth // 总距离
    totalDistanceRef.current = totalDistance
    setShowRightBtn(totalDistance > 0)
  }, [props.children])

  // 事件处理逻辑
  const handleRightClick = () => {
    const newIndex = posIndex + 1
    // 拿到下一个城市按钮的item
    const newEl = contentRef.current.children[newIndex]
    // 拿到向左测可以偏移的距离
    // console.log(newEl.offsetLeft)
    contentRef.current.style.transform = `translate(-${newEl.offsetLeft}px)`
    // 设置最新的索引
    setPosIndex(newIndex)
    // 是否继续显示右侧按钮
    setShowRightBtn(totalDistanceRef.current > newEl.offsetLeft)
  }

  return (
    <ViewWrapper>
      <Button>left btn</Button>
      {showRightBtn && <Button onClick={handleRightClick}>right btn</Button>}

      {/* 中间的内容是不确定的，预留一个插槽 外面传递 */}
      <div className="content" ref={contentRef}>
        {props.children}
      </div>
    </ViewWrapper>
  );
};

ScrollView.propTypes = {

};

export default ScrollView;
