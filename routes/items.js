const express = require('express');
const router = express.Router();

// Get All Items (Placeholder)
router.get('/', (req, res) => {
    res.json({ message: 'All items retrieved' });
});

// Get Single Item (Placeholder)
router.get('/:id', (req, res) => {
    res.json({ message: `Item details for item ${req.params.id}` });
});

module.exports = router;
