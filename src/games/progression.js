import getRandNumber from '../helpers.js';
import playGame from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const arrayProgression = [];
  for (let i = 0; i < length; i += 1) {
    arrayProgression.push(start + step * i);
  }
  return arrayProgression;
};

const checkProgression = () => {
  const firstNumber = getRandNumber(0, 100);
  const difference = getRandNumber(1, 10);
  const arrayLenght = getRandNumber(6, 10);
  const index = getRandNumber(1, arrayLenght);

  const progression = generateProgression(firstNumber, difference, arrayLenght);
  const result = `${progression[index]}`;
  progression[index] = '..';

  const answer = result;
  const question = progression.join(' ');
  return [answer, question];
};
export default () => {
  playGame(rules, checkProgression);
};
