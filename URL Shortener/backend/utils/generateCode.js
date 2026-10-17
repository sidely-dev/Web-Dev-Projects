// ==========================================
// THE RANDOM CODE ENGINE
// ==========================================
function generateCode() {
  // 1. A pool of characters to pull from (capital letters, lowercase letters, and numbers)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  // 2. We want our short codes to be 6 characters long
  const codeLength = 6;
  
  let result = '';

  // 3. A loop that runs 6 times to grab 6 random characters from our pool
  for (let i = 0; i < codeLength; i++) {
    // Pick a random position number between 0 and the length of our characters pool
    const randomIndex = Math.floor(Math.random() * characters.length);
    
    // Grab the letter at that random position and glue it to our result string
    result += characters.charAt(randomIndex);
  }

  // 4. Send the finished 6-character code back to whatever file asked for it
  return result;
}

// ==========================================
// EXPORT THE TOOL
// ==========================================
// We export this function so our routing files can import it and use it on command.
module.exports = generateCode;
