import React, { useState, useCallback, useEffect } from 'react';
import { object, array, number, func } from 'prop-types';
import { SIZES_LIST } from '../../helpers/lists';
import Card from '../Card';
import { getPair, setStateValue, isValueInArray } from '../../helpers';

const BattleCards = ({ initialValues, pairs, shuffledArray, size, setFinish }) => {
  const [state, setState] = useState(initialValues);

  useEffect(() => {
    if (state.pairs.length === size) {
      setFinish(true);
    }
  }, [state, size, setFinish]);

  useEffect(() => {
    if (state.previousValue) {
      setTimeout(() => setState((prev) => setStateValue(prev, 'previousValue', null)), 3000);
    }
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

  return shuffledArray.map((e) => (
    <Card state={state} сlick={cardClickHandler} key={e} index={e} width={SIZES_LIST[size]} />
  ));
};

BattleCards.propTypes = {
  initialValues: object.isRequired,
  pairs: array.isRequired,
  shuffledArray: array.isRequired,
  size: number.isRequired,
  setFinish: func.isRequired,
};

export default BattleCards;
