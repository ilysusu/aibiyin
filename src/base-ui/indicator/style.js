import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  
  .content {
    position: relative;
    display: flex;
    
    transition: all 200ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`
