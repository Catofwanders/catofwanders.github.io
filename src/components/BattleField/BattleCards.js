import React, { useState, useCallback, useEffect } from 'react';
import { SIZES_LIST } from '../../helpers/lists';
import Card from '../Card';
import { getPair, setStateValue, isValueInArray } from '../../helpers';

const BattleCards = ({ initialValues, pairs, shuffledArray, size }) => {
  const [state, setState] = useState(initialValues);

  useEffect(() => {
    console.log(state.pairs);
  }, [state]);

  const cardClickHandler = useCallback(
    (id) => {
      const pair = getPair(id, pairs);

      if (state.previousValue) {
        setState((prev) => setStateValue(prev, 'previousValue', null));
        if (isValueInArray(pair, state.previousValue)) {
          setState((prev) => setStateValue(prev, 'pairs', [...state.pairs, state.previousValue, id]));
        }
      } else {
        setState((prev) => {
          return { ...prev, previousValue: id, same: pair };
        });
      }
    },
    [pairs, state]
  );

  return shuffledArray.map((e, i) => (
    <Card state={state} сlick={cardClickHandler} key={e} index={e} width={SIZES_LIST[size]} />
  ));
};

export default BattleCards;
