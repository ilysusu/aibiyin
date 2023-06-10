import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import {useNavigate} from "react-router-dom";

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  const handleLogClick = () => {
    navigate("/home")
  }
  return (
    <LeftWrapper onClick={handleLogClick}>
      <div className="log">
        <IconLogo />
      </div>
      <div className="title">爱彼迎</div>
    </LeftWrapper>
  )
})

export default HeaderLeft
