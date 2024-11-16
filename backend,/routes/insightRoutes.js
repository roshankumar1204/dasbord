// backend/routes/insightRoutes.js
const express = require('express');
const router = express.Router();
const Insight = require('../models/Insight');

// GET all insights
router.get('/', async (req, res) => {
    try {
        const insights = await Insight.find({});
        res.json(insights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
