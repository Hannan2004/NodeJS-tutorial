//read
/*
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});
*/

//write
/*
const fs = require('fs');

const content = 'Hello, world!';

fs.writeFile('example.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File has been written successfully.');
});
*/

//check file if exist
/*
const fs = require('fs');

const filePath = 'example.txt';

fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error('File does not exist:', err);
        return;
    }
    console.log('File exists.');
});
*/

// create a directory
/*
const fs = require('fs');

const dirPath = 'new_directory';

fs.mkdir(dirPath, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully.');
});
*/

//delete a file
/*
const fs = require('fs');

const filePath = 'example.txt';

fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File has been deleted successfully.');
});
*/
//appending 
const fs = require('fs');

const filePath = 'example.txt';
const additionalContent = '\nAppending new content!';

fs.appendFile(filePath, additionalContent, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Content has been appended to the file.');
});
