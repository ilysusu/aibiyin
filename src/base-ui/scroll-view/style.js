import styled from "styled-components";

export const ViewWrapper = styled.div`
  // offsetLeft偏移量，需要加定位， 不然以body等元素为边界
  position: relative;
  .scroll {
    overflow: hidden;
    .content {
      display: flex;
      transition: all .2s ease;
    }
  }
  
  .btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
    z-index: 10;
    
    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`
