import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const rules = 'What number is missing in the progression?';

const progression = () => {
  const firstNumber = getRandomInt(0, 100);
  const difference = getRandomInt(1, 10);
  const arrayLenght = getRandomInt(5, 10);
  const ArrayOfProgression = [];
  const randomIndex = getRandomInt(0, `${arrayLenght}`);
  const result = firstNumber + (difference * (randomIndex));

  console.log(firstNumber);
  console.log(difference);
  console.log(randomIndex);
  let number = firstNumber;
  for (let i = 0; i < arrayLenght; i += 1) {
    ArrayOfProgression.push(number);
    number += difference;
  }
  ArrayOfProgression[randomIndex] = '..';

  const rightAnswer = `${result}`;
  const question = `${ArrayOfProgression}`;
  return [rightAnswer, question];
};
export default () => {
  playGame(rules, progression);
};
