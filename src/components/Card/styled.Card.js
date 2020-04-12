import styled from 'styled-components';
import CardBack from '../../assets/img/card-back.jpg';

export const CardWrap = styled.div`
  position: relative;
  width: ${({ width }) => `calc(${width}% - 2px)` || '100%'};
  min-height: ${({ width }) => `calc(${width}vh - 20px)` || '100%px'};
  border: 1px solid #000;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    transition: 0.5s;
    background: url(${CardBack}) no-repeat center/cover;
  }
  &.active {
    pointer-events: none;
    &:after {
      transform: rotateY(-180deg);
      background-image: ${({ image }) => `url(${image})`};
    }
  }
  p {
    margin: 0;
  }
`;
