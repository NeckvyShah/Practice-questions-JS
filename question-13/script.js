// Question 13:
// Explain the concept of the some() function in JavaScript. Provide an example of how the some() function can be used to check if any element in an array satisfies a condition.

// Practical Task 13:
// Create an array of numbers. Use the some() function to check if there are any negative numbers in the array. Log the result to the console.

const numbers = [1, 2, 3, 4, 5, 6, -7, 8, 9, -10];
const checkNegativeNumbers = numbers.some((number) => number <= 0);
console.log(checkNegativeNumbers);
