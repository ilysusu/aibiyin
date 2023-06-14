import React, {useState} from 'react';
import Indicator from "@/base-ui/indicator";
import {DemoWrapper} from "@/views/Demo/style";

const Demo = () => {
  const arr = ["abc", 'bbb', 'ccc', 'ddd', 'eee', 'fff','dddd']
  const [selectIndex, setSelectIndex] = useState(0)

  const toggleClick = (isNext) => {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if(newIndex < 0) newIndex = arr.length-1
    if(newIndex > arr.length-1) newIndex = 0
    setSelectIndex(newIndex)
  }
  return (
    <DemoWrapper>
      <div className="control">
        <h2>selectIndex: {selectIndex}</h2>
        <button onClick={e => toggleClick(false)} >上一个</button>
        <button onClick={e => toggleClick(true)} >下一个</button>
      </div>

      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {
            arr.map(item => <button key={item}>{item}</button>)
          }
        </Indicator>
      </div>
    </DemoWrapper>
  );
};

export default Demo;
