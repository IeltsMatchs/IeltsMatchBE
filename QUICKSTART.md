# 🚀 Quick Start Guide

## Get Running in 2 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: **http://localhost:5173**

### 4. Test the App
1. Click "Continue with Google" (uses mock login)
2. Click "Find Partner" to see matches
3. Explore Speaking, Writing, and Forum pages

---

## Common Tasks

### Add a New Page
```bash
# 1. Create page component
src/pages/NewPage.jsx
src/pages/NewPage.css

# 2. Add route in src/App.jsx
<Route path="/new" element={<NewPage />} />

# 3. Add navigation in src/components/layout/Navbar.jsx
```

### Connect to Backend API
```javascript
// 1. Update .env
VITE_API_BASE_URL=https://your-api.com/api

// 2. In any service file (e.g., src/services/matchApi.js)
// Remove mock data and uncomment API call:
getMatches: async () => {
  const response = await apiClient.get('/match');
  return response.data;
}
```

### Add Mock Data
```javascript
// src/utils/mockData.js
export const mockNewFeature = {
  // Your mock data here
};
```

### Customize Theme
```javascript
// src/styles/theme.js
export const antdTheme = {
  token: {
    colorPrimary: '#your-color',
    // ... more customization
  }
};
```

### Add Global CSS Variable
```css
/* src/styles/global.css */
:root {
  --your-variable: value;
}
```

---

## Project Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## File Locations

```
Need to find...          Look in...
├─ Pages                 src/pages/
├─ Components            src/components/
├─ API Services          src/services/
├─ State Stores          src/store/
├─ Utilities             src/utils/
├─ Global Styles         src/styles/
└─ Mock Data             src/utils/mockData.js
```

---

## Quick Tips

### 🎨 Styling
- Use CSS variables from `global.css`
- Follow Ant Design theme in `theme.js`
- Component styles go in same folder as component

### 🔐 Authentication
- Check auth: `useAuthStore((state) => state.isAuthenticated)`
- Get user: `useAuthStore((state) => state.user)`
- Logout: `useAuthStore((state) => state.logout)()`

### 🌐 API Calls
- All services in `src/services/`
- Auto JWT token injection
- Auto 401 redirect to login

### 📱 Responsive
- Mobile breakpoint: `768px`
- Use `@media (max-width: 768px)`

---

## Troubleshooting

### Port Already in Use
```bash
# Change port in vite.config.js
export default defineConfig({
  server: { port: 3000 }
})
```

### Module Not Found
```bash
npm install
```

### Build Errors
```bash
npm run lint
# Fix any errors shown
```

---

## Next Steps

1. ✅ **Run the app** - See it in action
2. 📖 **Read README.md** - Understand the architecture
3. 📂 **Check PROJECT_STRUCTURE.md** - Learn file organization
4. 🔌 **Connect backend** - Follow API integration guide
5. 🎨 **Customize design** - Make it your own

---

**Need Help?**
- Check `README.md` for detailed docs
- Check `PROJECT_STRUCTURE.md` for architecture
- Check `IMPLEMENTATION_SUMMARY.md` for features

---

Happy Coding! 🎉
