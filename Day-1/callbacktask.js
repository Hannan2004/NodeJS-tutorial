//Write a function sum that takes two numbers as arguments and a callback 
//function. The function should compute the sum of the two numbers and 
//pass the result to the callback function.

// Function to compute the sum of two numbers and pass the result to a callback
function sum(a, b, callback) {
    const result = a + b;
    callback(null, result); // Pass null for error and the result to the callback
}

// Usage of the sum function with a callback
sum(3, 5, (err, result) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Sum:', result);
});
