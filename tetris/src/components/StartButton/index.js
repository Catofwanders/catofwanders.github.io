import React from "react";
import { StyledStartButton } from "./styled.StartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={() => callback()}>Start Game</StyledStartButton>
);

export default StartButton;
