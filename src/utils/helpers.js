/**
 * Utility Functions
 */

/**
 * Format date to relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  
  return date.toLocaleDateString();
};

/**
 * Calculate match score color
 */
export const getMatchScoreColor = (score) => {
  if (score >= 90) return '#52c41a'; // green
  if (score >= 80) return '#1890ff'; // blue
  if (score >= 70) return '#faad14'; // orange
  return '#ff4d4f'; // red
};

/**
 * Format band score
 */
export const formatBandScore = (score) => {
  return score.toFixed(1);
};

/**
 * Validate IELTS band score
 */
export const isValidBandScore = (score) => {
  return score >= 4.0 && score <= 9.0 && score % 0.5 === 0;
};

/**
 * Generate band score options for select
 */
export const generateBandOptions = () => {
  const options = [];
  for (let i = 4.0; i <= 9.0; i += 0.5) {
    options.push({
      label: formatBandScore(i),
      value: i,
    });
  }
  return options;
};

/**
 * Format time duration (seconds to MM:SS)
 */
export const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Debounce function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
