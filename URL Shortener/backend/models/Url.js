const mongoose = require('mongoose');

// Define the blueprint tracking parameters for your links
const UrlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
    trim: true
  },
  shortCode: {
    type: String,
    required: true,
    unique: true, // Prevents duplicate keys in our system
    trim: true
  },
  clicks: {
    type: Number,
    required: true,
    default: 0 // Starts tracking analytics ledger from zero
  },
  createdAt: {
    type: Date,
    default: Date.now // Timestamp generated at point of database entry
  }
});

module.exports = mongoose.model('Url', UrlSchema);
