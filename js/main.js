const randomInteger=(min, max) => {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

 randomInteger(1, 3);



 const getRandomInt=(max) => {
  return Math.floor(Math.random() * max);
}

 getRandomInt(3);
// expected output: 0, 1 or 2

getRandomInt(1);
// expected output: 0

Math.random();
// expected output: a number from 0 to <1
