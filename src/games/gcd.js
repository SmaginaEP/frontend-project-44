import getRandomNumber from '../helpers.js';
import playGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getNOD = (number1, number2) => {
  if (number2 > number1) { return getNOD(number2, number1); }
  if (!number2) { return number1; }
  return getNOD(number2, number1 % number2);
};

const createRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const answer = String(getNOD(number1, number2));
  const question = `${number1} ${number2}`;
  return [answer, question];
};
export default () => {
  playGame(rules, createRound);
};
