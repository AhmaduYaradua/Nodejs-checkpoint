import http from "node:http";

// Creating a server
let server = http.createServer((request, response) => {
  console.log(request);

  response.end("<h1>Hello Node!!!!</h1>\n");
});

// Listening to server
server.listen(3000, () => {
  console.log("listening to server");
});
