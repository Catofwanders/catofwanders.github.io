export const getPair = (item, arr) => {
  return arr.find((arrItem) => {
    return arrItem.find((prop) => {
      return prop.id === item;
    });
  });
};

export const isValueInArray = (pair, value) => {
  return pair.some((item) => item.id === value);
};
export const isValueInArray2 = (pair, value) => {
  return pair.some((item) => item === value);
};

export const setStateValue = (state, key, value) => {
  return { ...state, [key]: value };
};

export const shuffleArray = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

export const concatArray = (arr) => {
  return [].concat(...arr);
};

const generatePairs = (size, images) => {
  const arr = [];
  let start = 1;
  for (let i = 1; i <= size; i++) {
    arr.push([
      {
        id: start,
        image: images[i - 1],
      },
      {
        id: start + 1,
        image: images[i - 1],
      },
    ]);
    start += 2;
  }
  return arr;
};

export const generateCardsData = (size, images) => {
  const pairs = generatePairs(size / 2, images);
  const pairsArray = concatArray(pairs);
  const shuffledArray = shuffleArray(pairsArray);

  return { pairs, shuffledArray };
};
