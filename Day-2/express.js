const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT

app.use(express.json());

app.get('/', (req,res) => {
    res.send("hello this is my web server")
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})