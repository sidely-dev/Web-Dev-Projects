// Inside frontend/js/signaling.js
const socket = new WebSocket('ws://localhost:5000');

socket.onopen = () => {
    console.log('Connected to the signaling server!');
};

// CATCH INBOUND TRAFFIC AND PASS IT TO MAIN.JS
socket.onmessage = (event) => {
    try {
        const parsedData = JSON.parse(event.data);
        
        // Forward the message to the handler function we just wrote in main.js
        if (typeof handleIncomingBackendSignal === 'function') {
            handleIncomingBackendSignal(parsedData);
        }
    } catch (error) {
        console.error('Error parsing incoming message packet:', error);
    }
};

// Send an offer or an ICE candidate to the backend
function sendSignal(data) {
    socket.send(JSON.stringify(data));
}
