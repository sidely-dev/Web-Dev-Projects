const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const Analytics = require('../models/Analytics');

// GET /:shortCode - Bounces the user to the destination site
router.get('/:shortCode', async (req, res) => {
  try {
    const { shortCode } = req.params;
    const urlRecord = await Url.findOne({ shortCode });

    if (!urlRecord) {
      return res.status(404).send('<h1>🚫 Link Not Found!</h1>');
    }

    // Basic tracking analytics
    const userAgentString = req.headers['user-agent'] || '';
    let detectedBrowser = 'Other';
    let detectedOS = 'Other';

    if (userAgentString.includes('Firefox')) detectedBrowser = 'Firefox';
    else if (userAgentString.includes('Chrome')) detectedBrowser = 'Chrome';
    else if (userAgentString.includes('Safari')) detectedBrowser = 'Safari';

    if (userAgentString.includes('Windows')) detectedOS = 'Windows';
    else if (userAgentString.includes('Macintosh')) detectedOS = 'macOS';

    const clickLog = new Analytics({
      shortCode,
      browser: detectedBrowser,
      operatingSystem: detectedOS
    });
    await clickLog.save();

    return res.redirect(urlRecord.longUrl);
  } catch (error) {
    console.error('❌ Error in redirect route:', error);
    res.status(500).send('Something broke during lookup.');
  }
});

module.exports = router; // This line exports the tool so server.js can use it!
