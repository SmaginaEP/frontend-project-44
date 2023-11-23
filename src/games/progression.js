import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const rules = 'What number is missing in the progression?';

const progression = () => {
  const firstNumber = getRandomInt(0, 100);
  const difference = getRandomInt(1, 10);
  const arrayLenght = getRandomInt(6, 10);
  const ArrayOfProgression = [];
  const randomIndex = getRandomInt(1, `${arrayLenght}`);
  const result = firstNumber + (difference * (randomIndex));

  let number = firstNumber;
  for (let i = 0; i < arrayLenght; i += 1) {
    ArrayOfProgression.push(number);
    number += difference;
  }
  ArrayOfProgression[randomIndex] = '..';

  const rightAnswer = `${result}`;
  const question = `${ArrayOfProgression.join(' ')}`;
  return [rightAnswer, question];
};
export default () => {
  playGame(rules, progression);
};
