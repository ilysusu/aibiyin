import React, {memo, useState} from 'react'
import { CenterWrapper } from './style'
import searchTitles from "@/assets/data/search_titles.json"
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from "@/components/app-header/cpns/Center/cpns/search-tabs";
import SearchSections from "@/components/app-header/cpns/Center/cpns/search-sections";
import {CSSTransition} from "react-transition-group";


const HeaderCenter = memo(({isSearch, searchClick}) => {
  const titles = searchTitles.map(item => item.title)

  const [tabIndex, setTabIndex] = useState(0)
  const tabClick = (index) => {
    setTabIndex(index)
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchClick && searchClick}>
          <div className="text">
            搜索房源和体验
          </div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={tabClick} />
          <div className="infos">
            <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>

    </CenterWrapper>
  )
})

export default HeaderCenter
