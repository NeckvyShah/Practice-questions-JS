// Question 6:
// What is a callback function in JavaScript? Provide an example of a situation where a callback function is commonly used.

// Practical Task 6:
// Write a function called doMathOperation that takes two numbers and a callback function as parameters. The function should perform a mathematical operation (e.g., addition, subtraction) on the two numbers and call the callback function with the result. Implement the callback function to log or display the result. Test the doMathOperation function with different mathematical operations and callback functions.

function doMathOperation(a, b, callBack) {
  result = callBack(a, b);
  console.log(result);
}

function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}

doMathOperation(2, 3, addition);

// console.log(addition(2, 3)); //5
