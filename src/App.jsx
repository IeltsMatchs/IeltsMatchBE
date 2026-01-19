import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { antdTheme } from './styles/theme';
import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/layout/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import MatchPage from './pages/MatchPage';
import StudyRoomPage from './pages/StudyRoomPage';
import SpeakingPage from './pages/SpeakingPage';
import WritingPage from './pages/WritingPage';
import ForumPage from './pages/ForumPage';
import useAuthStore from './store/authStore';
import './styles/global.css';

/**
 * Main App Component
 * Handles routing and global configuration
 */
function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <ConfigProvider theme={antdTheme}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/match" replace /> : <LoginPage />
            }
          />

          {/* Protected Routes */}
          <Route
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            {/* Profile Setup - No profile completion required */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute requireProfile={false}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            {/* Main Pages - Require profile completion */}
            <Route path="/match" element={<MatchPage />} />
            <Route path="/room/:roomId" element={<StudyRoomPage />} />
            <Route path="/speaking" element={<SpeakingPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/forum" element={<ForumPage />} />
          </Route>

          {/* Default Redirect */}
          <Route
            path="/"
            element={
              <Navigate to={isAuthenticated ? '/match' : '/login'} replace />
            }
          />

          {/* 404 - Redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
