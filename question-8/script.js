// Question 8:
// Write a function called capitalizeNames that takes an array of names as a parameter. The function should use the spread operator (...) to create a new array where each name is capitalized. Return the new array.

// Practical Task 8:
// Test the capitalizeNames function with an array of names and log the result to the console.

// without using spread
// function capitalizeNames(nameArray) {
//   let namesCaps = [];
//   for (let name of nameArray) {
//     namesCaps.push(name.toUpperCase());
//   }
//   return namesCaps;
// }

// console.log(capitalizeNames(["neckvy", "riya", "jeel", "harshit"]));

// using spread operator
function capitalizeNames(nameArray) {
  return [...nameArray].map((name) => name.toUpperCase());
}

console.log(capitalizeNames(["neckvy", "Jay", "Sagar", "Sneha"]));
