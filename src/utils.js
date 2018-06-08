export const toJSON = data => data.json();

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
