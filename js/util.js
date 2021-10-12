
const getRandomIntegerInRange =  (max, min = 0) => {
  const rand = min - 0.5 + Math.random() * (max - min);
  return Math.round(rand);
};

const getRandomPositiveFloat = (numberA, numberB, digits = 1) => {
  const lower = Math.min(Math.abs(numberA), Math.abs(numberB));
  const upper = Math.max(Math.abs(numberA), Math.abs(numberB));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

export {getRandomIntegerInRange, getRandomPositiveFloat};
