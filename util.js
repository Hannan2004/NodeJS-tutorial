
/*const util = require('util');

const name = 'John';
const age = 30;

const formattedString = util.format('Name: %s, Age: %d', name, age);
console.log(formattedString);
*/
/* the below code snippet is used to convert callback based function to promise based function
this allow us to use asynchronous operation with modern async/await syntax instead of traditional callback patterns

const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);

async function readExampleFile() {
    try {
        const data = await readFileAsync('example.txt', 'utf8');
        console.log('File content:', data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readExampleFile();
