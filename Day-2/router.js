const express = require('express');
const app = express();
const router = express.Router();

// Define middleware specific to this router
router.use((req, res, next) => {
  console.log('Request to /items path');
  next();
});

// Define routes
router.get('/', (req, res) => {
  res.send('List of items');
});

router.post('/', (req, res) => {
  res.send('Create a new item');
});

// Use the router for requests to /items
app.use('/items', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
