import { Navigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

/**
 * ProtectedRoute Component
 * Redirects to login if user is not authenticated
 * Redirects to profile setup if profile is not completed
 */
const ProtectedRoute = ({ children, requireProfile = true }) => {
    const { isAuthenticated, profileCompleted } = useAuthStore();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (requireProfile && !profileCompleted) {
        return <Navigate to="/profile" replace />;
    }

    return children;
};

export default ProtectedRoute;
