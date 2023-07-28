// Question 2:
// Rewrite the following code snippet using async/await syntax to make it more readable and maintainable:

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() < 0.5) {
//         resolve("Data received");
//       } else {
//         reject("Error occurred");
//       }
//     }, 1000);
//   });
// }

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const r = Math.random();
  console.log(r);
  if (r < 0.5) {
    return "Data received";
  } else {
    return "Error Occurred";
  }
}

getData().then((data) => console.log(data));
