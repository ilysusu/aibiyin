import React, {memo, useEffect} from 'react'
import {DetailWrapper} from "@/views/Detail/style";
import DetailPictures from "@/views/Detail/cpns/detail-pictures";
import DetailInfos from "@/views/Detail/cpns/detail-infos";
import {useDispatch} from "react-redux";
import {changeHeaderConfigAction} from "@/store/modules/main";

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed: false}))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail
