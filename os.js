/* const os = require('os');

const platform = os.platform();
console.log('Platform:', platform);
*/
const os = require('os');

const totalMemory = os.totalmem();
console.log('Total Memory (bytes):', totalMemory);
