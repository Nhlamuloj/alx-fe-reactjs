// Import the Axios library
import axios from 'axios';


// Define the GitHub API base URL
const GITHUB_API_BASE_URL = 'https://api.github.com/users';

/**
 * Fetch user data from the GitHub API based on the provided username.
 * @param {string} username - The username to search for.
 * @returns {Promise<Object>} - A promise that resolves to the user data.
 */

const githubService = {
  // Function to search for users based on the GitHub Search API with query parameters
  searchUsers: async (queryParams) => {
    try {
      // Build the search query string based on the provided parameters
      const query = buildSearchQuery(queryParams);

      // Construct the full API URL with the query string
      const url = `https://api.github.com/search/users?q=${query}`;

      // Make the GET request to GitHub's search API
      const response = await axios.get(url);

      // Return the response data which contains the 'items' (list of users)
      return response.data;
    } catch (error) {
      console.error('Error fetching users from GitHub API:', error);
      throw error; // Rethrow the error for further handling in the component
    }
  },

  // Helper function to build the search query string
  buildSearchQuery: (params) => {
    let query = '';

    // Add location filter to the query string if provided
    if (params.location) {
      query += `+location:${params.location}`;
    }

    // Add minimum repository count filter if provided
    if (params.minRepos > 0) {
      query += `+repos:>${params.minRepos}`;
    }

    // Add followers filter if provided
    if (params.followers > 0) {
      query += `+followers:>${params.followers}`;
    }

    // Add sorting option if provided (e.g., by 'followers')
    if (params.sort) {
      query += `&sort=${params.sort}`;
    }

    // Add order option (ascending or descending) if provided
    if (params.order) {
      query += `&order=${params.order}`;
    }

    // Return the query string, remove the leading "+" if it exists
    return query.startsWith('+') ? query.slice(1) : query;
  },
};



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
