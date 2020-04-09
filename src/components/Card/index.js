import React from 'react';
import { number, func, object } from 'prop-types';
import { CardWrap } from './styled.Card';
import { isValueInArray } from '../../helpers';

export default function Card({ index, width, сlick, state }) {
  console.log(state, index);
  const isActive = isValueInArray(state.pairs, index);
  const isSame = state.previousValue === index;
  return (
    <CardWrap className={(isSame || isActive) && 'active'} width={width} onClick={() => сlick(index)}>
      <p>Card {index}</p>
      <p>{isSame && 'Clicked'}</p>
      <p>{isActive && 'Active'}</p>
    </CardWrap>
  );
}

Card.propTypes = {
  index: number.isRequired,
  width: number.isRequired,
  сlick: func.isRequired,
  state: object.isRequired,
};
