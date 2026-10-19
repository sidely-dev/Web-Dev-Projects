/**
 * =========================================================================
 * 🚀 P2P VIDEO CALLER ENGINE - CORE APPLICATION INTERFACE (main.js)
 * =========================================================================
 * 
 * PURPOSE:
 * This script acts as the operational "brain" of your frontend. It captures 
 * interactions from your modernized dashboard UI HTML elements (buttons, inputs) 
 * and orchestrates communication with your backend WebRTC signaling system.
 * 
 * THE CORE WORKFLOW:
 * 1. Grab visual document hooks from your dashboard template (DOM elements).
 * 2. Configure standard event listeners to detect user clicks and input entry.
 * 3. Handle data streams to dynamically register unique Room ID endpoints.
 * 4. Coordinate lifecycle payloads (Offers/Answers) with your WebSockets pipeline.
 */

// =========================================================================
// 🎛️ SECTION 1: GLOBAL UI INTERFACE ELEMENT HOOKS (DOM SELECTORS)
// =========================================================================
// These constants extract your physical HTML objects into the runtime workspace 
// so JavaScript can capture clicks, read typed values, or toggle active visual states.

// 1A. The Connection Panel Targets
// (Note: If your modern dashboard does not have these precise input/button IDs yet,
// you can insert them into your layout to gain administrative room controls)
const roomIdInputField = document.getElementById('room-id-input');
const joinRoomButton     = document.getElementById('join-btn');
const leaveRoomButton    = document.getElementById('disconnect-btn');

// 1B. Audio-Visual Interface Controls
// These map to your modern floating actions tray components (mute, call, drop)
const micControlButton   = document.querySelector('.control-btn:nth-child(1)');
const dropCallButton     = document.querySelector('.control-btn.danger-btn');
const makeCallButton     = document.querySelector('.control-btn.action-btn');

// =========================================================================
// 📨 SECTION 2: WEB SOCKET TRANSACTION EMITTERS (SIGNAL ROUTING)
// =========================================================================

/**
 * Dispatches formal coordination envelopes to the active Signaling Backend.
 * @param {string} roomAction - The context identifier (e.g., 'join-room', 'leave-room')
 * @param {string} targetRoomId - The unique alphanumeric space token 
 */
function transmitRoomSignal(roomAction, targetRoomId) {
    // Structural Payload Design: WebSockets inherently stream plain text.
    // We structure our operational metadata inside a standardized JavaScript object.
    const signalPayload = {
        type: roomAction,       // Informs the server what operation is happening
        roomId: targetRoomId,   // Directs the server where to route the transmission
        timestamp: Date.now()   // Tracks creation order to avoid stream confusion
    };

    // Safety Assertion: Only attempt transmission if the socket is alive and active
    if (socket && socket.readyState === WebSocket.OPEN) {
        console.log(`📡 [OUTBOUND] Dispatching transaction: "${roomAction}" to Room: ${targetRoomId}`);
        
        // JSON.stringify() flattens our complex object layout into a clean raw string 
        // that can travel across standard network network pipes safely.
        socket.send(JSON.stringify(signalPayload));
    } else {
        console.error('❌ [ERROR] Wire transmission blocked. Signaling socket is offline.');
    }
}

// =========================================================================
// ⚡ SECTION 3: INTERACTIVE USER EVENT LISTENERS (UI TRIGGERS)
// =========================================================================

// 3A. The "Join Room" Operations Pipeline
if (joinRoomButton) {
    joinRoomButton.addEventListener('click', () => {
        // Extract the user-typed string and strip out accidental whitespace padding
        const activeRoomId = roomIdInputField ? roomIdInputField.value.trim() : '';

        // Validation Check: Prevent sending blank room parameters to the server
        if (!activeRoomId) {
            alert('⚠️ Operation Denied: Please enter a valid Room ID before connecting.');
            return;
        }

        console.log(`🔗 UI Interaction: User requested access to space [${activeRoomId}]`);
        
        // Execute the transmission out to the backend signaling engine
        transmitRoomSignal('join-room', activeRoomId);
        
        // UX Enhancement: Visual feedback indicating connection state is processing
        joinRoomButton.textContent = 'Connecting...';
        joinRoomButton.disabled = true;
    });
}

// 3B. The "Leave/Disconnect" Operations Pipeline
if (leaveRoomButton) {
    leaveRoomButton.addEventListener('click', () => {
        const activeRoomId = roomIdInputField ? roomIdInputField.value.trim() : 'unknown';
        
        console.log(`🔌 UI Interaction: Terminating active session for space [${activeRoomId}]`);
        
        // Signal the server that this peer is leaving the signaling pool
        transmitRoomSignal('leave-room', activeRoomId);

        // UX Enhancement: Reset our action buttons back to their standard rest states
        if (joinRoomButton) {
            joinRoomButton.textContent = 'Join Room';
            joinRoomButton.disabled = false;
        }
        if (roomIdInputField) {
            roomIdInputField.value = ''; // Clean out the input field
        }
    });
}

// 3C. The Red Floating Decline Button Hook
if (dropCallButton) {
    dropCallButton.addEventListener('click', () => {
        console.log('🔴 UI Interaction: Decline button pressed. Triggering localized teardown.');
        // If your leave room button exists, simulate clicking it to reuse your logic
        if (leaveRoomButton) {
            leaveRoomButton.click();
        }
    });
}

// =========================================================================
// 📥 SECTION 4: INBOUND TRAFFIC HANDLING (SIGNAL INTERRECEPTION)
// =========================================================================
// While signaling.js establishes your connection, main.js needs to catch 
// messages routed back from the server and update your view layer.

/**
 * Processes structured packets forwarded by the Node.js signaling cluster.
 * @param {Object} parsedMessage - The incoming JSON data payload matrix
 */
function handleIncomingBackendSignal(parsedMessage) {
    const { type, roomId } = parsedMessage;

    switch (type) {
        case 'peer-joined':
            console.log(`👥 [INBOUND] Notice: A remote participant has entered room [${roomId}]`);
            // LEARNING NOTE: This hook is where you will initialize your RTCPeerConnection 
            // instance and generate your WebRTC "Offer" block inside your webrtc.js file later.
            break;

        case 'peer-left':
            console.log(`🔌 [INBOUND] Notice: Remote peer abandoned session space [${roomId}]`);
            // Clean up stream containers and tear down video rendering nodes here
            break;

        default:
            console.warn(`❓ [WARNING] Unrecognized internal signal format observed: "${type}"`);
    }
}

// Hook into the global window space or socket context to capture processing messages
// (This lets main.js read socket data parsing loops configured in signaling.js)
window.addEventListener('DOMContentLoaded', () => {
    console.log('🏁 WebRTC Application Layout initialized. Standby for network triggers.');
});
