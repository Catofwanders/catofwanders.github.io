import React from 'react';
import { CardWrap } from './styled.Card';
import { number } from 'prop-types';

export default function Card({ index, width }) {
  return <CardWrap width={width}>Card {index}</CardWrap>;
}

Card.propTypes = {
  index: number.isRequired,
  width: number.isRequired,
};
