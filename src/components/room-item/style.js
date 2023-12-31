import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${props => props.itemwidth};
  padding: 8px;
  margin: 8px 0;
  cursor: pointer;
  
  .inner {
    width: 100%;
    
    .swiper {
      position: relative;
      cursor: pointer;
      
      &:hover {
        .control {
          display: flex;
        }
      }
      .control {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: #fff;
        display: none;
        justify-content: space-between;
        z-index: 1;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(to left, transparent 0%, rgba(0,0,0,0.25) 100%);
          &.right {
            background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 100%);
          }
        }
      }
      
      .indicator {
        z-index: 9;
        width: 30%;
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        
        .dot-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;

          .dot {
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;
            &.active {
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }
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
      object-fit: cover;
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
