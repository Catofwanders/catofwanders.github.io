import styled from 'styled-components';

export const CardWrap = styled.div`
  position: relative;
  width: ${({ width }) => `calc(${width}% - 2px)` || '100%'};
  border: 1px solid #000;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100px;
  margin: 1px;
  > * {
    position: relative;
    z-index: 1;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotateY(0);
    background: #ccc;
    transition: 0.5s;
  }
  &.active {
    pointer-events: none;
    &:after {
      transform: rotateY(-180deg);
      background: skyblue;
    }
  }
  p {
    margin: 0;
  }
`;
