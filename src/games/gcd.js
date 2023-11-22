import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const randomInt1 = getRandomInt(0, 10);
  const randomInt2 = getRandomInt(0, 10);

  const NOD = (randomInt1, randomInt2) => {
    if (randomInt2 > randomInt1) { return NOD(randomInt2, randomInt1); }
    if (!randomInt2) { return randomInt1; }
    return NOD(randomInt2, randomInt1 % randomInt2);
  };

  const rightAnswer = `${NOD}`;
  const question = `${randomInt1} ${randomInt2}`;
  return [rightAnswer, question];
};
export default () => {
  playGame(rules, gcd);
};