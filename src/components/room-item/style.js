import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 8px;
  margin: 8px 0;
  cursor: pointer;
  
  .inner {
    width: 100%;
  }
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  
  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifycolor};
  }
  
  .name {
    font-size: 16px;
    font-weight: 700;
    // 文字超过两行显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    margin: 8px 0;
  }
  
  .bottom {
    display: flex;
    align-items: center;
    font-size:  12px;
    font-weight: 600;
    color: var(--text-color)
    .count{
      margin: 0 2px 0 4px;
    }
    .iPCHPo {
      margin-right: -2px;
    }
  }
`
