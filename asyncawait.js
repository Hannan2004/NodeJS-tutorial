// Simulated function to fetch user data from an API asynchronously
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = { id: userId, username: 'john_doe', email: 'john@example.com' };
            resolve(userData);
        }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
    });
}

// Async function to fetch user data and log it to the console
async function getUserData(userId) {
    try {
        const userData = await fetchUserData(userId);
        console.log('User data:', userData);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the async function to fetch user data
getUserData(123);
