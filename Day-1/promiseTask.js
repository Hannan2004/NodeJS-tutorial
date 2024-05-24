//Write a Node.js program that fetches user data and posts from a simulated API 
//sequentially using promises. Use the provided fetchUserData and 
//fetchUserPosts functions to simulate the API requests.

// Function to simulate fetching user data from an API
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous API request
        setTimeout(() => {
            const userData = { id: userId, username: 'john_doe', email: 'john@example.com' };
            // Resolve the promise with the user data
            resolve(userData);
            // Reject the promise if user data cannot be fetched
            reject(new Error('Failed to fetch user data'));
        }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
    });
}

// Function to simulate fetching user posts from an API
function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous API request
        setTimeout(() => {
            const userPosts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
            // Resolve the promisse with the user posts
            resolve(userPosts);
            // Reject the promise if user posts cannot be fetched
            reject(new Error('Failed to fetch user posts'));
        }, 1500); // Simulating a delay of 1500 milliseconds (1.5 seconds)
    });
}

// Usage of promises to fetch user data and posts sequentially
fetchUserData(123)
    .then((userData) => {
        console.log('User data:', userData);
        // After fetching user data, fetch user posts
        return fetchUserPosts(userData.id);
    })
    .then((userPosts) => {
        console.log('User posts:', userPosts);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
