const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// MIDDLEWARE (Process Incoming JSON Streams)
// ==========================================
app.use(express.json());

// ==========================================
// DATABASE CONNECTION (MongoDB)
// ==========================================
// We pull the string from process.env to keep keys safe out of GitHub
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/urlShortener')
  .then(() => console.log('✅ Connected to Database Ledger successfully.'))
  .catch((err) => console.error('❌ Database connection failure:', err));

// ==========================================
// ROUTING PATH MODULES (Mounting Endpoints)
// ==========================================
const urlRouter = require('./routes/url');
const redirectRouter = require('./routes/redirect');

app.use('/api/shorten', urlRouter); // Handles slug creation postings
app.use('/', redirectRouter);       // Handles global wildcard interceptions

// ==========================================
// SERVER INITIALIZATION
// ==========================================
app.listen(PORT, () => {
  console.log(`🚀 Application engine active on network port: ${PORT}`);
});
