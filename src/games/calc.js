import getRandomInt from '../helpers.js';
import playGame from '../index.js';

const rules = 'What is the result of the expression?';

const getCalcResult = (number1, number2, sign) => {
  let result;
  switch (sign) {
    case '-':
      result = number1 - number2;
      break;
    case '+':
      result = number1 + number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      console.log('нет нужного знака');
  }
  return result;
};

const calc = () => {
  const randomNumber1 = getRandomInt(0, 100);
  const randomNumber2 = getRandomInt(0, 100);
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomInt(0, `${operators.length - 1}`);
  const randomSign = operators[randomIndex];
  const result = getCalcResult(randomNumber1, randomNumber2, randomSign);
  const rightAnswer = String(result);
  const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
  return [rightAnswer, question];
};
export default () => {
  playGame(rules, calc);
};
