import apiClient from './apiClient';

/**
 * Match API Service
 * Handles intelligent matching algorithm
 */
const matchApi = {
  /**
   * Get top matches for current user
   * @returns {Promise} Array of top 3 matches
   */
  getMatches: async () => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.get('/match');
    return response.data;
  },

  /**
   * Create a study session with a matched partner
   * @param {string} partnerId - ID of the matched partner
   * @returns {Promise} Study room data
   */
  createStudySession: async (partnerId) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.post('/match/session', { partnerId });
    return response.data;
  },
};

export default matchApi;
