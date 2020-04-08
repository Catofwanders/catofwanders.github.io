import React from 'react';
import { number } from 'prop-types';
import Card from '../Card';
import { BattleFieldWrap } from './styled.BattleField';
const sizes = {
  12: 100 / 3,
  24: 100 / 7,
};
export default function BattleField({ size }) {
  const BattleCards = () => [...Array(size)].map((e, i) => <Card key={i} index={i} width={sizes[size]} />);

  return (
    <>
      <p>BattleField size: {size}</p>
      <BattleFieldWrap>
        <BattleCards />
      </BattleFieldWrap>
    </>
  );
}

BattleField.propTypes = {
  size: number.isRequired,
};
