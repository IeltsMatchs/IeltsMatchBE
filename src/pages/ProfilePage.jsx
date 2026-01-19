import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { motion } from 'framer-motion';
import ProfileForm from '../components/profile/ProfileForm';
import useAuthStore from '../store/authStore';
import profileApi from '../services/profileApi';
import './ProfilePage.css';

/**
 * ProfilePage Component
 * Collects user IELTS profile data for matching algorithm
 */
const ProfilePage = () => {
    const navigate = useNavigate();
    const { user, updateProfile } = useAuthStore();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            // TODO: Connect to real API
            // await profileApi.updateProfile(values);

            // Simulate API call
            setTimeout(() => {
                updateProfile(values);
                message.success('Profile completed successfully!');
                navigate('/match');
                setLoading(false);
            }, 1500);
        } catch (error) {
            message.error('Failed to update profile');
            setLoading(false);
        }
    };

    return (
        <div className="profile-page">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container"
            >
                <div className="profile-header">
                    <h1 className="page-title">Complete Your Profile</h1>
                    <p className="page-subtitle">
                        Help us find the perfect study partner for you
                    </p>
                </div>

                <ProfileForm
                    initialValues={user}
                    onSubmit={handleSubmit}
                    loading={loading}
                />
            </motion.div>
        </div>
    );
};

export default ProfilePage;
