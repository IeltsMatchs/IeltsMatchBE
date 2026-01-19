import apiClient from './apiClient';

/**
 * Room API Service
 * Handles study room operations
 */
const roomApi = {
  /**
   * Get room details
   * @param {string} roomId - Room ID
   * @returns {Promise} Room data
   */
  getRoom: async (roomId) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.get(`/room/${roomId}`);
    return response.data;
  },

  /**
   * Join a study room
   * @param {string} roomId - Room ID
   * @returns {Promise} Room join data
   */
  joinRoom: async (roomId) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.post(`/room/${roomId}/join`);
    return response.data;
  },

  /**
   * End a study session
   * @param {string} roomId - Room ID
   * @returns {Promise}
   */
  endSession: async (roomId) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.post(`/room/${roomId}/end`);
    return response.data;
  },

  /**
   * Send chat message
   * @param {string} roomId - Room ID
   * @param {string} message - Chat message
   * @returns {Promise}
   */
  sendMessage: async (roomId, message) => {
    // TODO: Connect to backend endpoint
    const response = await apiClient.post(`/room/${roomId}/message`, { message });
    return response.data;
  },
};

export default roomApi;
