import getRandomInt from '../helpers.js';
import playGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (rNumber) => (rNumber % 2 === 0);

const checkEven = () => {
  const randomNumber = getRandomInt(0, 500);
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);
  return [rightAnswer, question];
};
export default () => {
  playGame(rules, checkEven);
};
