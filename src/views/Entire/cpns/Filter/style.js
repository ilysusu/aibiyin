import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  padding-top: 10px;
  padding-left: 23px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  z-index: 9;
  .filter {
    display: flex;
    
    .item {
      margin-left: 10px;
      padding: 0 10px;
      border-radius: 3px;
      text-align: center;
      line-height: 30px;
      height: 30px;
      border: 1px solid #ddd;
      cursor: pointer;
      &.active {
        color: #fff;
        background-color: var(--secondary-color);
      }
    }
  }
`
