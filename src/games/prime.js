import getRandomNumber from '../helpers.js';
import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (rNumber) => {
  for (let i = 2; i < rNumber; i += 1) {
    if (rNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const createRound = () => {
  const question = getRandomNumber(2, 500);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [answer, question];
};

export default () => {
  playGame(description, createRound);
};
