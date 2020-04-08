import React from 'react';
import { number } from 'prop-types';
import { BattleFieldWrap } from './styled.BattleField';
import { generatePairs, concatArray, shuffleArray } from '../../helpers';
import BattleCards from './BattleCards';

const initialValues = {
  same: [],
  previousValue: null,
  pairs: [],
};

export default function BattleField({ size }) {
  const pairs = generatePairs(size / 2);
  const pairsArray = concatArray(pairs);
  const shuffledArray = shuffleArray(pairsArray);

  return (
    <>
      <p>BattleField size: {size}</p>
      <BattleFieldWrap>
        <BattleCards pairs={pairs} initialValues={initialValues} shuffledArray={shuffledArray} size={size} />
      </BattleFieldWrap>
    </>
  );
}

BattleField.propTypes = {
  size: number.isRequired,
};