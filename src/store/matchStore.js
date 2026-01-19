import { create } from 'zustand';

/**
 * Match Store
 * Manages matching results and study session state
 */
const useMatchStore = create((set) => ({
  // State
  matches: [],
  currentRoom: null,
  isSearching: false,

  // Actions
  setMatches: (matches) => set({ matches, isSearching: false }),

  startSearching: () => set({ isSearching: true }),

  setCurrentRoom: (room) => set({ currentRoom: room }),

  clearMatches: () => set({ matches: [], isSearching: false }),
}));

export default useMatchStore;
