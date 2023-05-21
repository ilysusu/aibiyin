import React from 'react';
import {HeaderWrapper} from "@/components/section-header/style";

const SectionHeader = ({title, subtitle}) => {
  return (
    <HeaderWrapper>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="subtitle">
        {subtitle && subtitle}
      </div>
    </HeaderWrapper>
  );
};

export default SectionHeader;
