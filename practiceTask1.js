//Make changes in index-with-require.js to greet the user depending on the time of the day.

const http = require('http');
const { getDate } = require('./today'); 

const hostname = '127.0.0.1';
const port = 3000; 

function getGreeting() {
    const dateVal = new Date();
    const currentTime = dateVal.getHours();
    let greeting = "";

    if (currentTime < 12) {
        greeting = "Good morning";
    } else if (currentTime >= 12 && currentTime < 17) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    return greeting;
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const greeting = getGreeting();
    const currentTime = getDate(); 
    const htmlResponse = `
        <html>
        <head>
            <title>Greeting Page</title>
        </head>
        <body>
            <h1>${greeting}, the current date and time in India is: ${currentTime}</h1>
        </body>
        </html>
    `;
    res.end(htmlResponse);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
