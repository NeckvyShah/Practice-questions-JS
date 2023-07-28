// Question 15:
// Explain the concept of the find() function in JavaScript. Provide an example of how the find() function can be used to search for a specific element in an array.

// Practical Task 15:
// Create an array of objects representing people. Each object should have a name and age property. Use the find() function to search for a person with a specific name in the array. Log the result to the console.

const peoples = [
  { name: "Neckvy", age: 22 },

  { name: "Riya", age: 23 },

  { name: "Parul", age: 25 },
];

// const selectedCrieria = "Neckvy";
const selectedPerson = peoples.find((people) => (people.name = "Neckvy"));
// const selectedPerson = peoples.find((people) => people.age > 22);
console.log(selectedPerson);
