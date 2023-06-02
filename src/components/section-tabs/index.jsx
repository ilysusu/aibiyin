import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TabsWrapper} from "@/components/section-tabs/style";
import ScrollView from "@/base-ui/scroll-view";

// 封装城市选项 组件
const SectionTabs = ({tabsName = [], setCurrName}) => {
  const [currentIndex, setCurrenIndex] = useState(0)

  // tabs切换事件
  const handleClick = (item, index) => {
    console.log(item, index)
    setCurrenIndex(index)
    setCurrName(item)
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabsName?.map((item, index) => {
          return (
            <div
              key={index}
              className={`item ${currentIndex === index ? 'active': ''}`}
              onClick={e => handleClick(item, index)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  );
};

SectionTabs.propTypes = {
  tabsName: PropTypes.array
};


export default SectionTabs;
