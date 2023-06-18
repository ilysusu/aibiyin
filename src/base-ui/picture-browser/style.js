import styled from "styled-components";

export const BrowserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #333;
  
  .top {
    position: relative;
    height: 80px;
    .closeBtn {
      position: absolute;
      top: 10px;
      right: 20px;
      z-index: 999;
    }
  }
  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
    
    .control {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      .btn {
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        color: #fff;
        cursor: pointer;
      }
      
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
      
    //  动画的样式
      .pic-enter {
        transform: translateX(${props => props.isNext ? "100%" : "-100%"});
        opacity: 0;
      }
      
      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }
      
      .pic-exit {
        opacity: 1;
      }
      
      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }
  
  .indicator {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    user-select: none;
    
    .info {
      position: absolute;
      max-width: 105vh;
      color: #fff;
      
      .desc {
        width: 105vh;
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }
        
    }
    
    .list {
      margin-top: 23px;
      overflow: hidden;
      transition: height 300ms ease;
      height: ${props => props.showList ? "67px" : "0"};
      .item {
        margin-right: 15px;
        cursor: pointer;
        vertical-align: middle;

        img {
          height: 67px;
          opacity: 0.5;
        }

        &.active {
          img {
            opacity: 1;
          }
        }
      }
    }
  }
  
 
`

