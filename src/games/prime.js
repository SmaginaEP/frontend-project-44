import getRandNumber from '../helpers.js';
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
  const number = getRandNumber(2, 500);
  const resPrime = isPrime(number);
  const answer = resPrime ? 'yes' : 'no';
  const question = number;
  return [answer, question];
};

export default () => {
  playGame(rules, checkPrime);
};
