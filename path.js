/* const path = require('path');

const dir = __dirname;
const filename = 'example.txt';

const fullPath = path.join(dir, filename);
console.log(fullPath);

*/
const path = require('path');

const filePath = '/path/to/file/example.txt';
const fileExtension = path.extname(filePath);
console.log(fileExtension);

