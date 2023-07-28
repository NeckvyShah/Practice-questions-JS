// Question 11:
// Explain the concept of the reduce() function in JavaScript. Provide an example of how the reduce() function can be used to perform a calculation on an array.

// Practical Task 11:
// Create an array of numbers. Use the reduce() function to calculate the sum of all the numbers in the array. Log the result to the console.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ans = numbers.reduce((acc, curr, i) => {
  return acc + curr;
});

console.log(ans);
