import React from "react";
import Cell from "../Cell";
import { StyledStage } from "./styled.Stage";

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell} />))}
  </StyledStage>
);

export default Stage;
