const express = require('express');
const router = express.Router();

// Sign Up (Placeholder)
router.post('/signup', (req, res) => {
    res.json({ message: 'User signed up' });
});

// Log In (Placeholder)
router.post('/login', (req, res) => {
    res.json({ message: 'User logged in' });
});

// Get User Info (Placeholder)
router.get('/:id', (req, res) => {
    res.json({ message: `User info for user ${req.params.id}` });
});

module.exports = router;
