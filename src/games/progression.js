import getRandomNumber from '../helpers.js';
import playGame from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const arrayProgression = [];
  for (let i = 0; i < length; i += 1) {
    arrayProgression.push(start + step * i);
  }
  return arrayProgression;
};

const createRound = () => {
  const firstNumber = getRandomNumber(0, 100);
  const difference = getRandomNumber(1, 10);
  const arrayLenght = getRandomNumber(6, 10);

  const progression = generateProgression(firstNumber, difference, arrayLenght);
  const index = getRandomNumber(1, progression.length - 1);
  const answer = String(progression[index]);
  progression[index] = '..';

  const question = progression.join(' ');
  return [answer, question];
};
export default () => {
  playGame(rules, createRound);
};
