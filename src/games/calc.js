import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const rules = 'What is the result of the expression?';

const calc = () => {
  const randomInt1 = getRandomInt(0, 100);
  const randomInt2 = getRandomInt(0, 100);

  const ArrayOfSign = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (ArrayOfSign.length - 1));
  const randomSign = ArrayOfSign[randomIndex];
  let result;

  switch (randomSign) {
    case '-':
      result = randomInt1 - randomInt2;
      break;
    case '+':
      result = randomInt1 + randomInt2;
      break;
    case '*':
      result = randomInt1 * randomInt2;
      break;
    default:
      console.log('нет нужного знака');
  }

  const rightAnswer = `${result}`;
  const question = `${randomInt1} ${randomSign} ${randomInt2}`;
  return [rightAnswer, question];
};
export default () => {
  playGame(rules, calc);
};
