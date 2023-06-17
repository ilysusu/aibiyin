import styled from "styled-components";

export const PicturesWrapper = styled.div`
  position: relative;
  .pictures {
    display: flex;
    height: 600px;
    background-color: #000;
    
    &:hover {
      .cover{
        opacity: 1 !important;
      }
      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }
    
    .left, .right {
      width: 50%;
      height: 100%;
      .item {
        position: relative;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }
        // 遮罩层
        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0,0,0, .2);
          opacity: 0;
          transition: opacity 200ms ease;
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
    }
    
    .right {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 50%;
        box-sizing: border-box;
        border: 1px solid #000;
      }
    }
    
    
  }
  
  .showBtn {
    position: absolute;
    right: 15px;
    bottom: 15px;
    
  }
`
