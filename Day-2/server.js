const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const friends = [];
let nextId = 1;
const SECRET_KEY = 'fngfgndgdgngn';

// Middleware to verify JWT
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Access denied');

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send('Invalid token');
        req.user = user;
        next();
    });
}

// User login route to get JWT
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // For simplicity, we'll just check for a hardcoded username and password
    if (username === 'admin' && password === 'password') {
        const user = { name: username };
        const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(403).send('Invalid credentials');
    }
});

// Create friend
app.post('/friends', authenticateToken, (req, res) => {
    const { firstName, lastName, email, dateOfBirth } = req.body;
    const newFriend = { id: nextId++, firstName, lastName, email, dateOfBirth };
    friends.push(newFriend);
    res.status(201).json(newFriend);
});

// Retrieve friends
app.get('/friends', authenticateToken, (req, res) => {
    res.json(friends);
});

// Retrieve a single friend by ID
app.get('/friends/:id', authenticateToken, (req, res) => {
    const friend = friends.find(f => f.id === parseInt(req.params.id));
    if (!friend) return res.status(404).send('Friend not found');
    res.json(friend);
});

// Update friend
app.put('/friends/:id', authenticateToken, (req, res) => {
    const friend = friends.find(f => f.id === parseInt(req.params.id));
    if (!friend) return res.status(404).send('Friend not found');

    const { firstName, lastName, email, dateOfBirth } = req.body;
    friend.firstName = firstName || friend.firstName;
    friend.lastName = lastName || friend.lastName;
    friend.email = email || friend.email;
    friend.dateOfBirth = dateOfBirth || friend.dateOfBirth;
    res.json(friend);
});

// Delete friend
app.delete('/friends/:id', authenticateToken, (req, res) => {
    const index = friends.findIndex(f => f.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Friend not found');
    const deletedFriend = friends.splice(index, 1);
    res.json(deletedFriend);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
