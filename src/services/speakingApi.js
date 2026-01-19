import apiClient from './apiClient';

/**
 * Speaking Practice API Service
 * Handles AI-powered speaking practice
 */
const speakingApi = {
  /**
   * Get speaking question by part
   * @param {number} part - Speaking part (1, 2, or 3)
   * @returns {Promise} Question data
   */
  getQuestion: async (part) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.get(`/speaking/question/${part}`);
    return response.data;
  },

  /**
   * Submit speaking recording for AI feedback
   * @param {FormData} formData - Audio file and metadata
   * @returns {Promise} AI feedback with band estimation
   */
  submitRecording: async (formData) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.post('/speaking/submit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

export default speakingApi;
