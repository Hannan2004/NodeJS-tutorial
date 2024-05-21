const fs = require('fs');

// Asynchronous function to read a file
function readFileAsync(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null); // Pass error to callback
            return;
        }
        callback(null, data); // Pass data to callback
    });
}

// Usage of the readFileAsync function with a callback
readFileAsync('example.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});
