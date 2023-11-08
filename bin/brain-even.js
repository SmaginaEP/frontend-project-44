#!/usr/bin/env node
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
};
console.log(getRandomInt(0, 1000));
getRandomInt(0, 1000);