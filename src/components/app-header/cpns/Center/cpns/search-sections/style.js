import styled from "styled-components";

export const SectionsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  height: 48px;
  border: 1px solid #ddd;
  padding: 10px 10px 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  }
  
  .item {
    margin: 20px auto;
    .info {
      padding-right: 100px;
      border-right: 2px solid #eee;
      &:last-child {
        border-right: none;
      }
      .title {
        font-weight: 700;
      }
      .desc {
        margin-top: 3px;
        color: #919191;
        font-size: 13px;
      }
    }
  }

`
