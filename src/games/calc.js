import getRandNumber from '../helpers.js';
import playGame from '../index.js';

const rules = 'What is the result of the expression?';

const calculate = (number1, number2, sign) => {
  switch (sign) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Нет нужного оператора!');
  }
};

const checkCalculation = () => {
  const number1 = getRandNumber(0, 100);
  const number2 = getRandNumber(0, 100);
  const operators = ['+', '-', '*'];
  const randomIndex = getRandNumber(0, `${operators.length - 1}`);
  const operator = operators[randomIndex];
  const result = calculate(number1, number2, operator);
  const answer = String(result);
  const question = `${number1} ${operator} ${number2}`;
  return [answer, question];
};
export default () => {
  playGame(rules, checkCalculation);
};
