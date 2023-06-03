import styled from "styled-components";

export const LongfroWraaper = styled.div`
  flex-shrink: 0;
  width: 25%;
  .inner {
    position: relative;
    padding: 8px;
    
    .item-info {
      position: relative;
      border-radius: 3px;
      overflow: hidden;

      .cover {
        width: 100%;
      }

      .bg_cover {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 60%;
        background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgba(0, 0, 0) 100%);
      }
    }
    
    .info {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translate(-50%);
      font-weight: 700;
      color: #fff;
      text-align: center;
      
      .price {
        margin-top: 10px;
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
  
`
