import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 20px 30px;
  .title {
    margin-left: 5px;
    font-size: 22px;
    font-weight: 600;
    color: #222;
  }
  .room-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .9);
  }
`
