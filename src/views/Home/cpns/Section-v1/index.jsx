import React from 'react';
import PropTypes from 'prop-types';
import {HomeSectionV1} from "@/views/Home/cpns/Section-v1/style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Section = ({infoData}) => {
  return (
    <HomeSectionV1>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <SectionRooms roomList={infoData?.list} />
    </HomeSectionV1>
  );
};

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
};

export default Section;
