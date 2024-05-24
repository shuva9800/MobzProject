const express = require('express');
const router = express.Router();

// Middleware specific to this router
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Define the users route
router.get('/', (req, res) => {
  res.send('User List');
});

// Another route in the users router
router.get('/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
