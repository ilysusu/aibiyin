import { styled } from "styled-components";

export const RightWrapper = styled.div`
  margin-right: 30px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: var(--text-color);
  .links {
    display: flex;
    align-items: center;
    span {
      cursor: pointer;
      padding: 12px 15px;
      border-radius: 22px;
      transition: all 0.2s ease;
      &:hover {
        background-color: #eee;
      }
    }
  }
  .menu {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    padding: 0 5px;
    justify-content: space-around;
    width: 76px;
    height: 43px;
    border: 1px solid #eee;
    border-radius: 20px;
    color: #717171;
    transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
    .panel {
      position: absolute;
      top: 60px;
      right: 0;
      border: 1px solid #ddd;
      width: 200px;
      background-color: #fff;
      border-radius: 20px;
      padding: 10px 0;
      font-weight: bold;
      color: var(--text-color);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      .top {
        padding: 5px 0 10px 0;
      }
      .bottom {
        padding: 10px 0 5px;
        border-top: 1px solid #ddd;
      }
      .top div, .bottom div {
        padding-left: 10px;
        line-height: 40px;
        height: 40px;
        &:hover {
          background-color: #f7f7f7;
        }
      }
    }
  }
`
