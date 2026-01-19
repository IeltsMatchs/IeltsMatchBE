import axios from 'axios';

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token to requests
apiClient.interceptors.request.use(
  (config) => {
    const authStorage = localStorage.getItem('ielts-auth');
    if (authStorage) {
      const authData = JSON.parse(authStorage);
      if (authData?.user?.token) {
        config.headers.Authorization = `Bearer ${authData.user.token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      localStorage.removeItem('ielts-auth');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
