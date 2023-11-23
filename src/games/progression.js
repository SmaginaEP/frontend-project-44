import getRandomInt from '../helpers.js';
import playGame from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const arrayProgression = [];
  for (let i = 0; i < length; i += 1) {
    arrayProgression.push(start + step * i);
  }
  return arrayProgression;
};

const progression = () => {
  const firstNumber = getRandomInt(0, 100);
  const difference = getRandomInt(1, 10);
  const arrayLenght = getRandomInt(6, 10);
  const randomIndex = getRandomInt(1, `${arrayLenght}`);
  const result = firstNumber + (difference * (randomIndex));

  const arrayOfProgression = generateProgression(firstNumber, difference, arrayLenght);
  arrayOfProgression[randomIndex] = '..';

  const rightAnswer = `${result}`;
  const question = `${arrayOfProgression.join(' ')}`;
  return [rightAnswer, question];
};
export default () => {
  playGame(rules, progression);
};
