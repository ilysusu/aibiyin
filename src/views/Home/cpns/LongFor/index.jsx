import React from 'react';
import {LongForWraaper} from "@/views/Home/cpns/LongFor/style";
import PropTypes from "prop-types";
import SectionHeader from "@/components/section-header";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const LongFor = (props) => {
  const {infoData} = props
  return (
    <LongForWraaper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="content">
        <ScrollView>
          {
            infoData.list?.map(item => {
              return <LongforItem itemData={item} key={item.city} />
            })
          }
        </ScrollView>
      </div>
    </LongForWraaper>
  );
};

LongFor.prototype = {
  infoData: PropTypes.object
}

export default LongFor;
