export const getPair = (item, arr) => {
  return arr.find((arrItem) => {
    return arrItem.find((prop) => {
      return prop === item;
    });
  });
};

export const isValueInArray = (pair, value) => {
  return pair.some((item) => item === value);
};

export const setStateValue = (state, key, value) => {
  return { ...state, [key]: value };
};

export const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const concatArray = (arr) => {
  return [].concat.apply([], arr);
};

export const generatePairs = (size) => {
  let arr = [];
  let start = 1;
  for (let i = 1; i <= size; i++) {
    arr.push([start, start + 1]);
    start += 2;
  }
  return arr;
};
