// Question 4:
// What are default parameters in JavaScript functions? Give an example of a function that uses default parameters.

// Practical Task 4:
// Write a function called greet that takes a name and a greeting message as parameters. The greeting message should have a default value of "Hello". The function should return the formatted greeting message. Test the function by calling it with different arguments, both with and without the greeting message.

function greet(name, greetingMsg = "Hello") {
  return `${greetingMsg}. I am ${name}`;
}

console.log(greet("Neckvy"));
console.log(greet("Neckvy", "Hiii!!"));
