// Question 12:
// Explain the concept of the forEach() function in JavaScript. Provide an example of how the forEach() function can be used to iterate over an array.

// Practical Task 12:
// Create an array of strings. Use the forEach() function to log each string in the array to the console.

const stringsArray = ["neckvy", "sneha", "sagar", "jay"];
let stringArray = [];
stringsArray.forEach((string) => {
  stringArray.push(string);
  console.log(string); //this will simply print each string from the array to the console
});
console.log(stringArray); //this will print each string in the array to the console
