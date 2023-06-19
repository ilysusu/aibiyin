import React from 'react';
import {SectionsWrapper} from "@/components/app-header/cpns/Center/cpns/search-sections/style";

const SearchSections = ({searchInfos}) => {
  return (
    <SectionsWrapper>
      {
        searchInfos.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="info">
                <div className="title">{item.title}</div>
                <div className="desc">{item.desc}</div>
              </div>

              {index !== searchInfos.length-1 && <div className="divider"></div> }
            </div>
          )

        })
      }
    </SectionsWrapper>
  );
};

export default SearchSections;
