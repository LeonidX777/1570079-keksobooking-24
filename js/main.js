const getRandomIntegerInRange = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

getRandomIntegerInRange(1, 3);

const getRandomIntToMax = (max) =>
  Math.floor(Math.random() * max);

getRandomIntToMax(1);
