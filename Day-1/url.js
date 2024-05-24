const url = require('url');

const urlString = 'https://www.example.com/path/to/resource?param1=value1&param2=value2';

const parsedUrl = new URL(urlString);

console.log('Protocol:', parsedUrl.protocol);
console.log('Hostname:', parsedUrl.hostname);
console.log('Pathname:', parsedUrl.pathname);
console.log('Query Parameters:', parsedUrl.searchParams.toString());

