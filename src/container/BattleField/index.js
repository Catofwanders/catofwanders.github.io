import React from 'react';
import { useFetch } from '../../hooks/imageHooks';
import BattleWrap from '../../components/BattleField';
import { generateCardsData } from '../../helpers';

const BattleField = () => {
  const size = 16;
  const { loading, data } = useFetch(
    `https://pixabay.com/api/?key=15966127-0de5e2f734fe4c748678e72b0&q=peoples&image_type=photo&per_page=${size}`,
    null
  );
  const cardData = !loading && data && generateCardsData(size, data?.hits);
  const content = !loading && data ? <BattleWrap size={size} images={cardData} /> : <p>loading</p>;
  return content;
};

export default BattleField;
