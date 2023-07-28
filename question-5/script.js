// Question 5:
// Explain the purpose of HTTP status codes. Give examples of three common status codes and their meanings.

// Practical Task 5:
// Write a JavaScript function called handleError that takes an HTTP status code as an argument and logs a corresponding error message. Implement the function to handle at least three different status codes. Test the function with different status codes to verify its behavior.

function handleError(statusCode) {
  switch (statusCode) {
    case 200:
      console.log("Status code: 200. \nResponse: OK");
      console.log("Meaning: Request is Succesful\n");
      break;

    case 201:
      console.log("Status code: 201. \nResponse: Created");
      console.log(
        "Meaning: Request is completed and your resource is created\n"
      );
      break;

    case 204:
      console.log("Status code: 204. \nResponse: No Content");
      console.log(
        "Meaning: Request is completed and there is no content to send in the response\n  "
      );
      break;

    case 400:
      console.log("Status code: 400. \nResponse: Bad Request");
      console.log(
        "Meaning: Server is unable to understand the request due to incorrect syntax maybe\n"
      );
      break;

    case 401:
      console.log("Status code: 401. \nResponse: Unauthorized");
      console.log(
        "Meaning: Client is not authorized to access the requested resource due to invalid credentials\n"
      );
      break;

    case 403:
      console.log("Status code: 403. \nResponse: Forbidden");
      console.log(
        "Meaning: Client is authorized but does not have access rights to perform the requested action\n"
      );
      break;

    case 404:
      console.log("Status code: 404. \nResponse: Not Found");
      console.log("Meaning: Requested resource is not found\n");
      break;

    case 500:
      console.log("Status code: 500. \nResponse: Internal Server Error");
      console.log(
        "Meaning: Server encountered some error while fulfilling the request\n"
      );
      break;
  }
}

handleError(200);
handleError(400);
handleError(404);
handleError(500);
handleError(403);
