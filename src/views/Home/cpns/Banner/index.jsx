import React, { memo } from 'react'
import { BannerWrapper } from './style'

const Banner = memo(() => {
  return (
    <BannerWrapper>
      <div className="banner-content"> </div>
    </BannerWrapper>
  )
})

export default Banner
