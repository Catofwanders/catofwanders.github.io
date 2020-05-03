import React from "react";
import Cell from "../Cell";
import { StyledStage } from "./styled.Stage";

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {console.log(stage)}
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
