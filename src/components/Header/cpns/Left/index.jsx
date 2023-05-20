import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="log">
        <IconLogo />
      </div>
      <div className="title">爱彼迎</div>
    </LeftWrapper>
  )
})

export default HeaderLeft