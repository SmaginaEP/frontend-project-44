import readlineSync from 'readline-sync';

const playGame = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);
  const maxAnswerCount = 2;

  for (let i = 0; i <= maxAnswerCount; i += 1) {
    const [rightAnswer, question] = getQuestionAndAnswer();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
