// Function to generate a random number between min and max
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to create an array of 10 random numbers between 1 and 100
const createRandomNumbersArray = () => {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(getRandomNumber(1, 100));
  }
  return numbers;
};

// Arrow function to calculate the sum of array values
const calculateSum = (arr) => arr.reduce((sum, num) => sum + num, 0);

// Arrow function to calculate average
const calculateAverage = (arr) => calculateSum(arr) / arr.length;

// Function to print array elements using an iterator
const printArrayElements = (arr) => {
  console.log('Generated Array:', arr);
  console.log('Elements:');
  const iterator = arr[Symbol.iterator]();
  let index = 1;
  let result = iterator.next();
  while (!result.done) {
    console.log(`Element ${index}: ${result.value}`);
    result = iterator.next();
    index++;
  }
};

// Exporting all necessary modules
module.exports = {
  getRandomNumber,
  calculateSum,
  calculateAverage,
  printArrayElements,
  createRandomNumbersArray
};
