import React from 'react';
import { CardWrap } from './styled.Card';
import { number, func, object } from 'prop-types';
import { isValueInArray } from '../../helpers';

export default function Card({ index, width, сlick, state }) {
  const isActive = isValueInArray(state.pairs, index);
  return (
    <CardWrap className={isActive && 'active'} width={width} onClick={() => сlick(index)}>
      <p>Card {index}</p>
      <p>{state.previousValue === index && 'Clicked'}</p>
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
