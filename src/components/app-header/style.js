import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
  
  .content {
    position: relative;
    z-index: 999;
    background-color: #fff;
    
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
    .search-area {
      transition: height 250ms ease;
      height: ${props => props.issearch ? '100px' : '0'};
    }
  }
  
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.3);
  }
  
  
  
`
