require('dotenv').config();
const express = require('express');
const path = require('path');
const generateImage = require('./generate.js');

const app = new express()
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/generate',async (req, res) => {
    const text = req.body.text_to_generate;
    
    try {
      const imagePath = await generateImage(text);
      res.send(imagePath);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Error generating image');
    }
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`)
})