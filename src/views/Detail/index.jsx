import React, { memo } from 'react'
import {DetailWrapper} from "@/views/Detail/style";
import DetailPictures from "@/views/Detail/cpns/detail-pictures";
import DetailInfos from "@/views/Detail/cpns/detail-infos";

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail
