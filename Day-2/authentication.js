const express = require('express');
const app = express();
const port = 3000;

const username = 'admin';
const password = 'password';

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello and welcome to my first express server !!!")
})
app.post('/login', (req,res) => {
    const { username:reqUsername, password: reqPassword } = req.body;
    if (reqUsername === username && reqPassword === password) {
        res.send('You are sucessfully logged in');
    } else {
        res.status(401).send('Authentication Failed');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});