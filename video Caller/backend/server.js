const express = require('express');
const http = require('http');
const WebSocket = require('ws');
require('dotenv').config();

// Initialize Express and HTTP Server
const app = express();
const server = http.createServer(app);

// Initialize WebSocket Server
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 5000;

// Simple health-check route for the backend
app.get('/', (req, res) => {
    res.send('WebRTC Signaling Server is running smoothly!');
});

// A Set to track all active connected peers
const connectedPeers = new Set();

// WebSocket Connection Logic
wss.on('connection', (ws) => {
    console.log('⚡ New peer connected via WebSocket');
    connectedPeers.add(ws);

    // Handle incoming messages from the frontend (offers, answers, ICE candidates)
    ws.on('message', (message) => {
        try {
            // Parse the incoming data
            const data = JSON.parse(message);
            console.log(`✉️ Received message type: ${data.type}`);

            // Broadcast the message to all OTHER connected peers
            connectedPeers.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(data));
                }
            });

        } catch (error) {
            console.error('❌ Failed to parse incoming WebSocket message:', error);
        }
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('🔌 Peer disconnected');
        connectedPeers.delete(ws);
    });

    // Handle socket errors
    ws.on('error', (error) => {
        console.error('⚠️ WebSocket error observed:', error);
    });
});

// Start the Server
server.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
