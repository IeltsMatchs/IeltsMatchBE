import { Card, Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAuthStore from '../store/authStore';
import { mockUser } from '../utils/mockData';
import './LoginPage.css';

/**
 * LoginPage Component
 * Google OAuth login entry point
 */
const LoginPage = () => {
    const navigate = useNavigate();
    const setUser = useAuthStore((state) => state.setUser);

    const handleGoogleLogin = async () => {
        try {
            // TODO: Implement real Google OAuth
            // For now, use mock data
            setTimeout(() => {
                setUser({ ...mockUser, token: 'mock-jwt-token' });
                navigate('/match');
            }, 1000);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="login-page">
            <div className="login-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="login-container"
            >
                <Card className="login-card">
                    {/* Logo & Branding */}
                    <div className="login-header">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            className="logo-circle"
                        >
                            <span className="logo-emoji">🎯</span>
                        </motion.div>
                        <h1 className="login-title">
                            IELTS <span className="text-gradient">Study Match</span>
                        </h1>
                        <p className="login-tagline">
                            Find your perfect study partner and ace the IELTS together
                        </p>
                    </div>

                    {/* Login Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button
                            type="primary"
                            size="large"
                            icon={<GoogleOutlined />}
                            onClick={handleGoogleLogin}
                            className="google-login-btn"
                            block
                        >
                            Continue with Google
                        </Button>
                    </motion.div>

                    {/* Features */}
                    <div className="login-features">
                        <div className="feature-item">
                            <span className="feature-icon">🤝</span>
                            <span className="feature-text">Smart Matching</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">🎤</span>
                            <span className="feature-text">AI Practice</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">💬</span>
                            <span className="feature-text">Live Sessions</span>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
};

export default LoginPage;
