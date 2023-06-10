import styled from "styled-components";

export const FilterWrapper = styled.div`
  .filter {
    display: flex;
    margin-top: 10px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
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
