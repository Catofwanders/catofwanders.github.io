import React, { useState, useCallback, useEffect } from 'react';
import { object, array, number, func } from 'prop-types';
import { SIZES_LIST } from '../../helpers/lists';
import { concatArray, getPair, setStateValue, isValueInArray } from '../../helpers';
import Card from '../Card';

const BattleCards = ({ initialValues, pairs, shuffledArray, size, setFinish }) => {
  const [isStart, setIsStart] = useState(true);
  const [state, setState] = useState(initialValues);

  useEffect(() => {
    if (isStart) {
      const setPairs = concatArray(pairs).map((item) => item.id);
      setState((prev) => setStateValue(prev, 'pairs', setPairs));
      const clearTimeoutRef = setTimeout(() => {
        setState((prev) => setStateValue(prev, 'pairs', []));
        setIsStart(false);
      }, 5000);

      return () => {
        clearTimeout(clearTimeoutRef);
      };
    }
  }, [isStart, pairs]);

  useEffect(() => {
    if (state.pairs.length === size * 2 && !isStart) {
      setFinish(true);
    }
  }, [state, size, setFinish, isStart]);

  const cardClickHandler = useCallback(
    (id) => {
      const pair = getPair(id, pairs);
      if (state.previousValue) {
        setState((prev) => setStateValue(prev, 'previousValue', null));
        if (isValueInArray(pair, state.previousValue)) {
          setState((prev) => setStateValue(prev, 'pairs', [...prev.pairs, state.previousValue, id]));
        }
      } else {
        setState((prev) => {
          return { ...prev, previousValue: id, same: pair };
        });
      }
    },
    [pairs, state]
  );

  return shuffledArray.map(({ id, image = {} }) => (
    <Card state={state} сlick={cardClickHandler} key={id} index={id} width={SIZES_LIST[size]} image={image} />
  ));
};

BattleCards.propTypes = {
  initialValues: object.isRequired,
  shuffledArray: array.isRequired,
  size: number.isRequired,
  setFinish: func.isRequired,
};

export default BattleCards;
