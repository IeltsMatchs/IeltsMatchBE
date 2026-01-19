# 📂 IELTS Study Match - Project Structure

## Directory Tree

```
ielts-study-match/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, fonts, etc.
│   │   └── images/
│   │
│   ├── components/              # Reusable React components
│   │   ├── common/             # Shared components (buttons, inputs, etc.)
│   │   ├── forum/              # Forum-specific components
│   │   ├── layout/             # Layout components
│   │   │   ├── MainLayout.jsx      # Main app layout with navbar
│   │   │   ├── MainLayout.css
│   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   ├── Navbar.css
│   │   │   └── ProtectedRoute.jsx  # Route protection HOC
│   │   ├── match/              # Match-related components
│   │   │   ├── MatchCard.jsx       # Individual match card
│   │   │   └── MatchCard.css
│   │   ├── profile/            # Profile components
│   │   │   ├── ProfileForm.jsx     # Multi-step profile form
│   │   │   └── ProfileForm.css
│   │   ├── room/               # Study room components
│   │   ├── speaking/           # Speaking practice components
│   │   └── writing/            # Writing practice components
│   │
│   ├── pages/                   # Page-level components
│   │   ├── LoginPage.jsx           # Google OAuth login
│   │   ├── LoginPage.css
│   │   ├── ProfilePage.jsx         # Profile setup
│   │   ├── ProfilePage.css
│   │   ├── MatchPage.jsx           # Partner matching (CORE)
│   │   ├── MatchPage.css
│   │   ├── StudyRoomPage.jsx       # Live study session
│   │   ├── StudyRoomPage.css
│   │   ├── SpeakingPage.jsx        # AI speaking practice
│   │   ├── SpeakingPage.css
│   │   ├── WritingPage.jsx         # AI writing practice
│   │   ├── WritingPage.css
│   │   ├── ForumPage.jsx           # Community forum
│   │   └── ForumPage.css
│   │
│   ├── services/                # API service layer
│   │   ├── apiClient.js            # Axios instance + interceptors
│   │   ├── authApi.js              # Authentication endpoints
│   │   ├── profileApi.js           # Profile endpoints
│   │   ├── matchApi.js             # Matching endpoints
│   │   ├── roomApi.js              # Study room endpoints
│   │   ├── speakingApi.js          # Speaking practice endpoints
│   │   ├── writingApi.js           # Writing practice endpoints
│   │   └── forumApi.js             # Forum + ElasticSearch endpoints
│   │
│   ├── store/                   # State management (Zustand)
│   │   ├── authStore.js            # Auth state + localStorage sync
│   │   └── matchStore.js           # Match & room state
│   │
│   ├── styles/                  # Global styles
│   │   ├── global.css              # CSS variables + utilities
│   │   └── theme.js                # Ant Design theme config
│   │
│   ├── utils/                   # Utility functions
│   │   ├── helpers.js              # Helper functions
│   │   └── mockData.js             # Mock data for development
│   │
│   ├── App.jsx                  # Main app + routing
│   └── main.jsx                 # Entry point
│
├── .env.example                 # Environment variables template
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── PROJECT_STRUCTURE.md         # This file
```

## Key Files Explained

### 🎯 Entry Points
- **`index.html`** - HTML template
- **`src/main.jsx`** - React app mount point
- **`src/App.jsx`** - Routing + global providers

### 🎨 Styling
- **`src/styles/global.css`** - Design system (colors, spacing, animations)
- **`src/styles/theme.js`** - Ant Design customization
- **Component CSS files** - Component-specific styles

### 🔐 Authentication Flow
1. `LoginPage.jsx` → Google OAuth
2. `authStore.js` → Save user + token
3. `ProtectedRoute.jsx` → Check auth status
4. `ProfilePage.jsx` → Complete profile (if needed)
5. Redirect to `MatchPage.jsx`

### 🔄 State Management
- **`authStore.js`**
  - User data
  - Auth status
  - Profile completion
  - Persisted to `localStorage`

