import readlineSync from 'readline-sync';

const acquaintance = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const playGame = (rules, func) => {
  const name = acquaintance();
  console.log(`${rules}`);

  let answerCount = 0;

  while (answerCount <= 2) {
    const result = func();
    const rightAnswer = result[0];
    const question = result[1];
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer === answer) {
      console.log('Correct!');
      answerCount += 1;
      continue;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
            Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
