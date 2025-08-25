// Example for routes/user.js
const express = require('express');
const router = express.Router();

// GET /api/user/profile
router.get('/profile', (req, res) => {
  res.json({ message: 'Profile endpoint placeholder' });
});

module.exports = router;
