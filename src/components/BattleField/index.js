import React, { useState } from 'react';
import { number, object } from 'prop-types';
import { BattleFieldWrap } from './styled.BattleField';
import BattleCards from './BattleCards';

const initialValues = {
  same: [],
  previousValue: null,
  pairs: [],
};

const BattleWrap = ({ size, images }) => {
  const [finish, setFinish] = useState(false);

  return (
    <>
      <BattleFieldWrap>
        {images && <BattleCards initialValues={initialValues} setFinish={setFinish} size={size} {...images} />}
        {finish && <p>Finish!</p>}
      </BattleFieldWrap>
    </>
  );
};

BattleWrap.propTypes = {
  size: number.isRequired,
  images: object.isRequired,
};

export default BattleWrap;
