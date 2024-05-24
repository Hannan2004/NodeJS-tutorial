const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const SECRET_KEY = 'fgnsgnfhzxfhgxfdsgs';

app.use(bodyParser.json());

const users = [{ username: 'admin', password: 'password' }];

// Middleware to check if the token is valid
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).send('Access denied');

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = user;
    next();
  });
}

// Login route to get JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
