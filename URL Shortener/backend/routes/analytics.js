const express = require('express');
const router = express.Router();
const Analytics = require('../models/Analytics');

// GET /api/analytics/summary - Pulls data logs for dashboard charts
router.get('/summary', async (req, res) => {
  try {
    const totalClicks = await Analytics.countDocuments({});
    
    const browserStats = await Analytics.aggregate([
      { $group: { _id: "$browser", count: { $sum: 1 } } }
    ]);

    const osStats = await Analytics.aggregate([
      { $group: { _id: "$operatingSystem", count: { $sum: 1 } } }
    ]);

    res.status(200).json({ totalClicks, browsers: browserStats, operatingSystems: osStats });
  } catch (error) {
    console.error('❌ Error in analytics route:', error);
    res.status(500).json({ error: 'Failed to retrieve stats.' });
  }
});

module.exports = router; // This line exports the tool so server.js can use it!
