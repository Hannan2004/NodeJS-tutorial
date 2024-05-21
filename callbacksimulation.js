// Function to compute the sum of two numbers asynchronously and pass the result to a callback

/*function sum(a, b, callback) {
    // Simulating an asynchronous operation with setTimeout
    setTimeout(() => {
        console.log('Callback function is executing after one second.');
        const result = a + b;
        callback(null, result); // Pass null for error and the result to the callback
    }, 1000); // Delay the operation for 1000 milliseconds (1 second)
}

// Usage of the sum function with a callback
sum(3, 5, (err, result) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Sum:', result);
});
*/

// Function to compute the sum of two numbers asynchronously and pass the result to a callback
function sum(a, b, callback) {
    console.log('Callback is still not executed.'); // Log a message indicating that the callback is still not executed
    // Simulating an asynchronous operation with setTimeout
    setTimeout(() => {
        console.log('Callback function is executing after four seconds.'); // Log a message indicating that the callback function is executing after four seconds
        const result = a + b;
        callback(null, result); // Pass null for error and the result to the callback
    }, 4000); // Delay the operation for 4000 milliseconds (4 seconds)
}

// Usage of the sum function with a callback
sum(3, 5, (err, result) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Sum:', result);
});


