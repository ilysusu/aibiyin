import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  > div {
    box-sizing:border-box;
    flex-basis:120px;
    flex-shrink:0;
    padding:14px 16px;
    margin-right:16px;
    border-radius:3px;
    font-size:17px;
    text-align:center;
    border:0.5px solid #D8D8D8;
    white-space:nowrap;
    cursor:pointer;
    transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
    }
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #fff;
      background-color: var(--secondary-color);
    }
  }
`
