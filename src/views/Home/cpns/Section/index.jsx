import React from 'react';
import PropTypes from 'prop-types';
import {HomeSection} from "@/views/Home/cpns/Section/style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Section = ({infoData}) => {
  return (
    <HomeSection>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <SectionRooms roomList={infoData?.list} />
    </HomeSection>
  );
};

HomeSection.propTypes = {
  infoData: PropTypes.object
};

export default Section;
