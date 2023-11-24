import getRandNumber from '../helpers.js';
import playGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const checkEven = () => {
  const number = getRandNumber(0, 500);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return [answer, question];
};
export default () => {
  playGame(rules, checkEven);
};
