import React, {memo, useState} from 'react'
import {HeaderWrapper}  from './style.js'
import HeaderLeft from './cpns/Left/index.jsx'
import HeaderCenter from './cpns/Center/index.jsx'
import HeaderRight from './cpns/Right/index.jsx'
import {shallowEqual, useSelector} from "react-redux";

const Header = memo(() => {
  // 定义组件内部状态
  const [isSearch, setIsSearch] = useState(false)

  // 获取redux中数据
  const headerConfig = useSelector(state => state.main.headerConfig, shallowEqual)
  console.log(headerConfig.isFixed, 'headerConfig')
  const {isFixed} = headerConfig

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
