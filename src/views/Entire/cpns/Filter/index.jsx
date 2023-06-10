import React, {useState} from 'react';
import {FilterWrapper} from "@/views/Entire/cpns/Filter/style";
import filterData from "@/assets/data/filter_data.json"

const Filter = () => {
  // 定义选中的状态
  const [selectItems, setSelectItems] = useState([])

  const handleClick = (item, index) => {
    console.log(item, index, selectItems);
    // 复杂数据类型 需要对原数据进行拷贝后，在进行修改
    const newItems = [...selectItems]
    if(newItems.includes(item)) {
      // 移除
      const itemIndex = selectItems.findIndex(it => it === item)
      console.log(itemIndex)
      newItems.splice(itemIndex, 1)
    }else {
      // 添加
      newItems.push(item)
    }

    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => {
            return (
              <div
                className={`item ${selectItems.includes(item) ? 'active' : ''}`}
                key={index}
                onClick={e => handleClick(item, index)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  );
};

export default Filter;
