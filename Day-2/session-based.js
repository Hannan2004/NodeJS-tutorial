const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using https
}));

const users = [{ username: 'admin', password: 'password' }];

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    req.session.user = user;
    res.send('You are successfully logged in');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Protected route
app.get('/protected', isAuthenticated, (req, res) => {
  res.send('This is a protected route');
});

// Logout route
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.send('You have logged out');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
