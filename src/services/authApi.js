import apiClient from './apiClient';

/**
 * Authentication API Service
 * Handles Google OAuth and user authentication
 */
const authApi = {
  /**
   * Google OAuth Login
   * @param {string} googleToken - Google OAuth token
   * @returns {Promise} User data with JWT token
   */
  googleLogin: async (googleToken) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.post('/auth/google', { token: googleToken });
    return response.data;
  },

  /**
   * Logout user
   * @returns {Promise}
   */
  logout: async () => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.post('/auth/logout');
    return response.data;
  },

  /**
   * Get current user profile
   * @returns {Promise} User profile data
   */
  getCurrentUser: async () => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.get('/auth/me');
    return response.data;
  },
};

export default authApi;
