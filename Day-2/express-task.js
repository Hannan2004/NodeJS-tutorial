/* 
Task:
Create an Express server that responds with an HTML page containing styled content.

Requirements:

Create an Express server that listens on port 3000.
Set up a route that responds to a GET request to the root URL ("/").
For the root route, instead of sending plain text, the server should respond with an HTML page.
The HTML page should include:
A <title> tag with the text "Styled Web Page".
Styling for the <body> element:
Background color: lightgray.
Font family: Arial, sans-serif.
Text alignment: center.
A <h1> heading with the text "Welcome to My Styled Web Page".
Two paragraphs (<p> tags) with some information about Express and HTML.
Apply some additional styling to the paragraphs, such as font size and color.
Challenge:
Apply creativity and experiment with different CSS properties to enhance the visual appeal of your HTML page. You can explore additional tags and styling options to further customize the appearance of your web page.

Test your server by accessing it in a web browser. You should see a styled HTML page with the specified content.

Happy coding!
*/
const express = require('express');
const app = express();
const port = 3000

app.use(express.json());

app.get('/', (req,res) => {
    const htmlResponse = `
    <html>
    <head>
    <title>Styled Web Page</title>
    <style>
    body {
        background-color: lightgray;
        font-family: Arial, sans-serif;
        text-align: center;
    }
    h1 {
        color: navy;
    }
    p {
        font-size: 16px;
        color: darkblue;
    }
    </style>
    </head>
    <body>
    <h1>Welcome to My Styled Web Page</h1>
    <p>Express is a minimalist web framework for Node.js, designed for building web applications and APIs.</p>
    </body>
    </html>
    `
    res.send(htmlResponse);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})