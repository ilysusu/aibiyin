import styled from "styled-components";

export const TabsWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  
  .item {
    padding-bottom: 5px;
    display: flex;
    cursor: pointer;
    .text {
      font-weight: 700;
    }
    
    &.active {
      border-bottom: 2px solid #222222;
    }
    
  }

`
