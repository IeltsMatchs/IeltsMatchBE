import apiClient from './apiClient';

/**
 * Forum API Service
 * Handles community forum with ElasticSearch
 */
const forumApi = {
  /**
   * Search posts using ElasticSearch
   * @param {Object} params - Search parameters
   * @param {string} params.query - Search query
   * @param {string} params.skill - Filter by skill
   * @param {number} params.targetBand - Filter by target band
   * @returns {Promise} Array of posts
   */
  searchPosts: async (params) => {
    // TODO: Connect to backend endpoint with ElasticSearch
    const response = await apiClient.get('/forum/search', { params });
    return response.data;
  },

  /**
   * Get all posts
   * @param {Object} params - Query parameters
   * @returns {Promise} Array of posts
   */
  getPosts: async (params) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.get('/forum/posts', { params });
    return response.data;
  },

  /**
   * Create a new post
   * @param {Object} postData - Post data
   * @returns {Promise} Created post
   */
  createPost: async (postData) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.post('/forum/posts', postData);
    return response.data;
  },

  /**
   * Get post by ID
   * @param {string} postId - Post ID
   * @returns {Promise} Post data
   */
  getPost: async (postId) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.get(`/forum/posts/${postId}`);
    return response.data;
  },
};

export default forumApi;
