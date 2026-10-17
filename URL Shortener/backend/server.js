// ==========================================
// 1. GET SETTINGS (Environment Setup)
// ==========================================
// This opens your secret `.env` file and reads your database keys and settings.
// It MUST stay at the very top so the rest of the file can use those settings.
require('dotenv').config(); 

// ==========================================
// 2. IMPORT TOOLS (Bringing in Packages)
// ==========================================
// Pulls in the 'Express' package to help us handle web traffic and links easily.
const express = require('express');

// Pulls in 'Mongoose' to help our code talk to our MongoDB database smoothly.
const mongoose = require('mongoose');

// ==========================================
// 3. START THE APPLICATION (The Server App)
// ==========================================
// This creates your main server application object. Think of it as starting your car's engine.
const app = express();

// Tells the app what "channel" or "door" (port) to look at on your computer. 
// It looks for a port number in your settings, or defaults to door 5000.
const PORT = process.env.PORT || 5000;

// ==========================================
// 4. THE SECURITY GUARD / TRANSLATOR
// ==========================================
// Web traffic sends data as plain raw text. This line acts like a translator.
// It intercepts incoming data, reads the JSON format, and turns it into normal JS objects 
// so you can use things like `req.body` in your routes without crashing.
app.use(express.json());

// ==========================================
// 5. CONNECT TO DATABASE (The Storage Room)
// ==========================================
// This hooks up your server to MongoDB so you can actually save data.
// If your production link (MONGO_URI) is missing, it automatically falls back to your local computer's test database.
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/urlShortener')
  .then(() => console.log('✅ Connected to Database Ledger successfully.')) // Runs if the link works
  .catch((err) => console.error('❌ Database connection failure:', err));     // Runs if the database is turned off or broken

// ==========================================
// 6. ROAD SIGNS / ROUTING (Where does traffic go?)
// ==========================================
// Step 6A: Fetch your specific link-shortening files from your other folders.
const urlRouter = require('./routes/url');
const redirectRouter = require('./routes/redirect');

const cors = require('cors');
app.use(cors()); // Place this right ABOVE app.use(express.json());


// Step 6B: Map out the paths like a street map.
// If a user goes to "://mysite.com", send them to the urlRouter file to make a short link.
app.use('/api/shorten', urlRouter); 

// If a user types a short link like "://mysite.com", send them to the redirectRouter to find where to go.
// (This wildcard stays at the bottom so it doesn't accidentally steal traffic meant for '/api/shorten')
app.use('/', redirectRouter);       

// ==========================================
// 7. OPEN THE GATES (Turn On the Listener)
// ==========================================
// This officially opens the door (PORT) you chose in Step 3.
// Your server will now stay awake forever, listening out for people clicking links.
app.listen(PORT, () => {
  console.log(`🚀 Application engine active on network port: ${PORT}`);
});
