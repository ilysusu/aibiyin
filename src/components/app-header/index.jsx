import React, {memo, useEffect, useState} from 'react'
import {HeaderWrapper}  from './style.js'
import HeaderLeft from './cpns/Left/index.jsx'
import HeaderCenter from './cpns/Center/index.jsx'
import HeaderRight from './cpns/Right/index.jsx'
import {shallowEqual, useSelector} from "react-redux";
import {useScrollPosition} from "@/hooks";

const Header = memo(() => {
  // 定义组件内部状态
  const [isSearch, setIsSearch] = useState(false)

  // 获取redux中数据
  const headerConfig = useSelector(state => state.main.headerConfig, shallowEqual)
  const {isFixed, isAlpha} = headerConfig

  // 监听滚动
  const [scrollX, scrollY] = useScrollPosition()
  useEffect(() => {
    if(scrollY > 100 || scrollX > 0) {
      setIsSearch(false)
    }
  }, [scrollY, scrollX])

  // 透明度逻辑
  // const alpha = isAlpha && scrollY === 0

  return (
    <HeaderWrapper issearch={isSearch} className={`${isFixed ? "fixed" : ""}`}>
      <div className="content" >
        <div className="top">
           <HeaderLeft />
           <HeaderCenter isSearch={isSearch} searchClick={event => setIsSearch(true)} />
           <HeaderRight />
         </div>
        <div className="search-area"></div>
      </div>

      {/* 蒙版 */}
      {isSearch && <div className="cover" onClick={event => setIsSearch(false)}></div>}

    </HeaderWrapper>
  )
})

export default Header
