import apiClient from './apiClient';

/**
 * Profile API Service
 * Handles user profile creation and updates
 */
const profileApi = {
  /**
   * Update user profile with IELTS data
   * @param {Object} profileData - Profile information
   * @param {number} profileData.speakingBand - Current speaking band (4.0-9.0)
   * @param {number} profileData.writingBand - Current writing band (4.0-9.0)
   * @param {number} profileData.targetBand - Target band (4.0-9.0)
   * @param {string} profileData.practiceSkill - 'speaking' or 'writing'
   * @param {string} profileData.accentPreference - 'US', 'UK', or 'Any'
   * @param {Array} profileData.timeAvailability - Array of time slots
   * @returns {Promise} Updated profile data
   */
  updateProfile: async (profileData) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.put('/profile', profileData);
    return response.data;
  },

  /**
   * Get user profile
   * @returns {Promise} User profile data
   */
  getProfile: async () => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.get('/profile');
    return response.data;
  },
};

export default profileApi;
