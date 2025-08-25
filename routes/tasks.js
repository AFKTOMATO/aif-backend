const express = require('express');
const router  = express.Router();

// GET /api/tasks/videos
router.get('/videos', (req, res) => {
  res.json({ message: 'Video tasks placeholder' });
});

// POST /api/tasks/watch
router.post('/watch', (req, res) => {
  res.json({ message: 'Watch video placeholder' });
});

// GET /api/tasks/progress
router.get('/progress', (req, res) => {
  res.json({ message: 'Task progress placeholder' });
});

module.exports = router;
