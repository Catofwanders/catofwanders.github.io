import React, { useState } from 'react';
import { useFetch } from '../../hooks/imageHooks';
import BattleWrap from '../../components/BattleField';
import { generateCardsData } from '../../helpers';
import NavBar from '../../components/NavBar';

const BattleField = () => {
  const [size, setSize] = useState(6);
  const { loading, data } = useFetch(
    `https://pixabay.com/api/?key=15966127-0de5e2f734fe4c748678e72b0&q=peoples&image_type=photo&per_page=${
      size < 3 ? 3 : size
    }`,
    null
  );
  const cardData = !loading && data && generateCardsData(size * 2, data?.hits);
  const content = !loading && data ? <BattleWrap size={size} images={cardData} /> : <p>loading</p>;
  return (
    <>
      <NavBar size={size} setSize={setSize} />
      {content}
    </>
  );
};

export default BattleField;
