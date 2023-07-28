# README.MD Practice question JS

# Question-3

## Explain the difference between the rest operator (...) and the spread operator (...). Give an example of how each operator can be used.

### Spread Operator

- Spread operator is used to unpack an array
- With spread operator, we expand the array into all its elements
- Whenever we need individual elements of an array, we use spread operator
- We can use spread operator to **create shallow copy of array** (similar to Object.assign or for **adding two arrays together**
  - for example-
    ```jsx
    `const arr = [1, 2, 3, 4, 5];
     const newArr = [...arr, 7, 8, 9];
     console.log(newArr); //[1,2,3,4,5,6,7,8,9]
     console.log(...newArr); //1,2,3,4,5,6,7,8,9
    ```
- In the above example we can see that, we can expand the elements of array into new array and also when we spread that array we can get access to individual elements of that array

- We can also use spread operator on objects to merge objects together

  - For example:

  ```
  const obj1 = {
       name: "Neckvy",
       age: 22,
   };

  const obj2 = {
      dob: "08 / 05 / 2001",
   };

  const combinedObj = { ...obj1, ...obj2 };
  console.log(combinedObj);
  //{ name: 'Neckvy', age: 22, dob: '08 / 05 / 2001' }
  ```

- We can also use spread operator to create shallow copy of object and then if we change the values in the copy Object then also the Original obj will not be affected

  - for example

  ```
  const obj1 = {
    name: "Neckvy",
    age: 22,
  };

  const objCopy = { ...obj1 };
  objCopy.age = 25;

  console.log(obj1);//{ name: 'Neckvy', age: 22 }
  console.log(objCopy); //{ name: 'Neckvy', age: 25 }
  ```

### Rest Operator

- Rest operator is used to pack elements into the array (collecting multiple elements into one array)
- Rest pattern collects the elements that are unused after destructuring the array by packing them into array
- For example:
  ```
  const arr = [1, 2, 3, 4, 5];
  const [a, b, ...others] = arr;
  console.log(others); //[3,4,5] (rest)
  console.log(a); //1 (destructurig)
  ```

# Question-4

## What are default parameters in JavaScript functions? Give an example of a function that uses default parameters.

- Default parameters allows us to specify default values for a specific parameters in JS functions.
- If a user does not specify the value for that parameter then the default value which is written will be used
- For example

  ```jsx
  function greet(name, greetingMsg = "Hello") {
    return `${greetingMsg}. I am ${name}`;
  }

  console.log(greet("Neckvy")); //Hello. I am Neckvy
  //here Hello (default value) is being used because the user didn't specify
  //its value in the argument

  console.log(greet("Neckvy", "Hiii!!")); //Hiii!!. I am Neckvy
  ```

  - here we set default value for greetingMsg parameter to Hello
  - So if the user will not specify the value for greetingMsg parameter thn the default value “Hello” will be used

# Question-5

## Explain the purpose of HTTP status codes. Give examples of three common status codes and their meanings.

- HTTP status code helps the users understand what went wrong, basically communicating what went wrong when you made that request
- They are like small notes that help us understand if things went well or if something went wrong so that we can think of the next action to be performed accordingly
- Three common status codes are:

  - Status Code-200

    - Response- OK
    - Meaning- Request was successfull

  - Status Code-404

    - Response- Not Found
    - Meaning- Request resouce is not found

  - Status Code-500
    - Response- Internal Server Error
    - Meaning- Server encountered some error while fulfilling the request

# Question-6

## What is a callback function in JavaScript? Provide an example of a situation where a callback function is commonly used.

- A callback function is a function that is passed as an argument to another function and invoked within that function
- Callback Functions are used in situations where you want to perform some action after a certain task is completed.
- It is like a set of instructions that we give to the function informing the function to perform these instruction after it has completed its task
- For example:
  - Reading File using the fileSystem module and after the reading of the file is completed then specifying a callback function whose task is to either print the data if the data is read successfully from the file or give error message if it encounters an error
  - So when the action of reading File is finished then the callback function will be executed
  - This is a common use case of a callback function
  ```
  const fs = require("fs");
  fs.readFile(`${__dirname}/../question-1/data.json`, "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(data);
    }
  });
  ```

# Question-7

## Explain the logical AND (&&), OR (||), and NOT (!) operators in JavaScript. Provide examples of how each operator can be used.

1. Logical AND (`&&`)

   1. Logical AND operator returns true if both operands are **true**
   2. If any of the operands if false, it returns **false**

   ```jsx
   //The function returns true if the number is both even and positive;otherwise, it returns false.
   function isEvenAndPositive(number) {
     if (number % 2 === 0 && number >= 0) {
       return true;
     } else {
       return false;
     }
   }
   console.log(isEvenAndPositive(5)); //false
   console.log(isEvenAndPositive(2)); //true
   console.log(isEvenAndPositive(10)); //true
   console.log(isEvenAndPositive(15)); //false
   console.log(isEvenAndPositive(-8)); //false
   ```

2. Logical OR (`||`)

   1. The logical OR operator returns **true** if atleast one of the operand is **true**
   2. It returns **false** only if both operands are **false**

   ```jsx
   //The function returns true if the number is even or positive, if not both, it returns false
   function isEvenAndPositive(number) {
     if (number % 2 === 0 || number >= 0) {
       return true;
     } else {
       return false;
     }
   }
   console.log(isEvenAndPositive(5)); //true
   console.log(isEvenAndPositive(2)); //true
   console.log(isEvenAndPositive(10)); //true
   console.log(isEvenAndPositive(15)); //true
   console.log(isEvenAndPositive(-8)); //true
   ```

3. Logical NOT(`!`)

   1. Logical NOT operator will negate the value of its operand
   2. If the value of operand is **true**, it returns **false**
   3. If the value of operand is **false**, it returns **true**

   ```jsx
   const x = 5;
   console.log(!(x > 6)); //true (here the value of x not greater than 6, so the answer is false, but its negation returns true)
   console.log(!(x < 6)); //false(here the value of x is less than 6, so the answer is true, but its negation returns false)
   ```

# Question-9

## Explain the concept of the map() function in JavaScript. Provide an example of how the map() function can be used to transform an array.

- Map method takes an array, loops over it and applies the provided callback function to the current array element and **puts it into new array**
- **ITS MAPS THE VALUES OF ORIGINAL ARRAY TO A NEW ARRAY**
- Syntax- `array.map(callback(currentValue,index,array))`
- For example: Addition of each number in the array with 2

  ```jsx
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const squaredNumbersArray = numbers.map((number) => number + 2);

  console.log(squaredNumbersArray);
  //[ 3, 4,  5,  6,  7, 8, 9, 10, 11, 12 ]
  ```

# Question-10

## Explain the concept of the filter() function in JavaScript. Provide an example of how the filter() function can be used to extract specific elements from an array.

- Filter method is used to filter for elements in the original array which satisfy a certain condition
- **filter returns a new array** containing the array elements that passed a specific test condition
- Syntax- `array.filter(callback(currentValue, index, array))`
- For example: Filter out the numbers that are greater than 0
  ```
  const movements = [200, 450, -400, 300, -650, -130, 70, 1300];
  const deposit = movements.filter((mov) => mov > 0);
  console.log(movements); //[200, 450, -400, 300, -650, -130, 70, 1300]
  console.log(deposit); //[200, 450, 300, 70, 1300]
  ```

# Question-11

## Explain the concept of the reduce() function in JavaScript. Provide an example of how the reduce() function can be used to perform a calculation on an array.

- Reduce method Reduces all array elements to one single value (eg : adding all elements together)
- (FOR UNDERSTANDING: a snowball which keeps getting bigger as elements are added to it)
- N**_O NEW ARRAY IS CREATED BUT ONLY THE REDUCE VALUE_**
- REDUCE also loops over the array and calls the callback in each iteration
- Syntax- `array.reduce(callback(accumulator, currentValue, index, array))`
- In reduce method, we have access to accumulator(The value resulting from the previous call to callbackFunction),current element and the index
- For eg- reduce() function to calculate the sum of all the numbers in the array.
  ```
  const numbers = [200, 450, -400, 300, -650, -130, 70, 1300];
  const balance = numbers.reduce( (acc, curr, i, arr)=> acc + curr);
  console.log(balance); //1140
  ```

# Question-12

## Explain the concept of the forEach() function in JavaScript. Provide an example of how the forEach() function can be used to iterate over an array.

- The forEach() method calls a function (a callback function) once for each array element.
- It allows us to iterate over each element and perform a specific operation on each element
- For example- Calculate the square of every element and push it into new array

```jsx
const items = [1, 29, 47];
const copy = [];
items.forEach((item) => {
  copy.push(item * item);
});
console.log(copy); //[ 1, 841, 2209 ]
```

# Question-13

## Explain the concept of the some() function in JavaScript. Provide an example of how the some() function can be used to check if any element in an array satisfies a condition.

- some() method is used to check if at least one element in the array satisfies a given condition.
- It will return true, if at least one element in the array satisfies a given condition.
- For example: some() function to check if there is any deposit that is greater than 1500
  ```jsx
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  const anyDeposits = movements.some((mov) => mov > 1500);
  console.log(anyDeposits); //true
  ```

# Question-14

## Explain the concept of the every() function in JavaScript. Provide an example of how the every() function can be used to check if all elements in an array satisfy a condition.

- every() method checks if all elements in the array satisfy the condition.
- It will only return true if all the elements satisfy the given condition
- For example: every() function to check if all movements in the array are greater than 1500

```
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const anyDeposits = movements.every(mov => mov > 1500);
console.log(anyDeposits); //false (becaUSE ALL MOVEMENTS ARE NOT greater than 1500
```

# Question-15

## Explain the concept of the find() function in JavaScript. Provide an example of how the find() function can be used to search for a specific element in an array.

- We can use the find method to allows you to find the first element in an array that satisfies a specified condition.
- Find method also requires a callback which will then be called as the method loops over each element of the array
- For example: Find the number >3

```
const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find((number) => number > 3);

console.log(foundNumber); // 4 (returns 4 because while iterating 4 was the first element it encountered which was greater than 3
```
