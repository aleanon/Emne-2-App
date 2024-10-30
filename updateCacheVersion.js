const fs = require('fs');
const path = './src/service-worker.js'; // Adjust the path if needed

// Get the current date and time for a timestamp
const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');

// Read and update the CACHE_NAME line
fs.readFile(path, 'utf8', (err, data) => {
  if (err) throw err;

  // Replace CACHE_NAME version with timestamp
  const updatedData = data.replace(
    /const CACHE_NAME = "bakst-og-brygg-cache-v1.0.0-beta";/,
    `const CACHE_NAME = "bakst-og-brygg-cache-v1.0.0.${timestamp}-beta";`,
  );

  fs.writeFile(path, updatedData, 'utf8', (err) => {
    if (err) throw err;
    console.log('CACHE_NAME updated with new timestamp version.');
  });
});
