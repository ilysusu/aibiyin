import { styled } from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
  .search-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    border: 1px solid #ddd;
    padding: 10px 10px 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
     .text {
       font-size: 14px;
       color: var(--text-color);
     }
   .icon {
     display: flex;
     align-items: center;
     justify-content: center;
     width: 32px;
     height: 32px;
     border-radius: 50%;
     color: #fff;
     background-color: var(--primary-color);
   }
  }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;
    
    .infos {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%);
    }
  }
  
  .detail-exit {
    transform: scale(1.0) translateX(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35,0.727273) translateY(-58px);
    opacity:0;
  }
  
  .detail-enter {
    transform: scale(0.35,0.727273) translateY(-58px);
    opacity:0;
  }
  
  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }
  
  .bar-enter {
    transform: scale(2.85714,1.375) translateY(58px);
    opacity: 0;
  }
  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }
  .bar-exit {
    opacity: 0;
  }
`
