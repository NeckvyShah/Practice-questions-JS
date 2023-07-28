// Question 14:
// Explain the concept of the every() function in JavaScript. Provide an example of how the every() function can be used to check if all elements in an array satisfy a condition.

// Practical Task 14:
// Create an array of numbers. Use the every() function to check if all numbers in the array are positive. Log the result to the console.
const numbers = [1, 2, 3, 4, 5, 6, -7, 8, 9, -10];
const checkNegativeNumbers = numbers.every((number) => number >= 0);
console.log(checkNegativeNumbers);
