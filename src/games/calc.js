import getRandomNumber from '../helpers.js';
import playGame from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Оperator ${operator} unsupported!`);
  }
};

const createRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, `${operators.length - 1}`);
  const operator = operators[randomIndex];
  const result = calculate(number1, number2, operator);
  const answer = String(result);
  const question = `${number1} ${operator} ${number2}`;
  return [answer, question];
};
export default () => {
  playGame(description, createRound);
};
