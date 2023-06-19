import React, { memo } from 'react'
import {HeaderWrapper}  from './style.js'
import HeaderLeft from './cpns/Left/index.jsx'
import HeaderCenter from './cpns/Center/index.jsx'
import HeaderRight from './cpns/Right/index.jsx'
import {shallowEqual, useSelector} from "react-redux";

const Header = memo(() => {

  const headerConfig = useSelector(state => state.main.headerConfig, shallowEqual)
  console.log(headerConfig.isFixed, 'headerConfig')
  const {isFixed} = headerConfig

  return (
    <HeaderWrapper className={`${isFixed ? "fixed" : ""}`}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default Header
