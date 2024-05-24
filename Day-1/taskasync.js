//Write an async function called fetchPostData that fetches post data from an API asynchronously using axios. The function should take a postId as an argument and return a promise that resolves with the post data if the request is successful. If an error occurs during the request, the promise should be rejected with an appropriate error message.

//Your task is to implement the fetchPostData function and demonstrate its usage by fetching post data with a given postId and logging it to the console if the request is successful. Handle any errors gracefully by logging them to the console.

//Provide the implementation of the fetchPostData function and demonstrate its usage with a sample postId.

const axios = require('axios');

// Async function to fetch post data from an API
async function fetchPostData(postId) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        return response.data; // Return the post data if request is successful
    } catch (error) {
        throw new Error(`Failed to fetch post data: ${error.message}`); // Throw an error if request fails
    }
}

// Usage of the async function to fetch post data
async function getPostData(postId) {
    try {
        const postData = await fetchPostData(postId);
        console.log('Post data:', postData);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function with a sample postId (e.g., postId = 1)
getPostData(2);
