import getRandNumber from '../helpers.js';
import playGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getNOD = (number1, number2) => {
  if (number2 > number1) { return getNOD(number2, number1); }
  if (!number2) { return number1; }
  return getNOD(number2, number1 % number2);
};

const checkGcd = () => {
  const number1 = getRandNumber(1, 100);
  const number2 = getRandNumber(1, 100);
  const answer = `${getNOD(number1, number2)}`;
  const question = `${number1} ${number2}`;
  return [answer, question];
};
export default () => {
  playGame(rules, checkGcd);
};
