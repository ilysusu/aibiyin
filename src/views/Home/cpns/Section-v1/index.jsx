import React from 'react';
import PropTypes from 'prop-types';
import {SectionV1Wrapper} from "@/views/Home/cpns/Section-v1/style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const SectionV1 = ({infoData}) => {
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <SectionRooms roomList={infoData?.list} />
    </SectionV1Wrapper>
  );
};

SectionV1.propTypes = {
  infoData: PropTypes.object
};

export default SectionV1;
