// Question 1:
// Write a function called fetchData that uses the Fetch API to retrieve data from a third-party API endpoint: https://localhost:8000/data. The function should return a Promise that resolves with the parsed JSON response.

// Note: Create a server on 8000 port before writing below js which could return json

// Practical Task 1:
// Implement the fetchData function and use it to fetch data from the provided API endpoint. Log the retrieved data to the console.

const express = require("express");
const data = require("./data.json");

const app = express();
const port = 3000;

app.get("/data", (req, res) => {
  res.status(200).json({
    status: "Success",
    data,
  });
});

async function fetchData() {
  await fetch(`http://localhost:3000/data`)
    .then((res) => res.json())
    .then((data) => {
      console.log("JSON data here");
      console.log(data);
    });
}

app.listen(port, () => {
  console.log(`Listening to server on port ${port}`);
});

fetchData();
