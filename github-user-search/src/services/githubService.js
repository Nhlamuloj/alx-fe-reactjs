// Import the Axios library
import axios from 'axios';

// Define the GitHub API base URL
const GITHUB_API_BASE_URL = 'https://api.github.com/users';

/**
 * Fetch user data from the GitHub API based on the provided username.
 * @param {string} username - The username to search for.
 * @returns {Promise<Object>} - A promise that resolves to the user data.
 */
export const fetchUserData = async (username) => {
    try {
        // Construct the API endpoint URL
        const url = `${GITHUB_API_BASE_URL}/${username}`;

        // Make the GET request using Axios
        const response = await axios.get(url);

        // Return the user data from the API response
        return response.data;
    } catch (error) {
        // Handle errors (e.g., user not found or network issues)
        console.error('Error fetching user data:', error);
        throw error;
    }
};

// Export as default object (if needed)
export default { fetchUserData };
