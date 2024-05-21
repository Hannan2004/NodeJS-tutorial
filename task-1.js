//Your task is to create an HTTP server that responds with dynamic content 
//containing information about the students. The server should respond with a JSON 
//object containing each student's name, age, and a short description.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const students = [
  { name: 'Alice', age: 20, description: 'Passionate about web development' },
  { name: 'Bob', age: 22, description: 'Enjoys building mobile apps' },
  { name: 'Charlie', age: 21, description: 'Interested in data science' }
];

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(students));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
