import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  border-left: 5px solid transparent;
  ${(props) =>
    props.alter === "true"
      ? css`
          border-left: 5px solid rgb(128, 74, 189);
          background-color: rgb(34, 36, 36);
          font-weight: bold;
        `
      : css`
          background-color: transparent;
        `}
  color: whitesmoke;
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 0;
  font-size: 1.1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 5px;
  display: flex;
  align-items: center;

  &:hover {
    border-left: 5px solid rgb(128, 74, 189);
  }
`;
export default Button;
