import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = () => {
  const randomInt = getRandomInt(2, 500);
  let rightAnswer = 'yes';
  for (let i = 2; i < randomInt; i += 1) {
    if (randomInt % i === 0) {
      rightAnswer = 'no';
      break;
    }
  }
  const question = `${randomInt}`;
  return [rightAnswer, question];
};

export default () => {
  playGame(rules, isPrime);
};
