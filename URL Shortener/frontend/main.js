// 1. Target all the interactive HTML items we need to control
const shortenForm = document.getElementById('shortenForm');
const longUrlInput = document.getElementById('longUrlInput');
const resultContainer = document.getElementById('resultContainer');
const shortUrlOutput = document.getElementById('shortUrlOutput');
const copyBtn = document.getElementById('copyBtn');
const successToast = document.getElementById('successToast');

// 2. Define where our backend application service is listening
const BACKEND_URL = 'http://localhost:5000';

// ==========================================
// EVENT LISTENER: Form Submission Intercept
// ==========================================
shortenForm.addEventListener('submit', async (event) => {
  // Prevent standard browser refreshing actions when clicking a submit button
  event.preventDefault(); 
  
  const originalUrl = longUrlInput.value;

  try {
    // Fire a network post packet directly to our backend server URL route handler
    const response = await fetch(`${BACKEND_URL}/api/shorten`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Alert the translator middleware we are shipping JSON text strings
      },
      body: JSON.stringify({ longUrl: originalUrl }) // Turn our variable into string payloads
    });

    const data = await response.json();

    if (response.ok) {
      // Create our ultimate shortened path string to present to the user
      // Example: http://localhost:5000/aB34xY
      const completeShortLink = `${BACKEND_URL}/${data.shortCode}`;
      
      // Inject that text string inside our un-editable copy output field container box
      shortUrlOutput.value = completeShortLink;
      
      // Pull back the curtain by removing the CSS helper class '.hidden' style visibility rule
      resultContainer.classList.remove('hidden');
    } else {
      alert(data.error || 'Something went wrong creating your link shortcut.');
    }

  } catch (error) {
    console.error('Frontend Error context logs:', error);
    alert('Could not talk to the backend engine server. Make sure your node app is actively running!');
  }
});

// ==========================================
// EVENT LISTENER: Clipboard Copy Management
// ==========================================
copyBtn.addEventListener('click', () => {
  // Command the system clipboard container engine to accept the inner text value parameters
  navigator.clipboard.writeText(shortUrlOutput.value);
  
  // Show our friendly confirmation notice message string rule
  successToast.classList.remove('hidden');
  
  // Cleanly fade the visual notification note back out of view after 2.5 seconds
  setTimeout(() => {
    successToast.classList.add('hidden');
  }, 2500);
});
