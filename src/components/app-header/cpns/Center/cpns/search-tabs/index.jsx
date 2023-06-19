import React, {useState} from 'react';
import {TabsWrapper} from "@/components/app-header/cpns/Center/cpns/search-tabs/style";

const SearchTabs = (props) => {
  const {titles, tabClick} = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClick = (index) => {
    setCurrentIndex(index)
    tabClick && tabClick(index)
  }

  return (
    <TabsWrapper>
      {
        titles.map((item, index) => {
          return (
            <div
              className={`item ${currentIndex === index ? "active" : ""}`}
              key={index}
              onClick={e => handleClick(index)}
            >
              <span className={'text'}>{item}</span>
              <span className={'bottom'}></span>
            </div>
          )

        })
      }
    </TabsWrapper>
  );
};

export default SearchTabs;
