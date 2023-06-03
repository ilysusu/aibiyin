import React from 'react';
import PropTypes from 'prop-types';
import {LongfroWraaper} from "@/components/longfor-item/style";

const LongforItem = props => {
  const {itemData} = props

  return (
    <LongfroWraaper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} alt=""/>
          <div className="bg_cover"></div>
        </div>
        <div className="info">
          <div className="city">{itemData.city}</div>
          <div className="price">均价 {itemData.price}</div>
        </div>
      </div>
    </LongfroWraaper>
  );
};

LongforItem.propTypes = {
  itmeData: PropTypes.object
};

export default LongforItem;
