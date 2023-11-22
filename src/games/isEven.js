import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => {
  const randomInt = getRandomInt(0, 500);
  const rightAnswer = (randomInt % 2 === 0) ? 'yes' : 'no';
  const question = `${randomInt}`;
  return [rightAnswer, question];
};
export default () => {
  playGame(rules, isEven);
};
