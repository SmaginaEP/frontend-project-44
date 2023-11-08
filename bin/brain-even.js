#!/usr/bin/env node

import readlineSync from 'readline-sync';

const acquaintance = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const name = acquaintance();

const isAnswerCorrect = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
 
  let answerCount = 0;

  while (answerCount <= 2) { 
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const randomInt = getRandomInt(0, 500);
    const isEven = (randomInt % 2 == 0) ? 'yes' : 'no';

    console.log(`Question: ${randomInt}`);

    const answer = readlineSync.question('Your answer: ');
    
    if (isEven === answer) {
      console.log('Correct!');
      answerCount += 1;
      continue;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.
            Let's try again, ${name}!`);
    return;
    } 
  }

  console.log(`Congratulations, ${name}!`);
};
isAnswerCorrect();
