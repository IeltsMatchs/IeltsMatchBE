import { useState } from 'react';
import { Button, Empty, Spin } from 'antd';
import { TeamOutlined, ReloadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MatchCard from '../components/match/MatchCard';
import useMatchStore from '../store/matchStore';
import matchApi from '../services/matchApi';
import { mockMatches } from '../utils/mockData';
import './MatchPage.css';

/**
 * MatchPage Component
 * Core page displaying intelligent matching results
 */
const MatchPage = () => {
    const navigate = useNavigate();
    const { matches, isSearching, setMatches, startSearching } = useMatchStore();
    const [loading, setLoading] = useState(false);

    const handleFindPartner = async () => {
        startSearching();
        setLoading(true);

        try {
            // TODO: Connect to real API
            // const data = await matchApi.getMatches();

            // Simulate API call
            setTimeout(() => {
                setMatches(mockMatches);
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.error('Failed to fetch matches:', error);
            setLoading(false);
        }
    };

    const handleStartSession = async (match) => {
        try {
            // TODO: Connect to real API
            // const room = await matchApi.createStudySession(match.id);

            // Simulate creating room
            const roomId = `room-${Date.now()}`;
            navigate(`/room/${roomId}`);
        } catch (error) {
            console.error('Failed to create session:', error);
        }
    };

    return (
        <div className="match-page">
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="match-header"
                >
                    <div className="header-content">
                        <h1 className="page-title">
                            <TeamOutlined /> Find Your Study Partner
                        </h1>
                        <p className="page-subtitle">
                            Our AI matches you with partners who share similar goals and availability
                        </p>
                    </div>
                    <Button
                        type="primary"
                        size="large"
                        icon={loading ? <Spin /> : <ReloadOutlined />}
                        onClick={handleFindPartner}
                        loading={loading}
                        className="find-partner-btn"
                    >
                        {matches.length > 0 ? 'Refresh Matches' : 'Find Partner'}
                    </Button>
                </motion.div>

                {/* Matches Grid */}
                {loading ? (
                    <div className="loading-container">
                        <Spin size="large" tip="Finding your perfect matches..." />
                    </div>
                ) : matches.length > 0 ? (
                    <div className="matches-grid">
                        {matches.map((match, index) => (
                            <MatchCard
                                key={match.id}
                                match={match}
                                index={index}
                                onStartSession={handleStartSession}
                            />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="empty-state"
                    >
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={
                                <div>
                                    <h3>No matches yet</h3>
                                    <p>Click "Find Partner" to discover your perfect study matches</p>
                                </div>
                            }
                        />
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default MatchPage;
