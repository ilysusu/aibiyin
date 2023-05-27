import React, {useState} from 'react';
import {SectionV2Wrapper} from "@/views/Home/cpns/Section-v2/style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import * as PropsType from "prop-types";

const SectionV2 = ({infoData}) => {

  const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? ''
  // console.log(initialName)

  // 数据转换
  const tabsName = infoData.dest_address?.map(item => item.name)
  // 接收子组件传递的值
  const [currName, setCurrName] = useState(initialName)


  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabsName={tabsName} setCurrName={setCurrName} />
      <SectionRooms roomList={infoData?.dest_list?.[currName]} itemWidth="33.33333%" />
    </SectionV2Wrapper>
  );
};

SectionV2.propsType = {
  infoData: PropsType.object
}

export default SectionV2;
