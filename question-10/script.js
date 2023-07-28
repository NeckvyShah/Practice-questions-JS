// Question 10:
// Explain the concept of the filter() function in JavaScript. Provide an example of how the filter() function can be used to extract specific elements from an array.

// Practical Task 10:
// Create an array of numbers. Use the filter() function to extract only the even numbers from the array and store them in a new array. Log the new array to the console.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNUmber = numbers.filter((number) => number % 2 === 0);

console.log(filteredNUmber);
