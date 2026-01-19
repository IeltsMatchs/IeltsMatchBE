import { create } from 'zustand';

/**
 * Authentication Store
 * Manages user authentication state and profile data
 * Automatically syncs with localStorage
 */

// Helper to load from localStorage
const loadAuthState = () => {
  try {
    const stored = localStorage.getItem('ielts-auth');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

// Helper to save to localStorage
const saveAuthState = (state) => {
  try {
    localStorage.setItem('ielts-auth', JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save auth state:', error);
  }
};

const useAuthStore = create((set) => {
  // Load initial state from localStorage
  const initialState = loadAuthState() || {
    user: null,
    isAuthenticated: false,
    profileCompleted: false,
  };

  return {
    // State
    ...initialState,

    // Actions
    setUser: (user) => {
      const newState = {
        user,
        isAuthenticated: true,
        profileCompleted: user?.profileCompleted || false,
      };
      set(newState);
      saveAuthState(newState);
    },

    updateProfile: (profileData) =>
      set((state) => {
        const newState = {
          user: { ...state.user, ...profileData },
          isAuthenticated: state.isAuthenticated,
          profileCompleted: true,
        };
        saveAuthState(newState);
        return newState;
      }),

    logout: () => {
      const newState = {
        user: null,
        isAuthenticated: false,
        profileCompleted: false,
      };
      set(newState);
      localStorage.removeItem('ielts-auth');
    },
  };
});

export default useAuthStore;
