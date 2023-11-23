import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const NOD = (int1, int2) => {
    if (int2 > int1) { return NOD(int2, int1); }
    if (!int2) { return int1; }
    return NOD(int2, int1 % int2);
  };
  const randomInt1 = getRandomInt(1, 100);
  const randomInt2 = getRandomInt(1, 100);

  const rightAnswer = `${NOD(randomInt1, randomInt2)}`;
  const question = `${randomInt1} ${randomInt2}`;
  return [rightAnswer, question];
};
export default () => {
  playGame(rules, gcd);
};
