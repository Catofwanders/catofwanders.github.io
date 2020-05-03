import React, { memo } from "react";
import { StyledCell } from "./styled.Cell";
import { TETROMINOS } from "../../utils/tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type]?.color} />
);

export default memo(Cell);
