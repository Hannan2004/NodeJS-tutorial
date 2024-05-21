// importing individual functions
// const {map, filter} = require('lodash');

//importing the entire library
/*
const _ = require('lodash');
//map to transform array elements
const numbers = [1, 2, 3, 4, 5];

// Double each element of the array
const doubledNumbers = _.map(numbers, (num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
*/

/*
const _ = require('lodash');

const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 20 },
];

// Group students by age
const groupedStudents = _.groupBy(students, 'age');

console.log(groupedStudents);

*/
const _ = require('lodash');

// Function to be debounced
function saveChanges() {
    console.log('Changes saved.');
}

// Debounce the function to prevent rapid calls
const debouncedSave = _.debounce(saveChanges, 4000); // Call saveChanges at most once per 1000ms (1 second)

// Simulate rapid function calls (e.g., user typing)
for (let i = 0; i < 5; i++) {
    debouncedSave();
}
