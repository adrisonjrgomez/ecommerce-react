import React from "react";

import { ButtonContainer } from "./button.styles";

import "./button.styles.scss";

const CustomButton = ({ children, ...othersProps }) => (
  <ButtonContainer {...othersProps}>{children}</ButtonContainer>
);

export default CustomButton;
