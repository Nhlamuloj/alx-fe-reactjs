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

// Function to fetch users with advanced search criteria
searchUsers: async (queryParams) => {
    try {
      const query = buildSearchQuery(queryParams);
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
      throw error;
    }
  },

  // Helper function to build the search query from queryParams
  buildSearchQuery; (params) => {
    let query = '';

    if (params.username) {
      query += `+login:${params.username}`;
    }

    if (params.location) {
      query += `+location:${params.location}`;
    }

    if (params.repos > 0) {
      query += `+repos:>${params.repos}`;
    }

    if (params.followers > 0) {
      query += `+followers:>${params.followers}`;
    }

    if (params.following > 0) {
      query += `+following:>${params.following}`;
    }

    if (params.type) {
      query += `+type:${params.type}`;  // Options: user, organization
    }

    if (params.sort) {
      query += `&sort=${params.sort}`;  // Options: stars, repos, joined
    }

    if (params.order) {
      query += `&order=${params.order}`;  // Options: asc, desc
    }

    // Clean up query string by removing any leading '+'
    return query.startsWith('+') ? query.slice(1) : query;
  }

// Export as default object (if needed)
export default { fetchUserData };
