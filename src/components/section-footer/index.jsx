import React from 'react';
import PropTypes from 'prop-types';
import {FooterWrapper} from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";

const SectionFooter = props => {
  const {name} = props

  let showMessage = '查看更多'
  if(name) {
    showMessage = `查看更多${name}房源`
  }
  return (
    <FooterWrapper color={name ? '#00848A' : '#000'}>
      <div className="info">
        <span className="text">{showMessage}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
};

SectionFooter.propTypes = {
  name: PropTypes.string
};

export default SectionFooter;
