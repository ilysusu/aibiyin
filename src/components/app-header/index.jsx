import React, { memo } from 'react'
import {HeaderWrapper}  from './style.js'
import HeaderLeft from './cpns/Left/index.jsx'
import HeaderCenter from './cpns/Center/index.jsx'
import HeaderRight from './cpns/Right/index.jsx'

const Header = memo(() => {
  return (
    <HeaderWrapper>
      {/* <div className="left">left</div>
      <div className="center">center</div>
      <div className="right">right</div> */}
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />

    </HeaderWrapper>
  )
})

export default Header