import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  const [isShow, setIsShow] = useState(true)

  useEffect(() =>{
    // 监听window点击, 隐藏panel
    function windowHandleClick() {
      setIsShow(true)
    }
    window.addEventListener('click', windowHandleClick, true)
    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  return (
    <RightWrapper>
      <div className="links">
        <span>登录</span>
        <span>注册</span>
        <span><IconGlobal /></span>
      </div>
      <div className="menu" onClick={e => setIsShow(!isShow)}>
        <IconMenu />
        <IconAvatar />

        <div className="panel" hidden={isShow}>
          <div className="topp">
            <div className='user'>个人中心</div>
            <div className='setting'>设置</div>
          </div>
          <div className="bottom">
            <div className='logout'>退出登录</div>
          </div>

        </div>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
