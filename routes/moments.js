const express = require('express');
const router  = express.Router();

// GET /api/moments/feed
router.get('/feed', (req, res) => {
  res.json({ message: 'Moments feed placeholder' });
});

// POST /api/moments/submit
router.post('/submit', (req, res) => {
  res.json({ message: 'Submit moment placeholder' });
});

// POST /api/moments/like
router.post('/like', (req, res) => {
  res.json({ message: 'Like moment placeholder' });
});

module.exports = router;
