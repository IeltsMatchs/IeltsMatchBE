
# 🎯 IELTS Study Match

A modern web application for IELTS students to find study partners, practice with AI, and connect with a community.

## 📋 Overview

IELTS Study Match is a React-based frontend application that helps IELTS students:
- **Find Perfect Study Partners** using intelligent matching algorithms
- **Practice Speaking & Writing** with AI-powered feedback
- **Join Live Study Sessions** with matched partners
- **Connect with Community** through forums and discussions

## 🛠️ Tech Stack

### Core
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### UI & Styling
- **Ant Design (antd)** - Component library
- **Framer Motion** - Animations
- **Custom CSS** - Design system with CSS variables

### State Management
- **Zustand** - Lightweight state management
- **Zustand Persist** - State persistence

### HTTP Client
- **Axios** - API integration (ready for backend)

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── layout/         # Layout components (Navbar, MainLayout, ProtectedRoute)
│   ├── match/          # Match-related components (MatchCard)
│   ├── profile/        # Profile components (ProfileForm)
│   ├── room/           # Study room components
│   ├── speaking/       # Speaking practice components
│   ├── writing/        # Writing practice components
│   ├── forum/          # Forum components
│   └── common/         # Shared components
├── pages/              # Page components
│   ├── LoginPage.jsx
│   ├── ProfilePage.jsx
│   ├── MatchPage.jsx
│   ├── StudyRoomPage.jsx
│   ├── SpeakingPage.jsx
│   ├── WritingPage.jsx
│   └── ForumPage.jsx
├── services/           # API service layer
│   ├── apiClient.js    # Axios instance with interceptors
│   ├── authApi.js
│   ├── profileApi.js
│   ├── matchApi.js
│   ├── roomApi.js
│   ├── speakingApi.js
│   ├── writingApi.js
│   └── forumApi.js
├── store/              # Zustand stores
│   ├── authStore.js    # Authentication state
│   └── matchStore.js   # Match & room state
├── utils/              # Utility functions
│   ├── helpers.js      # Helper functions
│   └── mockData.js     # Mock data for development
├── styles/             # Global styles
│   ├── global.css      # Global CSS with design system
│   └── theme.js        # Ant Design theme configuration
├── assets/             # Static assets
│   └── images/
├── App.jsx             # Main app component with routing
└── main.jsx            # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd c:/Users/aser/Desktop/Ielts
   ```

2. **Install dependencies** (already done)
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your API endpoints when backend is ready.

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview  # Preview production build
```

## 🎨 Design System

### Color Palette
- **Primary**: Soft blue/purple gradient (`#6366f1` → `#764ba2`)
- **Success**: `#10b981`
- **Warning**: `#f59e0b`
- **Error**: `#ef4444`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Sizes**: 12px - 36px (responsive scale)

### Spacing
- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px
- **2XL**: 48px

### Animations
- **Fast**: 150ms
- **Base**: 250ms
- **Slow**: 350ms

All animations use `ease` timing function for smooth transitions.

## 📱 Pages Overview

### 1. Login Page (`/login`)
- Google OAuth integration (placeholder ready)
- Animated gradient background
- Glassmorphism design

### 2. Profile Setup (`/profile`)
- Multi-step form
- Collects: bands, goals, preferences, availability
- Time availability grid

### 3. Match Page (`/match`) ⭐ Core Feature
- Find study partners button
- Top 3 matches display
- Match cards with:
  - Match score (0-100%)
  - Band similarity
  - Time overlap
  - Common availability
- Start study session action

### 4. Study Room (`/room/:roomId`)
- Video/voice placeholder (Zego SDK ready)
- Real-time chat
- Session timer
- Session controls

### 5. Speaking Practice (`/speaking`)
- Part selection (1/2/3)
- Question display
- Recording controls
- AI feedback:
  - Pronunciation score
  - Fluency score
  - Vocabulary score
  - Grammar score
  - Estimated band

### 6. Writing Practice (`/writing`)
- Task display
- Text editor with word count
- Submit for feedback
- AI feedback:
  - Task response score
  - Coherence score
  - Vocabulary score
  - Grammar score
  - Grammar highlights
  - Estimated band

### 7. Forum (`/forum`)
- Search posts (ElasticSearch ready)
- Filter by skill & target band
- Create new posts
- Post cards with metadata

## 🔌 API Integration

All API services are ready in `src/services/`. Each service has:
- Clear method signatures
- JSDoc documentation
- TODO comments for backend connection
- Mock data fallbacks

### Example: Connecting an API

```javascript
// src/services/matchApi.js
getMatches: async () => {
  // TODO: Connect to backend endpoint
  const response = await apiClient.get('/match');
  return response.data;
}
```

Simply uncomment the API call and remove mock data when backend is ready.

### API Client Features
- Automatic JWT token injection
- Global error handling
- 401 redirect to login
- Request/response interceptors

## 🎯 State Management

### Auth Store (`authStore.js`)
- User data
- Authentication status
- Profile completion status
- Persisted to localStorage

### Match Store (`matchStore.js`)
- Match results
- Current room
- Search status

## 🎭 Mock Data

Located in `src/utils/mockData.js`:
- Mock users
- Mock matches
- Mock speaking questions
- Mock writing tasks
- Mock forum posts
- Mock AI feedback

Use for development and testing before backend integration.

## 🔒 Protected Routes

- `/login` - Public (redirects if authenticated)
- `/profile` - Protected (no profile completion required)
- All other pages - Protected (requires authentication + profile completion)

## 🎨 UI/UX Features

### Animations
- Page transitions (fade in)
- Card hover effects (lift)
- Button hover effects
- Loading skeletons
- Pulse animations for recording
- Slide-in animations for lists

### Responsive Design
- Mobile-first approach
- Breakpoint: 768px
- Collapsible navigation
- Responsive grids

### Accessibility
- Semantic HTML
- ARIA labels (where needed)
- Keyboard navigation
- Focus states

## 🚧 Integration Checklist

When backend is ready:

- [ ] Update `.env` with real API URL
- [ ] Implement Google OAuth flow in `authApi.js`
- [ ] Connect all API endpoints
- [ ] Remove mock data fallbacks
- [ ] Integrate Zego Cloud SDK for video/voice
- [ ] Set up WebSocket for real-time chat
- [ ] Connect ElasticSearch for forum search
- [ ] Add error boundaries
- [ ] Implement proper loading states
- [ ] Add analytics tracking

## 📝 Code Quality

### Best Practices
- ✅ Functional components
- ✅ Clear component structure
- ✅ Reusable components
- ✅ Consistent naming conventions
- ✅ JSDoc documentation
- ✅ Clean separation of concerns
- ✅ No hardcoded values (use constants)

### Performance
- Code splitting ready (React Router)
- Lazy loading can be added
- Optimized re-renders with Zustand
- CSS animations (GPU accelerated)

## 🎓 Learning Resources

This codebase demonstrates:
- Modern React patterns (hooks, context)
- Clean architecture
- State management with Zustand
- API integration patterns
- Protected routing
- Form handling
- Animation techniques
- Responsive design
- Design systems

## 📄 License

This is a portfolio/educational project.

## 👨‍💻 Author

Built as a demonstration of modern React development practices.

---

**Note**: This is a frontend-only application. Backend APIs need to be implemented separately using the service layer as a guide.
>>>>>>> 1ad95b5 (First initial)
