import { styled } from "styled-components";

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

`