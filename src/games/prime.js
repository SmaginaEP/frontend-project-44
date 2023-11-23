import getRandomInt from '../helpers.js';
import playGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (rNumber) => {
  for (let i = 2; i < rNumber; i += 1) {
    if (rNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const checkPrime = () => {
  const randomNumber = getRandomInt(2, 500);
  const resPrime = isPrime(randomNumber);
  const rightAnswer = resPrime ? 'yes' : 'no';
  const question = `${randomNumber}`;
  return [rightAnswer, question];
};

export default () => {
  playGame(rules, checkPrime);
};
