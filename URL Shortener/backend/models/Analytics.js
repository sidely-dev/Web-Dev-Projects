const mongoose = require('mongoose');

// ==========================================
// THE METRICS SCHEMA (The Click Record Template)
// ==========================================
// This creates a separate filing system in MongoDB specifically for analytics.
const analyticsSchema = new mongoose.Schema({
  // 1. The short code that was clicked (links this log directly to a specific URL document)
  shortCode: {
    type: String,
    required: true,
    index: true // Indexed so your metrics dashboard can find all click records instantly
  },
  
  // 2. The web browser used (e.g., Chrome, Safari, Firefox)
  browser: {
    type: String,
    default: 'Unknown Browser'
  },
  
  // 3. The operating system running (e.g., Windows, Mac, iOS, Android)
  operatingSystem: {
    type: String,
    default: 'Unknown OS'
  },
  
  // 4. The exact time the person clicked the link
  clickedAt: {
    type: Date,
    default: Date.now
  }
});

// Export this blueprint so our traffic redirect file can create new rows on the fly
module.exports = mongoose.model('Analytics', analyticsSchema);
