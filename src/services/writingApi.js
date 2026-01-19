import apiClient from './apiClient';

/**
 * Writing Practice API Service
 * Handles AI-powered writing feedback
 */
const writingApi = {
  /**
   * Get writing task
   * @param {number} task - Task number (1 or 2)
   * @returns {Promise} Writing task data
   */
  getTask: async (task) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.get(`/writing/task/${task}`);
    return response.data;
  },

  /**
   * Submit writing for AI feedback
   * @param {Object} data - Writing submission
   * @param {string} data.content - Written content
   * @param {number} data.taskId - Task ID
   * @returns {Promise} AI feedback with band estimation
   */
  submitWriting: async (data) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.post('/writing/submit', data);
    return response.data;
  },
};

export default writingApi;
