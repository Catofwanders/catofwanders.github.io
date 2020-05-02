import React from "react";

// Components
import Display from "../Display";
import StartButton from "../StartButton";
import { createStage } from "../../utils/helpers";
import Stage from "../Stage";
import { StyledTetrisWrapper, StyledTetris } from "./styled.Tetris";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
