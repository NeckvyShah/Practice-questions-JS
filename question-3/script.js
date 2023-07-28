// Question 3:
// Explain the difference between the rest operator (...) and the spread operator (...). Give an example of how each operator can be used.

// Practical Task 3:
// Write a function called sum that takes any number of arguments and returns their sum. Use the rest operator (...) to handle the variable number of arguments. Test the function with different numbers of arguments.

//using rest
function sum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
