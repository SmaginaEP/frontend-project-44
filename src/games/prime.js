import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = () => {
  const randomInt = getRandomInt(2, 20);
  let rightAnswer;
  for (let i = 2; i < randomInt; i++) {
    if (randomInt % i === 0) {
      rightAnswer = 'no';
      break;
    }
    rightAnswer = 'yes';
  }
  const question = `${randomInt}`;
  return [rightAnswer, question];
};

export default () => {
  playGame(rules, isPrime);
};
