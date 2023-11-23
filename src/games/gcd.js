import getRandomInt from '../helpers.js';
import playGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getNOD = (int1, int2) => {
  if (int2 > int1) { return getNOD(int2, int1); }
  if (!int2) { return int1; }
  return getNOD(int2, int1 % int2);
};

const gcd = () => {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const rightAnswer = `${getNOD(randomNumber1, randomNumber2)}`;
  const question = `${randomNumber1} ${randomNumber2}`;
  return [rightAnswer, question];
};
export default () => {
  playGame(rules, gcd);
};
