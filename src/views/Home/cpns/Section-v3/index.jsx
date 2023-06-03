import React from 'react';
import PropTypes from 'prop-types';
import {SectionV3Wrapper} from "@/views/Home/cpns/Section-v3/style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";
import SectionFooter from "@/components/section-footer";

const SectionV3 = ({infoData}) => {

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem item={item} itemWidth="20%" key={item.id} />
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </SectionV3Wrapper>
  );
};

SectionV3.propTypes = {
 infoData: PropTypes.object
};

export default SectionV3;
