const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const generateCode = require('../utils/generateCode');

// POST /api/shorten - Creates a short URL
router.post('/', async (req, res) => {
  try {
    const { longUrl } = req.body;
    if (!longUrl) {
      return res.status(400).json({ error: 'Please provide a valid URL link!' });
    }

    let existingUrl = await Url.findOne({ longUrl });
    if (existingUrl) {
      return res.status(200).json(existingUrl);
    }

    const shortCode = generateCode();
    const newUrl = new Url({ longUrl, shortCode });
    await newUrl.save();

    res.status(201).json(newUrl);
  } catch (error) {
    console.error('❌ Error in url route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router; // This line exports the tool so server.js can use it!
