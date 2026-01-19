/**
 * Ant Design Theme Configuration
 * Customizes Ant Design components to match our design system
 */
export const antdTheme = {
  token: {
    // Primary Colors
    colorPrimary: '#6366f1',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    colorInfo: '#3b82f6',
    
    // Typography
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 16,
    fontSizeHeading1: 36,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 18,
    
    // Border Radius
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusSM: 6,
    
    // Spacing
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    paddingXS: 8,
    margin: 16,
    marginLG: 24,
    marginSM: 12,
    marginXS: 8,
    
    // Box Shadow
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    boxShadowSecondary: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    
    // Motion
    motionDurationSlow: '0.35s',
    motionDurationMid: '0.25s',
    motionDurationFast: '0.15s',
  },
  
  components: {
    // Button
    Button: {
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      fontWeight: 500,
      primaryShadow: '0 2px 4px rgba(99, 102, 241, 0.2)',
    },
    
    // Input
    Input: {
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      paddingBlock: 8,
      paddingInline: 12,
    },
    
    // Card
    Card: {
      borderRadiusLG: 16,
      paddingLG: 24,
      boxShadowTertiary: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    
    // Select
    Select: {
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
    },
    
    // Modal
    Modal: {
      borderRadiusLG: 16,
      paddingLG: 24,
    },
    
    // Message
    Message: {
      borderRadiusLG: 12,
    },
    
    // Progress
    Progress: {
      defaultColor: '#6366f1',
    },
  },
};