- **`matchStore.js`**
  - Match results
  - Current room
  - Search status
  - In-memory only

### 🌐 API Integration
All services follow this pattern:
```javascript
// src/services/exampleApi.js
import apiClient from './apiClient';

export default {
  methodName: async (params) => {
    // TODO: Connect to backend
    const response = await apiClient.get('/endpoint');
    return response.data;
  }
};
```

**`apiClient.js`** handles:
- Base URL configuration
- JWT token injection
- Error handling
- 401 redirects

### 📄 Pages Hierarchy

```
/ (root)
├── /login              [Public]
└── [Protected Routes]
    ├── /profile        [Auth only]
    └── [Profile Required]
        ├── /match      ⭐ Landing page
        ├── /room/:id   Study session
        ├── /speaking   AI practice
        ├── /writing    AI practice
        └── /forum      Community
```

## Component Patterns

### Page Component Structure
```jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import './PageName.css';

const PageName = () => {
  const [state, setState] = useState();

  return (
    <div className="page-name">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Content */}
        </motion.div>
      </div>
    </div>
  );
};

export default PageName;
```

### Reusable Component Structure
```jsx
import { Card } from 'antd';
import './ComponentName.css';

const ComponentName = ({ prop1, prop2, onAction }) => {
  return (
    <Card className="component-name">
      {/* Component content */}
    </Card>
  );
};

export default ComponentName;
```

## Naming Conventions

### Files
- **Components**: `PascalCase.jsx` (e.g., `MatchCard.jsx`)
- **Styles**: `PascalCase.css` (e.g., `MatchCard.css`)
- **Services**: `camelCase.js` (e.g., `matchApi.js`)
- **Stores**: `camelCase.js` (e.g., `authStore.js`)
- **Utils**: `camelCase.js` (e.g., `helpers.js`)

### Code
- **Components**: `PascalCase`
- **Functions**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **CSS Classes**: `kebab-case`
- **CSS Variables**: `--kebab-case`

## Import Order

```javascript
// 1. React & external libraries
import { useState } from 'react';
import { Card, Button } from 'antd';
import { motion } from 'framer-motion';

// 2. Components
import MatchCard from '../components/match/MatchCard';

// 3. Services & Stores
import useAuthStore from '../store/authStore';
import matchApi from '../services/matchApi';

// 4. Utils & Data
import { formatBandScore } from '../utils/helpers';
import { mockMatches } from '../utils/mockData';

// 5. Styles
import './PageName.css';
```

## Adding a New Feature

### Example: Adding a "Vocabulary Practice" Page

1. **Create page component**
   ```
   src/pages/VocabularyPage.jsx
   src/pages/VocabularyPage.css
   ```

2. **Create API service**
   ```
   src/services/vocabularyApi.js
   ```

3. **Add route in App.jsx**
   ```jsx
   <Route path="/vocabulary" element={<VocabularyPage />} />
   ```

4. **Add navigation in Navbar.jsx**
   ```jsx
   {
     key: '/vocabulary',
     icon: <BookOutlined />,
     label: <Link to="/vocabulary">Vocabulary</Link>,
   }
   ```

5. **Add mock data (optional)**
   ```javascript
   // src/utils/mockData.js
   export const mockVocabulary = [...];
   ```

## Environment Variables

Create `.env` from `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_GOOGLE_CLIENT_ID=your-client-id
VITE_ZEGO_APP_ID=your-zego-app-id
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

## Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
# Output: dist/
```

### Preview Production
```bash
npm run preview
```

## Code Quality Checklist

Before committing:
- [ ] No console errors
- [ ] All imports used
- [ ] No hardcoded values
- [ ] Responsive on mobile
- [ ] Animations smooth
- [ ] Forms validated
- [ ] Loading states added
- [ ] Error handling present
- [ ] Comments for complex logic
- [ ] CSS follows design system

---

**Last Updated**: 2026-01-16
