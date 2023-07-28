// Question 7:
// Explain the logical AND (&&), OR (||), and NOT (!) operators in JavaScript. Provide examples of how each operator can be used.

// Practical Task 7:
// Write a function called isEvenAndPositive that takes a number as a parameter. The function should return true if the number is both even and positive; otherwise, it should return false.

function isEvenAndPositive(number) {
  if (number % 2 === 0 && number >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEvenAndPositive(5));
console.log(isEvenAndPositive(2));
console.log(isEvenAndPositive(10));
console.log(isEvenAndPositive(15));
console.log(isEvenAndPositive(-8));
