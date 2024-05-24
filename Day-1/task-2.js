//Your task is to create an HTTP server that responds with dynamic content 
//containing information about the students along with the current date and time. The
//server should respond with a JSON object containing each student's name, age, 
//description, as well as the current date and time.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const students = [
  { name: 'Alice', age: 20, description: 'Passionate about web development' },
  { name: 'Bob', age: 22, description: 'Enjoys building mobile apps' },
  { name: 'Charlie', age: 21, description: 'Interested in data science' }
];

// Function to generate current date and time
function getCurrentDateTime() {
  const now = new Date();
  return now.toISOString(); // Returns date and time in ISO format
}

const server = http.createServer((req, res) => {
  // Setting response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  // Combining student data and current date and time into a single JSON object
  const responseData = {
    students: students,
    currentDateTime: getCurrentDateTime()
  };

  // Sending JSON response
  res.end(JSON.stringify(responseData));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
