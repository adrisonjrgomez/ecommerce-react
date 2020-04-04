import styled, { css } from "styled-components";

const buttonStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const InvertedStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const GoogleSignInStyle = css`
  background-color: #4455aa;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    font-weight: bold;
    border: 1px solid black
  }
`;

const getButtonStyle = props => {
  if (props.isGoogleButton) return GoogleSignInStyle;
  return props.inverted ? InvertedStyle : buttonStyle;
};

export const ButtonContainer = styled.button`
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyle}
`;
